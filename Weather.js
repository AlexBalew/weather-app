import React from 'react';
import propTypes from 'prop-types';
import conditions, { weatherOptions, defaultGradient } from './constants';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp, condition, description }) {
    return (
        <LinearGradient
            colors={condition
                ? weatherOptions[condition].gradient
                : defaultGradient}
            style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition]?.iconName} size={90} color='white' />
                <Text style={styles.temp}>
                    {temp}°C
                </Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>
                    {condition}
                </Text>
                <Text style={styles.subTitle}>
                    {description}
                </Text>
            </View>
        </LinearGradient>)
}

Weather.propTypes = {
    temp: propTypes.number,
    condition: propTypes.oneOf(conditions),
    description: propTypes.string,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 20,
    },
    subTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
})