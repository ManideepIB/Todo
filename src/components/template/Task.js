import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {CheckBox, DeleteIcon} from '../molecules';
import {colors} from '../../theme';

const Task = props => {
  const handleDelete = () => {
    props.deleteTask(props.taskId);
  };
  // console.log(props);
  return (
    <View style={styles.item}>
      <CheckBox title={props.text} />
      <DeleteIcon onPress={handleDelete} />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    elevation: 8,
  },
});
export default Task;
