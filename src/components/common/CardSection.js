import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}> 
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        borderColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
});

export { CardSection };