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
import HRDashboard from './HRDashboard';

const UserDashboard = ({getCurrentProfile, auth: {user , role }, profile: { profile, loading }}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return (  role === "company" ? <HRDashboard/> : 
    <Fragment> 
        <Flex width="100%" align="flex-start" className="dashboard-box">
        <Flex width="45%" direction="column" className="right-side-dashboard" > 
                    <Box marginTop="2rem" w="95%" h="10rem" bg="#F1F1F1" borderRadius="lg"padding="2rem" boxShadow="md">
                    <Text fontSize='2xl' marginBottom="1rem" className="jobs-heading">Actions</Text>
                    <Actions/> 
                    </Box>
                    <Box marginTop="2rem" w="95%" h="28rem" bg="#F1F1F1" borderRadius="lg"padding="2rem" boxShadow="md">
                        <Resources/>
                    </Box>
        </Flex>
                <Spacer/>
                <Box marginTop="2rem" width="52%" h="40rem" bg="#F1F1F1" borderRadius="lg"padding="2rem" boxShadow="md" className="jobs-box" >
                    <Jobs limit={2}/>
                    <Button as={Link} fontSize="0.75rem" colorScheme="teal" to="/jobs" marginTop="1rem"  marginLeft="2px">See all Jobs</Button>
                </Box>
        </Flex>
    </Fragment>
    )
}
UserDashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})
export default connect(mapStateToProps, {getCurrentProfile})(UserDashboard);
