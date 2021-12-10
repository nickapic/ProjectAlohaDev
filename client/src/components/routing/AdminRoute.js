import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

const AdminRoute = ({ component: Component, auth:{ isAuthenticated, loading, isAdmin}, ...rest }) => (
    <Route {...rest} render={props =>  !isAuthenticated && !loading  ? ( <Redirect to='/login'/>) : ( isAdmin ? <Component {...props} /> : "You are not allowed to access this route.")} />
)
AdminRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(AdminRoute)
