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
import {HomeStack, ProfileStack} from './StackNavigation';
import {screenNames} from '../utils/constants';
import Profile from '../screens/Account/Profile';
import {DrawerNavigation, DrawerTab} from './DrawerNavigation';

const Tab = createBottomTabNavigator();

function CustomAddTaskTabButton({onPress}) {
  const theme = useTheme();
  return (
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.AppTheme,
        bottom: 25,
        elevation: 1,
      }}>
      <MaterialCommunityIcons
        name="plus"
        color={colors.white}
        size={40}
        onPress={onPress}
      />
    </View>
  );
}

const BottomNavigation = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: theme === 'LIGHT' ? 'white' : '#363750',
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name={screenNames.HOME_DRAWER}
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={colors.AppTheme}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.NEW_TASK_TAB}
        component={NewTask}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarButton: props => <CustomAddTaskTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name={screenNames.PROFILE_TAB}
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              color={colors.AppTheme}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
