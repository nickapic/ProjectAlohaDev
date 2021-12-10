import {combineReducers} from 'redux';
import alert from './alert'
import auth from './auth';
import profile from './profile'
import job from './job'
import resource from './resource';

export default combineReducers({
    alert,
    auth,
    profile,
    job,
    resource
})  