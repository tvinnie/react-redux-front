import {combineReducers} from 'redux';
import admin from './adminReducer';
import auth from './authReducer';
import site from './siteReducer';

export default combineReducers({
    auth: auth,
    admin: admin,
    site:site
})