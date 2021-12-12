import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import { Spinner } from '../Spinner'
import { Fragment } from 'react'
import ProfileItem from './ProfileItem'
import { Flex } from '@chakra-ui/layout'

const Profiles = ({ getProfiles, profile: {profiles, loading}, limit}) => {
    useEffect(()=>{
        getProfiles();
    }, [getProfiles]);
    const newProfiles = profiles.slice(0, limit)
    return (
        <div className="profile-container">
            { loading ? <Spinner/> : <Fragment>
                <h3 className="profile-primary"> Security Specialists</h3>
                <p className="profile-secondary">
                    Connect with Security Specialists on the website here
                </p>
                <Flex className="profiles" flexDirection="column" alignContent="center">
                    {
                        newProfiles.length > 0 ? (
                            newProfiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile} />
                        )) ) : <h4> No profiles yet ..</h4> } 
                </Flex>
            </Fragment>}
        </div>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    profile: state.profile
})
export default connect(mapStateToProps, {getProfiles})(Profiles);
