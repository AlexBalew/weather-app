import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { defaultGradient } from './constants';

function Loading() {
    return (
        <LinearGradient
            colors={defaultGradient}
            style={styles.container}>
            <Text style={styles.text}>Weather is loading...</Text>
        </LinearGradient>)
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    }
})
