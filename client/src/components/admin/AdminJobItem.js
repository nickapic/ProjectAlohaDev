import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {adminDeleteJob} from '../../actions/job'
import { Button } from '@chakra-ui/button';
import ButtonGroup from 'antd/lib/button/button-group'
import {
    Tr,Td
  } from '@chakra-ui/react'
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

const AdminJobItem = ({
     adminDeleteJob, 
    auth, job : { _id, description,name,avatar, company, user, title,likes, comments,date}
}) => {
    return (
                    <Tr>
                    <Td>{title}</Td>
                    <Td> {description} </Td>
                    <Td> {likes.length} </Td>
                    <Td> 
                    <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="red">Delete</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Confirm you want to delete the Job?</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                        <Button colorScheme="red" onClick={ e => adminDeleteJob(_id) } type="button" >
                            Confirm 
                        </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                    </Popover>
                    </Td>
                    </Tr>
                
    )
}

AdminJobItem.propTypes = {
    auth: PropTypes.object.isRequired,
    adminDeleteJob: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps,{ adminDeleteJob})(AdminJobItem);
