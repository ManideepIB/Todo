import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../../theme/theme';
import {AppButton, AppText, AppTextInput} from '../../components/atoms';
import {colors} from '../../theme';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {screenNames} from '../../utils/constants';
import TaskDetails from './TaskDetails';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../redux/actions/TaskAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Keyboard} from 'react-native';
import DropdownComponent from '../../components/template/DropdownComponent';
import CustomDropdown from '../../components/template/CustomDropdown';

const NewTask = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const theme = useTheme();
  const [taskData, setTaskData] = useState({
    taskName: '',
    categories: '',
    dateTime: '',
    startTime: '',
    endTime: '',
    description: '',
  });

  const [taskNameError, setTaskNameError] = useState('');

  // useEffect(() => {
  //   setTaskData({
  //     taskName: '',
  //     categories: '',
  //     dateTime: '',
  //     startTime: '',
  //     endTime: '',
  //     description: '',
  //   });
  // }, []);
  const dispatch = useDispatch();
  console.log(taskData, '---', taskData.taskName);

  const handleCreateTask = () => {
    if (taskData.taskName.trim() === '') {
      setTaskNameError('Task Name is required');
    } else {
      setTaskNameError('');
      dispatch(addTodo(taskData));
      console.log(addTodo(taskData), '{{{{{{{{{}}}}}}');
      navigation.navigate(screenNames.HOME);
      setTaskData({
        taskName: '',
        categories: '',
        dateTime: '',
        startTime: '',
        endTime: '',
        description: '',
      });
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    console.log('A date has been picked: ', date);
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setTaskData({...taskData, dateTime: x1[2] + '/' + x1[1] + '/' + x1[0]});
    hideDatePicker();
  };
  const showTimePicker = pickerType => {
    if (pickerType === 'startTime') {
      setStartTimePickerVisibility(true);
    } else if (pickerType === 'endTime') {
      setEndTimePickerVisibility(true);
    }
  };

  const hideTimePicker = () => {
    setStartTimePickerVisibility(false);
    setEndTimePickerVisibility(false);
  };

  const handleStartTimeConfirm = date => {
    console.log('A time has been picked: ', date);
    const dt = new Date(date);
    const x = dt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    // const x1 = x[0].split(':');
    console.log(x, 'time');
    setTaskData({...taskData, startTime: x});

    hideTimePicker();
  };
  const handleEndTimeConfirm = date => {
    console.log('A time has been picked: ', date);
    const dt = new Date(date);
    const x = dt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    // const x1 = x[0].split(':');
    console.log(x, 'time');
    setTaskData({...taskData, endTime: x});

    hideTimePicker();
  };

  const handleGoBack = () => {
    navigation.navigate(screenNames.HOME_STACK);
    setTaskData({
      taskName: '',
      categories: '',
      dateTime: '',
      startTime: '',
      endTime: '',
      description: '',
    });
    setTaskNameError('');
  };

  const handleTaskNameBlur = () => {
    if (taskData.taskName.trim() === '') {
      setTaskNameError('Task Name is required');
    } else {
      setTaskNameError('');
    }
  };
  return (
    <View
      style={[
        // styles.container,

        {
          flex: 1,
          backgroundColor: theme === 'LIGHT' ? 'white' : '#212436',
        },
      ]}>
      <KeyboardAvoidingView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              margin: 20,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View>
              <AppButton
                color={theme === 'LIGHT' ? colors.grey : '#212436'}
                style={{borderRadius: 10, padding: 8}}
                // onPress={() => {
                //   navigation.navigate(screenNames.HOME_STACK);
                // }}
                onPress={handleGoBack}>
                <AppText textSize={20} textColor={colors.white} weight="600">
                  <MaterialCommunityIcons
                    name="less-than"
                    color={theme === 'LIGHT' ? 'black' : colors.AppTheme}
                    size={30}
                  />
                </AppText>
              </AppButton>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <AppText
                textColor={colors.AppTheme}
                style={{
                  fontFamily: 'AlegreyaSans-BoldItalic',
                  fontSize: 40,
                }}>
                New Task
              </AppText>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 30,
              backgroundColor: theme === 'LIGHT' ? 'white' : '#212436',
            }}>
            <AppTextInput
              label="Task Name "
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              placeholder="Enter"
              placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
              height={50}
              value={taskData.taskName}
              onChangeText={text => {
                setTaskData({...taskData, taskName: text});
                setTaskNameError('');
              }}
              required={true}
              // onBlur={handleTaskNameBlur} // Handle onBlur event
            />

            {/* Show error message if Task Name is empty */}
            {taskNameError !== '' && (
              <AppText textColor="red">{taskNameError}</AppText>
            )}

            {/* <AppTextInput
              label="Categories"
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              placeholder="Enter"
              placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
              height={50}
              value={taskData.categories}
              onChangeText={text =>
                setTaskData({...taskData, categories: text})
              }
            /> */}
            <View>
              <AppText>Categories</AppText>
              {/* <DropdownComponent
                selectedCategory={taskData.categories}
                onCategoryChange={selectedCategory =>
                  setTaskData({...taskData, categories: selectedCategory})
                }
              /> */}
              <CustomDropdown
                category={taskData.categories}
                onCategoryChange={category =>
                  setTaskData({...taskData, categories: category})
                }
              />
            </View>

            <AppTextInput
              label="Day"
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              placeholder="Select Day"
              placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
              height={50}
              value={taskData.dateTime}
              onFocus={() => {
                showDatePicker();
                Keyboard.dismiss();
              }}
              // style={{margin: 50}}
              // onChangeText={text => setTaskData({...taskData, dateTime: text})}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppTextInput
                label="Start Time"
                textColor={theme === 'LIGHT' ? 'black' : 'white'}
                placeholder="Select Start Time"
                placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
                height={50}
                width={150}
                value={taskData.startTime}
                onFocus={() => {
                  showTimePicker('startTime');
                  Keyboard.dismiss();
                }}
                // onChangeText={text =>
                //   setTaskData({...taskData, startTime: text})
                // }
              />
              <AppTextInput
                label="End Time"
                textColor={theme === 'LIGHT' ? 'black' : 'white'}
                placeholder="Select End Time"
                placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
                height={50}
                width={150}
                value={taskData.endTime}
                onFocus={() => {
                  showTimePicker('endTime');
                  Keyboard.dismiss();
                }}
                // onChangeText={text => setTaskData({...taskData, endTime: text})}
              />
            </View>
            <AppTextInput
              label="Description"
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              placeholder="Enter"
              placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
              multiline
              numberOfLines={4}
              style={{lineHeight: 20, height: 80, textAlignVertical: 'top'}}
              value={taskData.description}
              onChangeText={text =>
                setTaskData({...taskData, description: text})
              }
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
                  onPress={handleCreateTask}
                  activeOpacity={0.7}>
                  <AppText textSize={20} textColor={colors.white} weight="600">
                    Create New task
                  </AppText>
                </AppButton>
              </LinearGradient>
            </View>
            <View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <View>
              <DateTimePickerModal
                isVisible={isStartTimePickerVisible}
                mode="time"
                onConfirm={handleStartTimeConfirm}
                onCancel={hideTimePicker}
              />
            </View>
            <View>
              <DateTimePickerModal
                isVisible={isEndTimePickerVisible}
                mode="time"
                onConfirm={handleEndTimeConfirm}
                onCancel={hideTimePicker}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: '100%',
    // backgroundColor: 'red',
  },
  btnWrapper: {
    marginTop: 35,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    elevation: 6,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
