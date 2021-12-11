import React  from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect } from 'react-redux';
import { deleteExperience} from '../../actions/profile'
import { Td, Th, Table, Tr, Thead, Tbody } from '@chakra-ui/table';
import { Button } from '@chakra-ui/button';
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

const Experience = ({ experience, deleteExperience}) => {
    
    const expereinces = experience.map(exp => (
        <Tr>
            <Td fontSize="1rem">{exp.company}</Td>
            <Td fontSize="1rem">{exp.title}</Td>
            <Td fontSize="1rem">
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                    exp.to == null ? ('Now') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                }
            </Td>
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
                        <Button colorScheme="red" onClick={ e => deleteExperience(exp._id) } type="button" >
                            Confirm 
                        </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                </Popover>            
            </Td>
        </Tr>
    ))
    return (
        <div className="experience-container">
                <Table variant="simple" width="40%" marginTop="2rem">
                    <Thead>
                    <Tr >
                        <Th>Company</Th>
                        <Th >Title</Th>
                        <Th >Years</Th>
                        <Th> Delete</Th>
                    </Tr>
                    </Thead>
                    <Tbody>{expereinces}</Tbody>
                </Table>
        </div>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience : PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
