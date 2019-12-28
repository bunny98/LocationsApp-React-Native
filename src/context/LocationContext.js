import createDataContext from './createDataContext';

const locationReducer = (state, action)=>{
    switch (action.type){
        case 'add_location':
            return {...state, locations:[...state.locations, action.payload]};
        case 'changeName':
            return {...state, name: action.payload};
        case 'stopRecording':
            return {...state, recording: false};
        case 'startRecording':
            return {...state, recording: true};
        case 'add_curr_location':
            return {...state, currentLocation: action.payload}
        case 'reset':
            return {...state, name:'', locations:[]}
        default:
            return state;
    }
};

const changeName=(dispatch)=>(name)=>{
    dispatch({type:'changeName', payload: name})
}

const startRecording=(dipatch)=>()=>{
    dipatch({type: 'startRecording'});
};
const stopRecording=(dispatch)=>()=>{
    dispatch({type: 'stopRecording'});
};
const addLocation=(dispatch)=>(location, recording)=>{
    dispatch({type: 'add_curr_location', payload:location });
    if(recording){
        dispatch({type: 'add_location', payload: location});
    }
};

const reset = (dispatch)=>()=>{
    dispatch({type: 'reset'});
}

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation, changeName, reset},
    {name: '', recording: false, locations: [], currentLocation: null}
);