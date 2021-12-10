import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  logout } from '../actions/auth';
import { Fragment } from 'react';
import { Button } from '@chakra-ui/button';
import { MenuBar } from './dashboard/MenuBar';
import { Text } from '@chakra-ui/layout';
const Navbar = ({ auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
        <div className="navbar">
        <Text variant="ghost" as={Link} fontWeight="700" fontSize="xl" to="/dashboard">Project Aloha Oy</Text>
        { !loading && ( <Fragment>
                <ul className="nav-links-auth">
                <li className="nav-links-auth-links"><MenuBar/></li>
                <li className="nav-links-auth-links"><Button colorScheme="red" onClick={logout}>Logout</Button></li>
            </ul>
        </Fragment> ) }
    </div>
            
    );
    const guestLinks = (

        <div className="navbar">
            <h3 className="nav-heading-wrapper">
            <Text variant="ghost" as={Link} fontWeight="700" fontSize="xl" to="/">Project Aloha Oy</Text>
            </h3>
            { !loading && ( <Fragment>
                <ul className="nav-links">
                    <li className="list-items"><Button colorScheme="green" marginLeft="15px" as={Link} to="/login" >Login</Button></li>
                </ul>   
            </Fragment> )}
        </div>
    )
    return (
            <Fragment>
            { !loading && ( <Fragment>
               { isAuthenticated ? authLinks : guestLinks }
            </Fragment> ) }
            </Fragment>
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