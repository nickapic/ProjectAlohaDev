import React, {useState} from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { addExperience } from '../actions/profile'
import { Button} from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Checkbox } from '@chakra-ui/checkbox';
const AddExperience = ({ addExperience, history }) => {
 const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="profile-container">
      <h1 className="profile-primary">Add An Experience</h1>
      <p className="profile-secondary">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div className="form-group">
          <Input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
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
              className="profile-checkbox"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            > Current </Checkbox>
          
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
            placeholder="Job Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <Button type="submit"colorScheme="teal" className="form-input-btn" value="Log in"> Submit </Button>
        <Button colorScheme="red" marginTop="15px"><Link  to="/dashboard">
          Go Back
        </Link></Button>
      </form>
      </div>
    )
}

AddExperience.propTypes = {
    addExperience : PropTypes.func.isRequired,
}

export default connect(null, {addExperience})(AddExperience);
