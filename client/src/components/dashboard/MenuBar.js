import React, { Fragment } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react';
import {Button} from "@chakra-ui/button"
import {  HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const MenuBar = ({auth: {isAdmin}}) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<HamburgerIcon />}>Menu</MenuButton>
            <MenuList>
                <MenuItem as={Link} to="/profiles" >Profles</MenuItem>
                <MenuItem as={Link} to="/jobs" >Jobs</MenuItem>
                <MenuItem as={Link} to="/resources" >Resources</MenuItem>
                <MenuItem as={Link} to="/gdpr" >GDPR Policy</MenuItem>
                {
                    isAdmin ? <MenuItem as={Link} to="/admin" >Admin</MenuItem> : <Fragment></Fragment>
                }
            </MenuList>
        </Menu>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(MenuBar);