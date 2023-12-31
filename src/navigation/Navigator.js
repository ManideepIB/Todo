import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import BottomNavigation from './BottomNavigation';

function Navigator() {
  return (
    <NavigationContainer>
      {true ? <BottomNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Navigator;
