import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                style={styles.inputSyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputSyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 23,
        flex: 2
    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export { Input };