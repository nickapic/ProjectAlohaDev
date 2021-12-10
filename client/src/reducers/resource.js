import {
    RESOURCE_ERROR,
    GET_RESOURCE,
    GET_RESOURCES
} from '../actions/types';

const initialState = {
    resources: [], 
    resource: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_RESOURCES:
            return {
                ...state,
                resources: payload,
                loading: false
            };
        case GET_RESOURCE:
            return{
                ...state,
                resource: payload,
                loading: false
            }
        case RESOURCE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
            return state;
    }
}