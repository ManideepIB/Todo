import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React from 'react';
import {CheckBox, DeleteIcon} from '../molecules';
import {colors} from '../../theme';
import {EditIcon} from '../molecules/Icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../theme/theme';
import {AppText} from '../atoms';
import {Swipeable} from 'react-native-gesture-handler';

const Task = ({task, onPressItem, onDelete}) => {
  const theme = useTheme(); // Get the current theme

  // const handleDelete = () => {
  //   onDelete(task.id);
  // };
  const handleDelete = () => {
    // Show a confirmation alert
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            // write a method to close
          },
        },
        {
          text: 'Delete',
          onPress: () => {
            onDelete(task.id);
          },
        },
      ],
      {cancelable: true},
    );
  };
  const renderRightActions = () => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => handleDelete()}>
      <MaterialIcons name="delete" size={40} color={colors.white} />
    </TouchableOpacity>
  );
  // console.log(task.id, '```prop```');
  // console.log(task.taskData.taskName, '```prop```');

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen={() => handleDelete()}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressItem && onPressItem()}
        underlayColor="white"
        style={[
          styles.item,
          {backgroundColor: theme === 'LIGHT' ? 'white' : '#363750'},
        ]}>
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox size={30} isChecked={task.status === 'close'} />
            <View>
              <AppText
                style={[
                  styles.title,
                  {color: theme === 'LIGHT' ? 'black' : 'white'},
                ]}>
                {task.taskData.taskName}
              </AppText>
              <AppText
                // mv={10}
                // textSize={26}
                custFamily="Alegreya-MediumItalic"
                style={[{color: theme === 'LIGHT' ? 'black' : 'white'}]}>
                {task.taskData.categories}
              </AppText>
              <View style={{marginLeft: 5}}>
                <AppText
                  style={[{color: theme === 'LIGHT' ? 'black' : 'white'}]}>
                  {task.taskData.startTime} - {task.taskData.endTime}
                </AppText>
              </View>
              <View style={{marginLeft: 5}}>
                <AppText
                  style={[{color: theme === 'LIGHT' ? 'black' : 'white'}]}>
                  {task.taskData.dateTime}
                </AppText>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <MaterialCommunityIcons
              name="greater-than"
              size={24}
              color={colors.darkgrey}
            />
          </View>
        </>
      </TouchableOpacity>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    elevation: 8,
    fontFamily: 'Alegreya-Italic',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Alegreya-SemiBoldItalic',
  },
  deleteButton: {
    backgroundColor: colors.AlertRed,
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    marginLeft: -20,
    elevation: 8,
    height: 112,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },

  label: {},
});
export default Task;
