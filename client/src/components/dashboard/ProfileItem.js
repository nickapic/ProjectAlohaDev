import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './profileitem.css'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Center, ListItem, UnorderedList } from '@chakra-ui/layout'

const ProfileItem = ({ profile: {
    user: { _id, name, avatar},
    status,
    company,
    location,
    skills
}}) => {
    return (
        <Box w="90%"  borderRadius='lg' className="profile-items">
            <img src={avatar} alt="" className="profile-image"/>
            <Flex className="profile-item" flexDirection="row" w="25%">
                <Center flexDirection="column" >
                <h2 className="profile-information"> {name}</h2>
                <p className="profile-information">{status} {company && <span> at {company}</span>}</p>
                <p className="profile-information">{ location && <span>{location}</span>}</p>
                </Center>
            <UnorderedList flexDirection="column" marginLeft="30px" >
                {skills.slice(0,4).map((skill, index) => (
                    <ListItem key={index} className="profile-skills-item" color="white">
                        <span>{skill}</span>
                    </ListItem>
                ))}
            </UnorderedList>
            <Spacer/>
            </Flex>
              <Button ><Link to={`/profile/${_id}`} >
                    View Profile
                </Link></Button>
           

        </Box>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}
export default ProfileItem
