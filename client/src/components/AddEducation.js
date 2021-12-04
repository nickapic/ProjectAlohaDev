import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../actions/profile';
import "./profile.css"
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Checkbox } from '@chakra-ui/checkbox';
import { Button } from '@chakra-ui/button';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="profile-container">
      <h1 className="profile-primary">Add Your Education</h1>
      <p className="lead">
        <i className="profile-secondary" /> Add any school or bootcamp that you
        have attended
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className="form-group">
          <Input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4 className="profile-label">From Date</h4>
          <Input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
            <Checkbox
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            >
            Current School
            </Checkbox>
        </div>
        <div className="form-group">
          <h4 className="profile-label">To Date</h4>
          <Input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <Textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <Button type="submit"colorScheme="teal" className="form-input-btn" value="Log in"> Submit </Button>
        <Button colorScheme="red" marginTop="15px"><Link to="/dashboard">
          Go Back
        </Link></Button>
      </form>
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
