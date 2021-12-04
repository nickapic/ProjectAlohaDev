import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, logout } from '../actions/auth';
import { Fragment } from 'react';
import { Button } from '@chakra-ui/button';

const Navbar = ({ auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
            <ul className="nav-links">
                <li className="list-items"><Button variant="ghost"><Link to="/jobs">Jobs</Link></Button></li>
                <li className="list-items"><Button variant="ghost"><Link to="/profiles">Profiles</Link></Button></li>
                <li className="list-items"><Button fontWeight="700" textTransform="uppercase" variant="ghost"> <a href="https://nickapic.github.io/"  target="_blank">Resources</a></Button></li>
                <li className="list-items"><Button colorScheme="red" onClick={logout} marginLeft="15px">Logout</Button></li>
            </ul>
    );
    const guestLinks = (
            <ul className="nav-links">
                <li className="list-items"><Button variant="ghost"><Link to="/register">Register</Link></Button></li>
                <li className="list-items"><Button variant="ghost"><Link to="/profiles">Profiles</Link></Button></li>
                <li className="list-items"><Button fontWeight="700" textTransform="uppercase" variant="ghost"> <a href="https://nickapic.github.io/"  target="_blank">Resources</a></Button></li>
                <li className="list-items"><Button colorScheme="green" marginLeft="15px" ><Link to="/login">Login</Link></Button></li>

            </ul>   
    )
    return (
        <div className="navbar">
            <h3 className="nav-heading-wrapper">
            <Button variant="ghost" fontWeight="700"><a href="/">Project Aloha Oy</a></Button>
            </h3>
            { !loading && ( <Fragment>
               { isAuthenticated ? authLinks : guestLinks }
            </Fragment> ) }
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}


export default connect(mapStateToProps, {logout})(Navbar);