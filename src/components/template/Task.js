import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {CheckBox, DeleteIcon} from '../molecules';
import {colors} from '../../theme';
import {EditIcon} from '../molecules/Icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../theme/theme';
import {AppText} from '../atoms';

const Task = ({taskData, onPressItem}) => {
  const theme = useTheme(); // Get the current theme

  console.log(taskData, '```propstaskData```');

  return (
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
          <CheckBox size={30} isChecked={taskData.status === 'close'} />
          <View>
            <AppText
              style={[
                styles.title,
                {color: theme === 'LIGHT' ? 'black' : 'white'},
              ]}>
              {taskData.taskName}
            </AppText>
            <View style={{marginLeft: 5}}>
              <AppText style={[{color: theme === 'LIGHT' ? 'black' : 'white'}]}>
                {taskData.startTime} - {taskData.endTime}
              </AppText>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
          <MaterialCommunityIcons
            name="greater-than"
            size={24}
            color={colors.darkgrey}
            // onPress={handleDelete}
          />
        </View>
      </>
    </TouchableOpacity>
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
});
export default Task;
