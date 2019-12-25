import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/Navlink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
        <AuthForm
            headerText="Sign Up for tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={({ email, password }) => signup({ email, password })}
        />
        <NavLink
            linkText="Already have an account? Sign In"
            routeName='Signin'
        />

    </View>
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;