import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button } from '@chakra-ui/button';
import {
    Tr,Td
  } from '@chakra-ui/react'
import { adminDeleteAccount } from '../../actions/profile'


const AdminProfileItem = ({
     admin, 
    auth, user : { _id, name, email,isAdmin } ,
    adminDeleteAccount
}) => {
    return (
                    <Tr>
                    <Td>{name}</Td>
                    <Td> {email} </Td>
                    <Td> {_id} </Td>
                    <Td> 
                    <Button colorScheme="red" onClick={ e => adminDeleteAccount(_id) } type="button" >
                        Delete
                    </Button>  </Td>
                    </Tr>
                
    )
}

AdminProfileItem.propTypes = {
    auth: PropTypes.object.isRequired,
    adminDeleteAccount: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps,{ adminDeleteAccount})(AdminProfileItem);
