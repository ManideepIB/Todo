import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherHome from '../../screens/weather/WeatherHome';
import Details from '../../screens/weather/Details';
import Cards from '../../screens/weather/Cards';

const Stack = createNativeStackNavigator();

const WeatherStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WeatherHome" component={WeatherHome} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="Cards" component={Cards} />
    </Stack.Navigator>
  );
};

export default WeatherStack;

const styles = StyleSheet.create({});
