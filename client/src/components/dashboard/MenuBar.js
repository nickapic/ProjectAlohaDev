import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react';
import {Button} from "@chakra-ui/button"
import {  HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const MenuBar = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<HamburgerIcon />}>Menu</MenuButton>
            <MenuList>
                <MenuItem as={Link} to="/profiles" >Profles</MenuItem>
                <MenuItem as={Link} to="/jobs" >Jobs</MenuItem>
                <MenuItem as={Link} to="/resources" >Resources</MenuItem>
                <MenuItem as={Link} to="/gdpr" >GDPR Policy</MenuItem>
            </MenuList>
        </Menu>
    )
}
