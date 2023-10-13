import * as React from 'react';
import Home from '../../screens/Home/Home';
import TaskDetails from '../../screens/Home/TaskDetails';
import {useTheme} from '../../theme/theme';
import NewTask from '../../screens/Home/NewTask';
import {createStackNavigator} from '@react-navigation/stack';
import {screenNames} from '../../utils/constants';

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

export default HomeStack;
