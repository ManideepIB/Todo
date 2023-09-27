import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppButton, AppText, AppTextInput} from '../../components/atoms';
import {colors} from '../../theme';
import {DescriptionIcon} from '../components/molecules/Icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useRoute} from '@react-navigation/native';

const TaskDetails = ({route}) => {
  const details = route.params;
  // const [editedTask, setEditedTask] = useState(task);
  console.log(details.taskData, '=========TaskDaetails');
  const handleSave = () => {
    // Implement saving the edited task data here
    // You can use the `editedTask` state to update the task
    // and then navigate back to the Home screen
  };

  return (
    <View style={styles.detailsContainer}>
      {/* <View> */}
      {/* <AppTextInput
      value={editedTask.taskName}
      onChangeText={text => setEditedTask({...editedTask, taskName: text})}
      /> */}
      {/* <AppText>{details.taskData.taskName}</AppText> */}
      {/* Add more text inputs for other task properties */}
      {/* <AppButton color="red" title="Save" onPress={handleSave} /> */}
      {/* </View> */}
      <View>
        <View>
          {/* <AppText style={styles.detailsTitle}>Task </AppText> */}
          <AppText center style={styles.detailsTitle}>
            {details.taskData.taskName}
          </AppText>
        </View>

        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'row',
            // width: 100,
            alignItems: 'center',
          }}>
          <MaterialIcons name="description" size={30} color={colors.AppTheme} />
          <AppText
            textColor={colors.black}
            ml={10}
            style={styles.detailsDescription}>
            {details.taskData.description}
          </AppText>
        </View>
        <AppText center style={styles.detailsTitle}>
          {details.taskData.startTime} - {details.taskData.endTime}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    // flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailsDescription: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default TaskDetails;
