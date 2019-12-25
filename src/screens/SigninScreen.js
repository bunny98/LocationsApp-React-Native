import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import Navlink from '../components/Navlink';
import {NavigationEvents} from 'react-navigation';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
        <AuthForm
            headerText='Sign In'
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit = {({email, password})=>signin({email, password})}
        />
        <Navlink
            linkText="Do not have an account? Sign Up"
            routeName="Signup"
        />
    </View>
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
});

export default SigninScreen;