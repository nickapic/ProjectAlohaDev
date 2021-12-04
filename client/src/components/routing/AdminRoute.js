import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

const AdminRoute = ({ component: Component, auth:{ isAuthenticated, loading, isAdmin}, ...rest }) => (
    <Route {...rest} render={props => !isAdmin && !loading ? ( <Redirect to='/login'/>) : (<Component {...props} />)} />
)
AdminRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(AdminRoute)
