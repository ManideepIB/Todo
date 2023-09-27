import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {AppButton, AppText} from '../../components/atoms';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../theme';
import {screenNames} from '../../utils/constants';

const Welcome = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#F9A31E', '#fbc26a', '#fff', '#fff']}
      start={{y: 0.0, x: 0.0}}
      end={{y: 1.0, x: 0.0}}
      style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          height: 500,
          justifyContent: 'center',
        }}>
        <Image
          source={require('C:/Users/manideep.punna/React-Native/ToDo/src/assets/images/welcome.png')}
          style={{
            width: '100%',
            height: 350,
          }}
        />
      </View>

      <AppText
        m={10}
        center
        custFamily="Alegreya-ExtraBold"
        style={{
          fontSize: 36,
        }}>
        Welcome to Go Task
      </AppText>
      <AppText textColor="grey" mh={35} center style={{fontSize: 16}}>
        A workspace to ever 10 Million influencers and the global of the world
      </AppText>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 30,
        }}>
        <AppButton
          color={colors.AppTheme}
          width={300}
          center
          br={15}
          p={10}
          onPress={() => {
            navigation.navigate(screenNames.LOGIN);
          }}
          activeOpacity={0.7}>
          <AppText textSize={20} textColor={colors.white} weight="600">
            Let's Start
          </AppText>
        </AppButton>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
