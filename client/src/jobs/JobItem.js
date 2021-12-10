import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import { addLike, removeLike, deleteJob} from '../actions/job'
import './job.css'
import { Button } from '@chakra-ui/button';
import ButtonGroup from 'antd/lib/button/button-group'
import { Box, Text } from '@chakra-ui/layout'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
  } from '@chakra-ui/react'
  

const JobItem = ({
    addLike, removeLike, deleteJob, 
    auth, job : { _id, description,name,avatar, company, user, title,likes, comments,date} 
}) => {
    return (
        <Box w="97%" bg="black" p={6} borderRadius='lg' marginTop="1rem">
            <div className="job-information">
                <h4 className="job-heading">{title}</h4>
                <h4 className="job-company">{company}</h4>
            </div>
            <Text fontSize="1rem" color="white" >Posted on {<Moment format="YYYY/MM/DD">{date}</Moment> } </Text>
            <Text fontSize="0.75rem" color="white"> Description : {description}</Text>
            <ButtonGroup className="button-container" >
                <Button colorScheme="green" onClick={ e => addLike(_id)} type='button' className="job-button">
                    Like {" "}   <span className="job_span">{likes.length}</span>
                </Button>
                <Button colorScheme="red" onClick={ e => removeLike(_id)} type='button' className="job-button">
                    Unlike 
                </Button>
                <Button marginRight="10px" colorScheme="teal" as={Link} to={`/jobs/${_id}`}>
                    More Details { comments.length > 0 && (
                        <span className="job-comment">{comments.length}</span>
                    )}
                </Button>
            {
                !auth.loading && user === auth.user._id && (
                  
                    <Popover>
                    <PopoverTrigger>
                      <Button color>Delete</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                        <Button colorScheme="red" onClick={ e => deleteJob(_id) } type="button" >
                            Delete
                        </Button>
                        </PopoverBody>
                        <PopoverFooter>This is the footer</PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                )
            }
            </ButtonGroup>
        </Box>
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
