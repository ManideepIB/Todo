import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home/Home';
import AddTask from '../screens/AddTask';
import TaskDetails from '../screens/Home/TaskDetails';
import {colors} from '../theme';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '../theme/theme';
import NewTask from '../screens/Home/NewTask';
import {createStackNavigator} from '@react-navigation/stack';
import {screenNames} from '../utils/constants';
import Profile from '../screens/Account/Profile';
import EditProfile from '../screens/Account/EditProfile';
import Changepassword from '../screens/Account/Changepassword';
import Settings from '../screens/Account/Settings';
import Notifications from '../screens/Account/Notifications';
import LogOut from '../screens/Account/LogOut';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenNames.HOME} component={Home} />
      <Stack.Screen name={screenNames.NEW_TASK} component={NewTask} />
      <Stack.Screen name={screenNames.TASK_DETAILS} component={TaskDetails} />
    </Stack.Navigator>
  );
};
export const ProfileStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={screenNames.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen
        name={screenNames.CHANGE_PASSWORD}
        component={Changepassword}
      />
      <Stack.Screen name={screenNames.SETTINGS} component={Settings} />
      <Stack.Screen
        name={screenNames.NOTIFICATIONS}
        component={Notifications}
      />
      <Stack.Screen name={screenNames.LOGOUT} component={LogOut} />
    </Stack.Navigator>
  );
};
