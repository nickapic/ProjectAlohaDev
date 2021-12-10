import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './profileitem.css'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Center, ListItem, Text, UnorderedList } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

const ProfileItem = ({ profile: {
    user: { _id, name, avatar},
    status,
    company,
    location,
    skills
}}) => {
    return (
        <Flex w="90%" bg="black" p={6} borderRadius='lg' marginTop="1rem" >
            <Flex  flexDirection="row" w="15%" justifyContent="center" alignItems="center" marginLeft="1rem">
                <Avatar src={avatar} alt=""  marginRight="2rem"/>
                <Center flexDirection="column" >
                <Text color="white"> {name}</Text>
                <Text color="white">{status} {company && <span> at {company}</span>}</Text>
                <Text color="white">{ location && <span>{location}</span>}</Text>
                </Center>
            </Flex>
            <UnorderedList flexDirection="column" marginLeft="4rem" >
                {skills.slice(0,4).map((skill, index) => (
                    <ListItem key={index} fontSize="1rem" color="white">
                        <span>{skill}</span>
                    </ListItem>
                ))}
            </UnorderedList>
            <Spacer/>
            <Flex align="center" marginRight="20px"> 
            <Button ><Link to={`/profile/${_id}`} >
                    View Profile
            </Link></Button>
            </Flex>
             
           

        </Flex>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}
export default ProfileItem
