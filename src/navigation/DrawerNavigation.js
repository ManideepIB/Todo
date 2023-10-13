import React from 'react';
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {screenNames} from '../utils/constants';
import Home from '../screens/Home/Home';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../theme';
import HomeStack from './StackNavigation/HomeStack';
import ProfileStack from './StackNavigation/ProfileStack';
import EditProfile from '../screens/Account/EditProfile';
import CustomDrawer from '../components/template/CustomDrawer';
import Profile from '../screens/Account/Profile';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  // console.log('Drawer Tab');
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: colors.AppTheme,
        drawerItemStyle: styles.drawerItemStyles,
        drawerActiveTintColor: colors.white,
        drawerLabelStyle: styles.drawerLabelStyles,
        headerShown: true,
        headerLeft: false,
        drawerPosition: 'right',
        headerRight: () => <DrawerToggleButton />,
        // headerright: () => (
        //   <TouchableOpacity
        //     onpress={() => navigation.dispatch(draweractions.opendrawer())}>
        //     <icon name="menu" size={30} color="black" />
        //   </TouchableOpacity>
        // ),
      }}>
      {/* <Drawer.Screen
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
      /> */}
      <Drawer.Screen
        name={screenNames.PROFILE_STACK}
        component={ProfileStack}
        options={{
          headerShown: true,

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
      <Drawer.Screen
        name={screenNames.EDIT_PROFILE}
        component={EditProfile}
        options={{
          headerShown: true,

          drawerLabel: 'edit',
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
    width: '100%',
  },
  drawerItemStyles: {
    borderRadius: 15,
  },
  drawerLabelStyles: {
    fontSize: 18,
  },
});
