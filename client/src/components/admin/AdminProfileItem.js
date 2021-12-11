import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button } from '@chakra-ui/button';
import {
    Tr,Td
  } from '@chakra-ui/react'
import { adminDeleteAccount } from '../../actions/profile'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
  } from '@chakra-ui/react'

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
                    <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="red">Delete</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Confirm you want to delete the profile of this user?</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                        <Button colorScheme="red" onClick={ e => adminDeleteAccount(_id) } type="button" >
                            Confirm 
                        </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover></Td>
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
