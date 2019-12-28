import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-navigation';
import {FontAwesome} from '@expo/vector-icons';


const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return <SafeAreaView forceInset={{top:"always"}}>
        <Spacer>
            <Text h3>Click to Sign Out</Text>
        </Spacer>
        <Spacer>
            <Button title='Sign out' onPress={signout}/>
        </Spacer>
    </SafeAreaView>
};

AccountScreen.navigationOptions= {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20}/>
}

const styles = StyleSheet.create({});

export default AccountScreen;