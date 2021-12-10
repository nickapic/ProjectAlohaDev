import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { Button } from '@chakra-ui/button';
import { Box, Text,  } from '@chakra-ui/layout'


const ResourceItem = ({
    resource : { id, attributes} 
}) => {
    return (
        <Box w="97%" bg="black" p={6} borderRadius='lg' marginTop="1rem">
            <div className="job-information">
                <h4 className="job-heading">{attributes.title}</h4>
            </div>
            <Text color="white" fontSize="0.75rem">{attributes.description}</Text>
            <div>
                <Button to={`/resources/${id}`} marginRight="10px" colorScheme="teal" fontSize="10px" as={Link} marginTop="7px">
                    See Resource  
               </Button>
        
            </div>

        </Box>
    )
}

ResourceItem.propTypes = {
    resource: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps,{ })(ResourceItem);
