import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HeaderLogIn = (props) => {
    return (
        <View style={styles.viewTitle}>
            <Text style={styles.title}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewTitle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
  });

export { HeaderLogIn };