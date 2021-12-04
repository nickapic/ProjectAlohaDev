import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import { addLike, removeLike, deleteJob} from '../actions/job'
import './job.css'
import { Button } from '@chakra-ui/button';
import ButtonGroup from 'antd/lib/button/button-group'


const JobItem = ({
    addLike, removeLike, deleteJob, 
    auth, job : { _id, description,name,avatar, company, user, title,likes, comments,date} 
}) => {
    return (
        <div className="job-post">
            <div className="job-information">
                <h4 className="job-heading">{title}</h4>
                <h4 className="job-company">{company}</h4>
            </div>
            <p className="job-date">Posted on {<Moment format="YYYY/MM/DD">{date}</Moment> } </p>
            <p className="job-text">{description}</p>
            <ButtonGroup className="button-container" >
                <Button colorScheme="green" onClick={ e => addLike(_id)} type='button' className="job-button">
                    Like {" "}   <span className="job_span">{likes.length}</span>
                </Button>
                <Button colorScheme="red" onClick={ e => removeLike(_id)} type='button' className="job-button">
                    Unlike
                </Button>
            </ButtonGroup>
            <div>
                <Button marginRight="10px">
                    <Link to={`/jobs/${_id}`} > 
                    More Details { comments.length > 0 && (
                        <span className="job-comment">{comments.length}</span>
                    )}
                </Link> </Button>
            {
                !auth.loading && user == auth.user._id && (
                    <Button colorScheme="red" onClick={ e => deleteJob(_id) } type="button" >
                        Delete
                    </Button>
                )
            }
            </div>

        </div>
    )
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deleteJob: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps,{ addLike, removeLike, deleteJob})(JobItem);
