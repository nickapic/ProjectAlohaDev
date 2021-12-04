import React from 'react'
import PropTypes from 'prop-types';
import Moment from "react-moment";
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { deleteEducation } from '../../actions/profile';
import { Td, Th, Table, Tr, Thead, Tbody } from '@chakra-ui/table';
import { Button } from '@chakra-ui/button';

const Education = ({ education, deleteEducation }) => {
    const educations = education.map( edu => (
        <div className="table-section">

        <Td key={edu._id}>
        <Td>{edu.school}</Td>
        <Td className="hide-sm">{edu.degree}</Td>
        <Td>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {edu.to == null ? ('Now') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)}
        </Td>
        <Td>
            <Button
            onClick={() => deleteEducation(edu._id)}
            className="table-button"
            >
            Delete
            </Button>
        </Td>
        </Td>
                </div>

    ));
    return (
        <div >
            <h2 className="profile-primary">My Education</h2>
            <Table className="table" size="sm">
                <Thead>
                <Tr className="table-section">
                    <Th>School</Th>
                    <Th className="hide-sm">Degree</Th>
                    <Th className="hide-sm">Years</Th>
                    <Th />
                </Tr>
                </Thead>
                <Tbody className="table-special">{educations}</Tbody>
            </Table>
        </div>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(Education)
