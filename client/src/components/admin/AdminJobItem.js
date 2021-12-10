import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {adminDeleteJob} from '../../actions/job'
import { Button } from '@chakra-ui/button';
import ButtonGroup from 'antd/lib/button/button-group'
import {
    Table,Thead,Tbody,Tr,Th,Td,TableCaption,
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
                    <Button colorScheme="red" onClick={ e => adminDeleteJob(_id) } type="button" >
                        Delete
                    </Button>  </Td>
                    </Tr>
                
    )
}

AdminJobItem.propTypes = {
    job: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deleteJob: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps,{ adminDeleteJob})(AdminJobItem);
