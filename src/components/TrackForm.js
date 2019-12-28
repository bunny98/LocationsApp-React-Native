import React, {useContext, useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Spacer from './Spacer'
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTracks from '../hooks/useSaveTracks'

const TrackFrom = ()=>{
    const { state: {name, locations, recording},startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTracks] = useSaveTracks();
    return <>
        <Spacer> 
            <Input 
                placeholder="Name of the track"
                value={name}
                onChangeText={changeName}
            />
        </Spacer>
        <Spacer>
            {recording? <Button title='Stop' onPress={stopRecording}/>: 
                <Button title='Start Recording' onPress={startRecording}/>}
        </Spacer>
        <Spacer>
            {!recording && locations!=0 ? <Button title='Save Recording' onPress={saveTracks}/> : null}
        </Spacer>
    </>
}

const styles = StyleSheet.create({});

export default TrackFrom;