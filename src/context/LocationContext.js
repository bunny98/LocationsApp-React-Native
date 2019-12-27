import createDataContext from './createDataContext';

const locationReducer = (state, action)=>{
    switch (action.type){
        case 'add_curr_location':
            return {...state, currentLocation: action.payload}
        default:
            return state;
    }
};


const startRecording=(dipatch)=>()=>{};
const stopRecording=(dipatch)=>()=>{};
const addLocation=(dispatch)=>(location)=>{
    dispatch({type: 'add_curr_location', payload:location })
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation},
    {recording: false, locations: [], currentLocation: null}
);