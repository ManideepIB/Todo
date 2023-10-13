import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../theme';
import {screenNames} from '../../utils/constants';
import {useTheme} from '../../theme/theme';
import {AppButton, AppText, AppTextInput} from '../../components/atoms';

const Login = ({navigation}) => {
  const theme = useTheme();
  console.log(theme);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme === 'LIGHT' ? 'white' : '#212436'},
      ]}>
      <View style={[styles.body]}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Text style={styles.brandName}>ToDo</Text>
          </View>

          <AppText style={styles.loginContinueTxt}>
            Login in to continue
          </AppText>
          <AppTextInput
            style={styles.input}
            textColor={theme === 'LIGHT' ? 'black' : 'white'}
            placeholder="Email"
            placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
            height={50}
          />
          <AppTextInput
            style={styles.input}
            textColor={theme === 'LIGHT' ? 'black' : 'white'}
            placeholder="Password"
            placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
            height={50}
          />

          <View style={styles.btnWrapper}>
            <LinearGradient
              colors={['#ffcb43', '#F9A31E', '#ff6425']}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              <AppButton
                width={300}
                center
                m={10}
                br={25}
                p={10}
                onPress={() => navigation.navigate(screenNames.HOME_TAB)}
                activeOpacity={0.7}>
                <AppText textSize={20} textColor={colors.white} weight="600">
                  Log In
                </AppText>
              </AppButton>
            </LinearGradient>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('forgotPassword', {
                userId: 'X0001',
              })
            }
            // style={styles.forgotPassBtn}
          >
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.AppTheme,
    opacity: 0.9,
  },
  input: {
    marginVertical: 10,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 16,
    fontWeight: 'bold',
  },

  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  btnWrapper: {
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    elevation: 6,
    borderRadius: 15,
    overflow: 'hidden',
    height: 65,
  },

  forgotPassText: {
    color: colors.AppTheme,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: '#666666',
    fontWeight: 'bold',
  },
  signupBtn: {
    color: colors.AppTheme,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
