import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style = {styles.container}>
            <Spacer>
                <Text h3 style={{textAlign:'center'}}>{headerText}</Text>
            </Spacer>
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                label='Email'
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                secureTextEntry
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
                label='Password'
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    error:{
        fontSize: 16,
        color:'red',
        marginTop:5,
        marginLeft:10
    },
});

export default AuthForm;