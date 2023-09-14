/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import Task from './src/components/template/Task';
import Icon from 'react-native-vector-icons/Entypo';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';

const App = () => {
  return <Home />;
};

const styles = StyleSheet.create({});

export default App;
