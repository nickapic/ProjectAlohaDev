import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getProfileById } from '../../actions/profile';
import { Spinner } from '../Spinner'
import ProfilePage from './ProfilePage';
import "./profilepage.css"
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import { Button } from '@chakra-ui/button';
import Experience from '../dashboard/Experience';
import Education from '../dashboard/Education';
import { Text } from '@chakra-ui/layout';
const Profile = ({ getProfileById , profile: {profile, loading}, auth, match }) => {
    useEffect(() => {
        console.log(match.params.id)
        getProfileById(match.params.id);
    }, [])
    return (
        <div>
            { profile === null || loading ? <Spinner/> : (
            <div className="profile-page-container"> 
                <ProfilePage profile={profile}/>
                <Text fontSize="2xl" fontWeight="bold">Experience</Text>
                { profile.experience.length > 0 ? (
                         <Experience experience={profile.experience}/>
                ) : 
                (
                    <Text fontSize="lrem">No experience was added</Text> 
                )}

                <Text fontSize="2xl" fontWeight="bold">Education</Text>
                {
                    profile.education.length > 0 ? (
                        <Education education={profile.education}/>
                    ) : (
                        <Text fontSize="1rem">No Education was added</Text>
                    ) 
                }
                <Button colorScheme="red" marginTop="1rem" marginRight="1rem" as={Link} to="/profiles" >Go Back</Button>
                {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Button colorScheme="teal" marginTop="1rem" ><Link to='/profile'>Edit Profile</Link></Button>)}
            </div> ) }
        </div> 
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    profile: state.profile,
    auth: state.auth
})
export default connect(mapStateToProps, { getProfileById })(Profile)
