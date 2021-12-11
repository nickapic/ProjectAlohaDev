import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getJobs } from '../../actions/job'
import { Spinner } from '../../components/Spinner'
import AdminJobItem from './AdminJobItem'
import {
    Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,
  } from '@chakra-ui/react';

const AdminJobs = ({ getJobs , job:{
    jobs, loading
} }) => {
    useEffect(() => {
        getJobs();
    }, []);
    return loading ? <Spinner/> : (
        <div >
           <Table width="70%" marginTop="2rem">
            <TableCaption>Jobs</TableCaption>
                <Thead>
                    <Tr>
                    <Th> Job Name </Th>
                    <Th> Job Description </Th>
                    <Th> Job likes </Th>
                    <Th> deleteAccount </Th>
                    </Tr>
                </Thead>
                <Tbody>
               {jobs.map( job => (
                   <AdminJobItem key={job._id} job={job}/>
               ))}
               </Tbody>
            </Table>
           </div>
    )
}

AdminJobs.propTypes = {
}

const mapStateToProps = state => ({
    job: state.job
})

export default  connect(mapStateToProps, {getJobs})(AdminJobs);
