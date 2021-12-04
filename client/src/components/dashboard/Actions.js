import { Button } from '@chakra-ui/button'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import GDPR from './GDPR'


const Actions = () => {
    return (
        <Fragment>
        <div className="dash-links">
            <Button colorScheme="teal" marginRight="15px" padding="0px 25px"><Link to="/profile"> Edit your profile </Link></Button>
            <Button colorScheme="teal" marginRight="15px" padding="0px 25px"><Link to="/addexperience"> Add Experience </Link></Button>
            <Button colorScheme="teal" marginRight="15px" padding="0px 25px" ><Link to="/addeducation" > Add Education </Link></Button>
            <Button colorScheme="teal" marginRight="15px" padding="0px 30px"><Link to="/createjob"> Create a Job Listing </Link></Button>
        </div>
        </Fragment>
    )
}

export default Actions
