import React from 'react';
import {Text} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const Map = ()=>{
    const points = []
    for (let i = 0; i<20; i++){
        if(i%2===0){
            points.push({
                latitude: 21.192704 + i*0.001,
                longitude: 81.3293568 + i*0.001
            })
        }
        else{
            points.push({
                latitude: 21.192704 - i*0.002,
                longitude: 81.3293568 - i*0.002
            })
        }
    }
    return <MapView 
        style = {styles.map}
        initialRegion={{
            latitude:21.192704,
            longitude: 81.3293568,
            latitudeDelta: 0.01,
            longitudeDelta:0.01
        }}
        >
           <Polyline coordinates={points}/> 
        </MapView>
}

const styles = StyleSheet.create({
    map:{
        height:300,
    }
});

export default Map;