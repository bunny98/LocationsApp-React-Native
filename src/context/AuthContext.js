import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signout':
            return {token: null, errorMessage:''}
        case 'clear_error':
            return { ...state, errorMessage: '' }
        case 'signin':
            return { token: action.payload, errorMessage: '' }
        case 'signup':
            return { token: action.payload, errorMessage: '' }
        case 'add_err':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: signin, payload: token});
        navigate('TrackList');
    }
    else{
        navigate('Signup');
    }
}

const clearErrorMessage = (dispatch) => async () => {
    dispatch({ type: 'clear_error' });
}


const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token })
        navigate('TrackList');
    }
    catch (err) {
        dispatch({ type: 'add_err', payload: 'Something Went Wrong!!' });
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        // console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    }
    catch (err) {
        dispatch({ type: 'add_err', payload: 'Something Went Wrong!!' });
    }
}

const signout = (dispatch)=>async()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('Signup');
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { isSignedIn: false, errorMessage: '' }
);
