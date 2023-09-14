import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CheckBoxProps} from './types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppText} from '../../atoms';
import {colors} from '../../../theme';

export const CheckBox: React.FC<CheckBoxProps> = props => {
  const iconName = props.isChecked
    ? 'checkbox-marked'
    : 'checkbox-blank-outline';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={colors.Orange}
        />
      </TouchableOpacity>
      <AppText style={styles.title}>{props.title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flexDirection: 'row',
    // width: 150,
    // marginTop: 5,
    // marginHorizontal: 5,
    // backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
    fontWeight: '600',
  },
});
