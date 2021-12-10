import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getJobs } from '../actions/job'
import { Spinner } from '../components/Spinner'
import JobItem from './JobItem'
const Jobs = ({ getJobs , job:{
    jobs, loading
} }, ) => {
    useEffect(() => {
        getJobs();
    }, []);
    let showJobs = jobs.slice(0, 2);
    return loading ? <Spinner/> : (
        <div >
           <h3 className="jobs-heading">Job Openings</h3>
           <div className="jobs-list-container">        
               {showJobs.map( job => (
                   <JobItem key={job._id} job={job}/>
               ))}
           </div>
        </div>
    )
}

Jobs.propTypes = {

}

const mapStateToProps = state => ({
    job: state.job
})

export default  connect(mapStateToProps, {getJobs})(Jobs);
