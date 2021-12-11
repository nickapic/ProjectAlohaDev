import React from 'react'
import PropTypes from 'prop-types';
import Moment from "react-moment";
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
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
const Education = ({ education, deleteEducation }) => {
    const educations = education.map( edu => (

        <Tr>
        <Td fontSize="1rem">{edu.school}</Td>
        <Td fontSize="1rem">{edu.degree}</Td>
        <Td fontSize="1rem">
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {edu.to == null ? ('Now') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)}
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
                    <Button colorScheme="red" onClick={ e => deleteEducation(edu._id) } type="button" >
                        Confirm 
                    </Button>
                    </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>  
        </Td>
        </Tr>

    ));
    return (
        <div >
            <h2 className="profile-primary">My Education</h2>
            <Table  variant="simple" width="40%" marginTop="2rem">
                <Thead>
                <Tr>
                    <Th>School</Th>
                    <Th >Degree</Th>
                    <Th >Years</Th>
                    <Th> Delete </Th>
                </Tr>
                </Thead>
                <Tbody>{educations}</Tbody>
            </Table>
        </div>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(Education)
