import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../theme/theme';
import {Image} from 'react-native';
import {colors} from '../../theme';
import {AppButton, AppText} from '../../components/atoms';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {screenNames} from '../../utils/constants';

const Profile = ({navigation}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === 'LIGHT' ? 'white' : '#212436',
      }}>
      <View style={{alignItems: 'center', margin: 20}}>
        <AppText
          textColor={colors.AppTheme}
          style={{
            fontFamily: 'AlegreyaSans-BoldItalic',
            fontSize: 40,
          }}>
          Profile
        </AppText>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('C:/Users/manideep.punna/React-Native/ToDo/src/assets/images/profile.png')}
          style={styles.profileImage}
        />
        <AppText
          textColor={theme === 'LIGHT' ? 'black' : 'white'}
          style={{
            fontFamily: 'AlegreyaSans-BoldItalic',
            fontSize: 26,
          }}>
          Ronald Richards
        </AppText>
      </View>

      <View style={{marginTop: 20}}>
        <AppButton
          style={[
            styles.body,
            {backgroundColor: theme === 'LIGHT' ? 'white' : '#363750'},
          ]}
          onPress={() => {
            navigation.navigate(screenNames.EDIT_PROFILE);
          }}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="account-edit"
              size={30}
              color={'blue'}
            />
            <AppText
              custFamily="AlegreyaSans-Italic"
              textSize={24}
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              style={{paddingLeft: 20}}>
              Edit Profile
            </AppText>
          </View>

          <MaterialCommunityIcons
            style={{justifyContent: 'flex-end'}}
            name="greater-than"
            size={30}
          />
        </AppButton>
        <AppButton
          style={[
            styles.body,
            {backgroundColor: theme === 'LIGHT' ? 'white' : '#363750'},
          ]}
          onPress={() => {
            navigation.navigate(screenNames.CHANGE_PASSWORD);
          }}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              // style={{justifyContent: 'flex-start'}}
              name="pencil-lock"
              size={30}
              color={'green'}
            />
            <AppText
              custFamily="AlegreyaSans-Italic"
              textSize={24}
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              style={{paddingLeft: 20}}>
              Change Password
            </AppText>
          </View>

          <MaterialCommunityIcons
            style={{justifyContent: 'flex-end'}}
            name="greater-than"
            size={30}
          />
        </AppButton>
        <AppButton
          style={[
            styles.body,
            {backgroundColor: theme === 'LIGHT' ? 'white' : '#363750'},
          ]}
          onPress={() => {
            navigation.navigate(screenNames.SETTINGS);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="settings" size={30} color={'orange'} />
            <AppText
              custFamily="AlegreyaSans-Italic"
              textSize={24}
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              style={{paddingLeft: 20}}>
              Settings
            </AppText>
          </View>

          <MaterialCommunityIcons
            style={{justifyContent: 'flex-end'}}
            name="greater-than"
            size={30}
          />
        </AppButton>
        <AppButton
          style={[
            styles.body,
            {backgroundColor: theme === 'LIGHT' ? 'white' : '#363750'},
          ]}
          onPress={() => {
            navigation.navigate(screenNames.NOTIFICATIONS);
          }}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons
              name="notifications-active"
              size={30}
              color={'purple'}
            />
            <AppText
              custFamily="AlegreyaSans-Italic"
              textSize={24}
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              style={{paddingLeft: 20}}>
              Notifications
            </AppText>
          </View>

          <MaterialCommunityIcons
            style={{justifyContent: 'flex-end'}}
            name="greater-than"
            size={30}
          />
        </AppButton>
        <AppButton
          style={[
            styles.body,
            {backgroundColor: theme === 'LIGHT' ? 'white' : '#363750'},
          ]}
          onPress={() => {
            navigation.navigate(screenNames.LOGOUT);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="log-out" size={30} color={colors.AlertRed} />
            <AppText
              custFamily="AlegreyaSans-Italic"
              textSize={24}
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              style={{paddingLeft: 20}}>
              Log Out
            </AppText>
          </View>

          <MaterialCommunityIcons
            style={{justifyContent: 'flex-end'}}
            name="greater-than"
            size={30}
          />
        </AppButton>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
    margin: 10,
  },
  body: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    // backgroundColor: '#363750',

    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    elevation: 2,
    fontFamily: 'Alegreya-Italic',
  },
});
