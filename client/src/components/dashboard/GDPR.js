import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, logout } from '../../actions/auth';
import { Fragment } from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Portal
  } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { deleteAccount } from '../../actions/profile';

const GDPR = ({ auth: {isAuthenticated, loading, user}, logout, deleteAccount}) => {

    return (
        <div className="gdpr">
            <h3>These are the GDPR actions you can take </h3>
            <Button colorScheme='red' onClick={deleteAccount(user.id)}>Confirm</Button>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
GDPR.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}


export default connect(mapStateToProps, {logout, deleteAccount})(GDPR);