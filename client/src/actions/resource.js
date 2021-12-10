import axios from "axios";
import { setAlert } from "./alert";
import { GET_RESOURCE, GET_RESOURCES, RESOURCE_ERROR } from "./types";


export const getResources = () => async dispatch => {
    try {
        const res = await axios.get('/api/resource')
        const data = res.data.data
        console.log(data)
        dispatch({
            type: GET_RESOURCES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: RESOURCE_ERROR,
            payload: { msg: err.response , status: err.response}
        })
    }
}

export const getResource = id => async dispatch => {
    try {
        const res = await axios.get(`/api/resource/${id}`)
        console.log(res.data)
        dispatch({
            type: GET_RESOURCE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: RESOURCE_ERROR,
            payload: { msg: err.response , status: err.response}
        })
    }
}