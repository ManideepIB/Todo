import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenNames} from '../utils/constants';
import Home from '../screens/Home/Home';
import {HomeStack, ProfileStack} from './StackNavigation';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  // console.log('Drawer Tab');
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: colors.AppTheme,
        drawerItemStyle: styles.drawerItemStyles,
        drawerActiveTintColor: colors.white,
        drawerLabelStyle: styles.drawerLabelStyles,
      }}>
      <Drawer.Screen
        name={screenNames.HOME_STACK}
        component={HomeStack}
        options={{
          headerShown: false,
          drawerLabel: 'Home',
          drawerIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? colors.white : colors.AppTheme}
              size={30}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={screenNames.PROFILE_STACK}
        component={ProfileStack}
        options={{
          headerShown: false,

          drawerLabel: 'Profile',
          drawerIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              color={focused ? colors.white : colors.AppTheme}
              size={30}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    width: 220,
  },
  drawerItemStyles: {
    borderRadius: 15,
  },
  drawerLabelStyles: {
    fontSize: 18,
  },
});
