import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getResources } from '../../actions/resource'
import { Spinner } from '../../components/Spinner'
import ResourceItem from './ResourceItem'
import { Flex, Text } from '@chakra-ui/layout'
const Resources = ({ getResources , resource:{
    resources, loading
} }, ) => {
    useEffect(() => {
        getResources();
    }, []);
    let showResources = resources.slice(0, 3);
    return loading ? <Spinner/> : (
        <div >
           <Text fontSize='2xl' className="jobs-heading">Resources</Text>
           <Flex flexDirection="column">        
               {showResources.map( resource => (
                   <ResourceItem key={resource.id} resource={resource}/>
               ))}
           </Flex>
        </div>
    )
}

Resources.propTypes = {

}

const mapStateToProps = state => ({
    resource: state.resource
})

export default  connect(mapStateToProps, {getResources})(Resources);