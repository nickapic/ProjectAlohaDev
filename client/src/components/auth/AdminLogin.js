import React , { useState} from 'react'
import './login.css'
import { Link, Redirect } from 'react-router-dom';
import { connect} from 'react-redux'
import PropTypes from 'prop-types'
import { adminlogin } from '../../actions/auth'

 const AdminLogin = ({ adminlogin , isAdmin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
   //  Change This 
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    adminlogin(email, password);
  };
  // Redirect to a diffrent page if authentication
  if( isAdmin ){
    return <Redirect to="/dashboard"/>
  }
  return (
    <div className="authentication-page">
      <div className="form-section">
        <h2 className="form-section_label">Log into Admin here</h2>
        <form className="form-section_form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Your Email here"
              onChange={(e) => onChange(e)}
              value={email}
              required
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-input"
              placeholder="Enter your password here"
              onChange={(e) => onChange(e)}
              value={password}
              required
            />
          </div>
          <input type="submit" className="form-input-btn" value="Log in" />
        </form>
        <span className="form-section-login">
          Don't have a account? <Link to="/register">Register here</Link>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin
})
AdminLogin.propTypes = {
  adminlogin: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
}

export default connect(mapStateToProps, { adminlogin })(AdminLogin)