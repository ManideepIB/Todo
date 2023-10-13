import * as React from 'react';
import {useTheme} from '../../theme/theme';
import {createStackNavigator} from '@react-navigation/stack';
import {screenNames} from '../../utils/constants';
import Profile from '../../screens/Account/Profile';
import EditProfile from '../../screens/Account/EditProfile';
import Changepassword from '../../screens/Account/Changepassword';
import Settings from '../../screens/Account/Settings';
import Notifications from '../../screens/Account/Notifications';
import LogOut from '../../screens/Account/LogOut';
import {DrawerNavigation} from '../DrawerNavigation';

const Stack = createStackNavigator();

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
export default ProfileStack;
