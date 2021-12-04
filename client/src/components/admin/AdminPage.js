import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile} from '../../actions/profile'
import { Spinner } from '../Spinner';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import Actions from '../dashboard/Actions';
import AdminJobs from './AdminJobs';


const AdminPage = ({getCurrentProfile, auth: {user}, profile: { profile, loading }}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return (  loading && profile == null ? <Spinner/> : 
    <Fragment> 
        <div className="container-dashboard">
        <h1 className="primary-text">Dashboard</h1>
        <p className="primary-greeting">Welcome Admin </p>
        <AdminJobs/>
        </div>
    </Fragment>
    )
}
AdminPage.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})
export default connect(mapStateToProps, {getCurrentProfile})(AdminPage);
