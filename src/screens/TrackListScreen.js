import React, {useContext} from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import {ListItem} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import {FontAwesome} from '@expo/vector-icons';

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);
    return <>
        <NavigationEvents onWillFocus={fetchTracks} />
        <FlatList
            data={state}
            keyExtractor={(item)=>item._id}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>navigation.navigate('TrackDetail', {_id: item._id})}>
                    <ListItem chevron title={item.name} />
                </TouchableOpacity>
            }}
        />


    </>
};

TrackListScreen.navigationOptions = {
    title:"Tracks",
};

const styles = StyleSheet.create({});

export default TrackListScreen;