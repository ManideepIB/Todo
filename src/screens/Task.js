import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {CheckBox, DeleteIcon} from '../components/Icons';

const Task = props => {
  const handleDelete = () => {
    props.deleteTask(props.taskId);
  };
  // console.log(props);
  return (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <CheckBox />
        </TouchableOpacity>

        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.delete}>
        <TouchableOpacity onPress={handleDelete}>
          <DeleteIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'space-between',
  },

  itemText: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '500',
  },
});
export default Task;
