import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addJob } from '../actions/job'
import './job.css'
import { Textarea } from '@chakra-ui/textarea';
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const JobForm = ({addJob}) => {
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [applyLink, setApplylink] = useState("")

    return (
        <div className="job-post-container">
            <h3 className="job-post-title">
                Post your Job Ad Here :
            </h3>
            <form className="job-post-form" onSubmit={e => {
                e.preventDefault();
                addJob({description,title,company,applyLink});
                setApplylink("");
                setCompany("");
                setTitle("");
                setDescription("");
            }}>
                <Input
                    type="text"
                    placeholder="* Job Title Goes here"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="* Apply Link"
                    name="title"
                    value={applyLink}
                    onChange={e => setApplylink(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="* Company"
                    name="company"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    required
                />
                <Textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="* Job Description goes here "
                value={description}
                required
                onChange={e => setDescription(e.target.value)}

                ></Textarea>
                <Button type="submit"colorScheme="teal" className="form-input-btn" value="Log in"> Submit </Button>

            </form>
        </div>
    )
}

JobForm.propTypes = {
    addJob: PropTypes.func.isRequired,
}

export default connect(null, {addJob})(JobForm)
