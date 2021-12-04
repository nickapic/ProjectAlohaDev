import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import './login.css'
import { connect } from 'react-redux';
import {setAlert} from '../../actions/alert';
import {adminRegister} from '../../actions/auth';
import { Button } from '@chakra-ui/button';

import PropTypes from 'prop-types'


const AdminRegister = ({ setAlert, adminRegister, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    secret_key: ""
  });
  const { name, email, password, password2, secret_key } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
        setAlert('Passwords do not Match', 'warning')
    } else {
      adminRegister({name,email, password, secret_key})
  };
};
  if(isAuthenticated){
    return <Redirect to="/dashboard"/>
  }
  return (
    <div className="form-section" onSubmit={(e) => onSubmit(e)}>
      <h2 className="form-section_label">Register here</h2>
      <form className="form-section_form">
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            placeholder="Name here"
            pattern="[a-zA-Z]+"
            title="Please enter Alphabets."
            value={name}
            onChange={(e) => onChange(e)}
            required={true}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input border-black"
            placeholder="Your Email here"
            onChange={(e) => onChange(e)}
            value={email}
            required={true}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input "
            placeholder="Enter your password here"
            onChange={(e) => onChange(e)}
            value={password}
            required={true}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="confirmpassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            id="confirmpassword"
            className="form-input"
            minLength={6}
            onChange={(e) => onChange(e)}
            placeholder="Confirm your password"
            value={password2}
            required={true}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="confirmpassword">
            Secret Key
          </label>
          <input
            type="password"
            name="secret_key"
            id="secret_key"
            className="form-input"
            onChange={(e) => onChange(e)}
            placeholder="Confirm your Secret key"
            value={secret_key}
            required={true}
          />
        </div>
        <Button type="submit"colorScheme="teal" className="form-input-btn" value="Register"> Register </Button>
      </form>
      <span className="form-section-login">
        Already have a account? <Link to="/login">Login here</Link>
      </span>
    </div>
  );
};

AdminRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  adminRegister: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {setAlert, adminRegister})(AdminRegister);
