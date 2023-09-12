import {View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CheckBox = () => {
  return (
    <View>
      <MaterialCommunityIcons
        name={'checkbox-blank-outline'}
        size={24}
        color="#50a2ed"
      />
    </View>
  );
};

export const DeleteIcon = () => {
  return (
    <View>
      <MaterialCommunityIcons name={'delete'} size={24} color="red" />
    </View>
  );
};
