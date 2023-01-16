import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env'
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

export default function App() {
  const [temp, setTemp] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setTemp(data.main.temp)
    setIsLoading(false)
    return data
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        setIsLoading(false)
        return;
      }

      try {
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
        await getWeather(latitude, longitude)
      } catch (error) {
        setErrorMsg('Something went wrong...')
        Alert.alert(error)
        setIsLoading(false)
      }
    })();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      {
        errorMsg
          ?
          <Text style={styles.text}>{errorMsg}</Text>
          :
          <Weather temp={Math.round(temp)} />
      }
    </View>
  );
}

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
  },
})