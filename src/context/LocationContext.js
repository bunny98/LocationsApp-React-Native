import createDataContext from './createDataContext';

const locationReducer = (state, action)=>{
    switch (action.type){
        default:
            return state;
    }
};


const startRecording=(dipatch)=>()=>{};
const stopRecording=(dipatch)=>()=>{};
const addLocation=(dispatch)=>()=>{};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation},
    {recording: false, locations: [], currentLocation: null}
);