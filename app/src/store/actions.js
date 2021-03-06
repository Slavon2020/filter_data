import {
	DATA_REQUEST,
	DATA_REQUEST_ERROR,
	DATA_REQUEST_SUCCESS,
	SET_LOADING_DATA,
	UPDATE_FILTERED_USERS,
	UPDATE_USERS
} from './types';

export const updateDataAction = (data) => ({type: UPDATE_USERS, payload: data});
export const requestDataAction = () => ({type: DATA_REQUEST});
export const dataRequestSuccessAction = () => ({type: DATA_REQUEST_SUCCESS});
export const dataRequestErrorAction = () => ({type: DATA_REQUEST_ERROR});
export const setLoadingDataAction = (data) => ({type: SET_LOADING_DATA, payload: data});
export const updateFilteredUsers = (data) => ({type: UPDATE_FILTERED_USERS, payload: data});