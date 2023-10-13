import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import SignUp from '../screens/Auth/SignUp';

import {screenNames} from '../utils/constants';
import BottomTabBar from './BottomNavigation';
import Welcome from '../screens/Home/Welcome';
import BottomNavigation from './BottomNavigation';

const AuthStackScreens = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackScreens.Navigator>
      {/* <AuthStackScreens.Screen
        options={{
          headerShown: false,
        }}
        name={screenNames.PROFILE_STACK}
        component={ProfileStack}
      /> */}
      <AuthStackScreens.Screen
        options={{
          headerShown: false,
        }}
        name={screenNames.WELCOME}
        component={Welcome}
      />
      <AuthStackScreens.Screen
        name={screenNames.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStackScreens.Screen
        name={screenNames.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <AuthStackScreens.Screen name={screenNames.SIGNUP} component={SignUp} />
      <AuthStackScreens.Screen
        name={screenNames.HOME_TAB}
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </AuthStackScreens.Navigator>
  );
};

export default AuthStack;
