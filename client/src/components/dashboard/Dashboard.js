import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile} from '../../actions/profile'
import { Spinner } from '../Spinner';
import { loadUser } from '../../actions/auth';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import Actions from './Actions';
import Experience from './Experience';
import Education from './Education';
import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';

const Dashboard = ({getCurrentProfile, auth: {user}, profile: { profile, loading }}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return (  loading && profile == null ? <Spinner/> : 
    <Fragment> 
        <div className="container-dashboard">
        <Text className="primary-text">Dashboard</Text>
        <p className="primary-greeting">Welcome {user && user.name},</p>
        {
            profile !== null ? <Fragment> 
                <Actions/> 
                <Experience experience={profile.experience}/>
                <Education education={profile.education}/>s
                </Fragment> : <Fragment>
                <p className="primary-warning"> You have not yet setup a profile, please create a profile and increase your visibility on the platform</p>
                <Button colorScheme="teal"><Link to="/profile" >Create Profile</Link></Button>
        
            </Fragment>
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
