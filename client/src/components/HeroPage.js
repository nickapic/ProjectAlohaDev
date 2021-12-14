import React, { Fragment } from 'react'
import './heropage.css'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@chakra-ui/button';
import PropTypes from 'prop-types';
import { ReactComponent as HeroLogo} from "../ai.svg"
import { Box, Flex, Text } from '@chakra-ui/layout';

const HeroPage = ({ isAuthenticated }) => {
    if(isAuthenticated){
        return <Redirect to="/dashboard"/>
    }
    return ( 
        <Fragment>
        <div className="hero-page">
            <div className="right-side">
                <h3 className="right-heading">Cyber Security Free Lancing Simplified.</h3>
                <h3 className="right-subheading">The cybersecurity world has grown significantly in the past years hence the demand of cyber security professionals has also gone up 10 folds, This platform is designed to help out the peopel find jobs and for those companies to find skilled professionals easily. It also aims to teach new security professinals topics in the field of Cyber Security to make the learning curve in Cyber Security easier for everyone entering the field.</h3>
                <Button colorScheme="teal"><Link to="/register" className="right-button">Get started</Link></Button>
                <Button colorScheme="teal" marginLeft="15px"><Link to="/hrregister" className="right-button"> Register as HR</Link></Button>
            </div>
            <div className="left-side">
                <HeroLogo/>
            </div>
        </div>
        <Flex justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold" marginTop="5rem">ABOUT US</Text>
        </Flex>
        <Box className="hero-page" marginBottom="10rem">
            <div className="right-side">
                <Text fontSize="xl" fontWeight="bold">What Project Aloha Oy?</Text>
                <h3 className="right-subheading">Project Aloha is very easy to use application that helps professionals and companys alike to find resources to learn from and to post job advertisements. Which is completely free to use for the community.</h3>
                <Text fontSize="xl" fontWeight="bold">Is Project Aloha open source?</Text>
                <h3 className="right-subheading">Yes, Project Aloha Oy, is completely open source you can checkout the source code for the application on the following {<Link className="heropage-link">Github page</Link>} , and you can also reach out to us via our email : nickapic@wearehackerone.com if you want to submit resources for the community. .</h3>
 
            </div>
            <div className="right-side">
                <Text fontSize="xl" fontWeight="bold">What Features does Project Aloha Oy have?</Text>
                <h3 className="right-subheading">Project Aloha Oy as of now provides the ability to access resources, post jobs, access jobs, provide recommendations for resources, for pentesters to share their resources, for which they would first have to contact us at our email : nickapic@wearehackerone.com </h3>
                <Text fontSize="xl" fontWeight="bold">How do we deal with privacy on this platform?</Text>
                <h3 className="right-subheading">We do not use any tracking cookies for this solution, only one essential cookie is used which is used for authorization and authentication of the user to access the platform. You can also see our privacy policy here {<Text  as={Link} to="/gdpr" className="heropage-link" fontStyle="normal"> Privacy Policy</Text>}</h3>
            </div>
        </Box>
        <Box marginTop="10rem"></Box>
        </Fragment>
    )
};

HeroPage.propTypes = {
    isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(HeroPage);