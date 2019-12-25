import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import {SafeAreaView} from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import './_mockLocation';
import {Context as LocationContext} from '../context/LocationContext';

const TrackCreateScreen = () => {
    const [err, setError] = useState(null);
    const {addLocation} = useContext(LocationContext);
    const startWatching = async ()=>{
        const {status} = await requestPermissionsAsync();
        // console.log(status);
        if(status == 'denied')
            setError(status);
        else{
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location)=>{
                addLocation(location);
            })
        }
    }

    useEffect(()=>{
        startWatching();
    })

    return <SafeAreaView forceInset={{top:'always'}}>
        <Text h3>
            TrackCreateScreen
        </Text>
        <Map />
        {err? <Text>Please enable location services</Text>:null}
    </SafeAreaView>
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;