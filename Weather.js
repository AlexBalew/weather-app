import React from 'react';
import propTypes from 'prop-types';
import conditions from './constants';
import { StyleSheet, Text, View } from 'react-native';

export default function Weather({ temp, condition }) {
    return (
    <View style={styles.container}>
        <Text>
            {temp} °C
        </Text>
        <Text>
            {condition}
        </Text>
    </View>)
}

Weather.propTypes = {
    temp: propTypes.number,
    condition: propTypes.oneOf(conditions).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})