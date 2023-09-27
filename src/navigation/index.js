import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './StackNavigation';
import MainTabBar from './BottomNavigation';
import AuthStack from './AuthStack';

function Navigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default Navigator;
