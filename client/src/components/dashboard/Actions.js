import { Button, ButtonGroup } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GDPR from './GDPR';
import { Box, Flex } from '@chakra-ui/layout';
import { ReactComponent as HeroLogo} from "../../profile.svg"

const Actions = ({auth:{loading, isAuthenticated, role}}) => {
    const companyDashboard = (
        <Fragment>
            <ButtonGroup>
                <Button as={Link} colorScheme="red" marginRight="15px" padding="0px 10px"  to="/createjob" >Create a Job Listing</Button>
            </ButtonGroup>
        </Fragment>
    );
    const userDashboard = (
        <Fragment>
            <Button colorScheme="red" marginRight="15px" padding="0px 10px" className="action-button"><Link to="/profile"> Edit profile </Link></Button>
            <Button colorScheme="red" marginRight="15px" padding="0px 10px" className="action-button"><Link to="/addexperience"> Add Experience </Link></Button>
            <Button colorScheme="red" marginRight="15px" padding="0px 10px" className="action-button" ><Link to="/addeducation" > Add Education </Link></Button>
        </Fragment>
    )
    return (
        <Flex direction="row" align="flex-start">
            <Box>
                { !loading && ( <Fragment>
                    { role === "company" ? companyDashboard : userDashboard }
                </Fragment> ) }
            </Box>
        </Flex>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
  })

export default connect(mapStateToProps,{})(Actions);
