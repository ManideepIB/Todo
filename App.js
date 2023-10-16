import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return <Navigator />;
}
