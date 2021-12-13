import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Spinner } from '../../components/Spinner'
import {
    Table,Thead,Tbody,Tr,Th,TableCaption,
  } from '@chakra-ui/react';
import AdminProfileItem from './AdminProfileItem'
import { getUsers } from '../../actions/auth'

const AdminProfiles = ({ getUsers , auth:{
    users, loading 
} }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);
    return loading ? <Spinner/> : (
        <div >
           <Table w="70%" marginTop="2rem">
            <TableCaption>Users</TableCaption>
                <Thead>
                    <Tr>
                    <Th> User Name </Th>
                    <Th> User Email </Th>
                    <Th> User Profile Id </Th>
                    <Th> deleteAccount </Th>
                    </Tr>
                </Thead>
                <Tbody>
               {users.map( user => (
                   <AdminProfileItem key={user._id} user={user}/>
               ))}
               </Tbody>
            </Table>
           </div>
    )
}

AdminProfiles.propTypes = {
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default  connect(mapStateToProps, {getUsers})(AdminProfiles);
