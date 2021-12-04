import React , { Fragment} from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect } from 'react-redux';
import { deleteExperience} from '../../actions/profile'
import { Td, Th, Table, Tr, Thead, Tbody } from '@chakra-ui/table';
import { Button } from '@chakra-ui/button';

const Experience = ({ experience, deleteExperience}) => {
    
    const expereinces = experience.map(exp => (
        <Fragment>
            <Td key={exp._id}></Td>
            <Td>{exp.company}</Td>
            <Td >{exp.title}</Td>
            <Td>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                    exp.to == null ? ('Now') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                }
            </Td>
            <Td>
                <Button onClick={() => deleteExperience(exp._id)} className="table-button">Delete</Button>
            </Td>
        </Fragment>
    ))
    return (
        <div className="experience-container">
            <h3 className="profile-primary">My Experiences</h3>
                <Table className="table" size="sm">
                    <Thead>
                    <Tr className="table-section">
                        <Th>Company</Th>
                        <Th >Title</Th>
                        <Th >Years</Th>
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
