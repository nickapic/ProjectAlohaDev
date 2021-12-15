import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile} from '../../actions/profile'
import { Spinner } from '../Spinner';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import Actions from './Actions';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Text, Spacer } from '@chakra-ui/layout';
import { ReactComponent as ProfileLogo} from "../../profile.svg"
import Jobs from '../../jobs/Jobs';
import Resources from '../resources/Resources';
import UserDashboard from './UserDashboard.js'
import { Image } from '@chakra-ui/react';

const Dashboard = ({getCurrentProfile, auth: {user, isAdmin }, profile: { profile, loading }}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return (  loading && profile == null ? <Spinner/> : 
    <Fragment> 
        <div className="container-dashboardjs">
        <Text className="primary-text">Dashboard</Text>
        <Text fontSize="1.5rem">Welcome,</Text>
        <Text fontSize="1rem"> This is where you can set up your Profile, Experiences, Find Jobs and resources cattered to you.</Text>
        
        { profile !== null ?  <UserDashboard/> : <Box>
                <Flex height="30rem" width="90%" direction="row" align="center" justifyContent="space-between">
                    <Box marginTop="2rem" width="45%" h="15rem" bg="#F1F1F1" borderRadius="lg"padding="2rem" boxShadow="md" className='noprofile-right'>
                    <Text fontSize='xl' marginBottom="1rem" textTransform="capitalize">You have not yet setup a profile, please create a profile and increase your visibility on the platform</Text>
                    <Button colorScheme="teal" as={Link} to="/profile">Create Profile</Button>
                    </Box>
                    <Box width="50%" marginLeft="15rem" className='noprofile-left'>
                        <Image src="https://i.ibb.co/6Z2HVsr/profile.jpg" />
                        <a href="https://www.freepik.com/vectors/business" className='copyright'>Business vector created by freepik - www.freepik.com</a>
                    </Box>
                </Flex>
            </Box>
        }
        </div>
    </Fragment>
    )
}
Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})
export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
