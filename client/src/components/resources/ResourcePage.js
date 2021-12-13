import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import profile from '../../reducers/profile'
import { connect } from 'react-redux'
import {getResource} from "../../actions/resource"
import { Spinner } from '../Spinner'
import ReactMarkdown from 'react-markdown';
import style from './markdown-styles.module.css';
import { Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react'


const ResourcePage = ({ getResource, resource: { resource , loading } , match}) => {
    useEffect(() => {
        // console.log(match.params.id)
        getResource(match.params.id)
        //console.log(resource.data.attributes.description)
    }, [getResource])
    return (
         <div className="profile-page-wrapper">
        { resource === null || loading ? <Spinner/> :  ( 
            <div>
                <Image src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"  w="100%" h="10rem" objectFit="cover" atl="Background Picture" />
                <Text fontSize="3xl">{resource.data.attributes.title}</Text>
            <ReactMarkdown  className={style.reactMarkDown} children={resource.data.attributes.content}/>
            </div>
           )
    }
            </div>
         )
}

ResourcePage.propTypes = {
    
}
const mapStateToProps = state => ({
    resource: state.resource,
})

export default connect(mapStateToProps, {getResource})(ResourcePage);
