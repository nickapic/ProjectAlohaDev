import React  from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect } from 'react-redux';
import { deleteExperience} from '../../actions/profile'
import { Td, Th, Table, Tr, Thead, Tbody } from '@chakra-ui/table';
import { Button } from '@chakra-ui/button';

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
                <Button colorScheme="red" onClick={() => deleteExperience(exp._id)} className="table-button">Delete</Button>
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
