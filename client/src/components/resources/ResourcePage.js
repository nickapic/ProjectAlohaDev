import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import profile from '../../reducers/profile'
import { connect } from 'react-redux'
import {getResource} from "../../actions/resource"
import { Spinner } from '../Spinner'
import ReactMarkdown from 'react-markdown'
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
                <p>{resource.data.attributes.title}</p>
            <ReactMarkdown children={resource.data.attributes.content}/>
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
