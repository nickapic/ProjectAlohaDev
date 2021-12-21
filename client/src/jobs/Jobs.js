import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getJobs } from '../actions/job'
import { Spinner } from '../components/Spinner'
import JobItem from './JobItem'
import { Input } from '@chakra-ui/react'
const Jobs = ({ getJobs , job:{
    jobs, loading
}, limit } ) => {
    const query = ""
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredJobs, setFilteredjobs] = useState({});
    const onChange = (e) => {
        setSearchQuery(e.target.value)
    }
    useEffect(() => {
        getJobs();
    }, [getJobs]);
    const showJobs = jobs.filter( job => {
        if (searchQuery === ""){
            return jobs.slice(limit);
        } else if(job.title.toLowerCase().includes(searchQuery)){
            return job;
        }
    })
    return loading ? <Spinner/> : (
        <div >
           <h3 className="jobs-heading">Job Openings</h3>
            <Input placeholder='Search for Jobs here' marginTop="1rem" onChange={e => onChange(e)} />
           <div className="jobs-list-container">        
               {showJobs.map( job => (
                   <JobItem key={job._id} job={job}/>
               ))}
           </div>
        </div>
    )
}

Jobs.propTypes = {
    jobs: PropTypes.array
}

const mapStateToProps = state => ({
    job: state.job
})

export default  connect(mapStateToProps, {getJobs})(Jobs);
