import React, {useContext} from 'react';
import {Text} from 'react-native-elements';
import {View, StyleSheet, ActivityIndicator, ActivityIndicatorBase} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = ()=>{
    const {state: {currentLocation}} = useContext(LocationContext);
    if(!currentLocation){
        return <ActivityIndicator style={{margin: 200}}/>
    }
    return <MapView 
        style = {styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta:0.01
        }}
        > 
        <Circle 
            radius={25}
            center={currentLocation.coords}
            strokeColor='rgba(155, 155, 255, 1.0)'
            fillColor='rgba(155, 155, 255, 0.3)'
        />
        </MapView>
}

const styles = StyleSheet.create({
    map:{
        height:300,
    }
});

export default Map;