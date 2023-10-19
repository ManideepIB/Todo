import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../theme/theme';
import {AppButton, AppText, AppTextInput} from '../../components/atoms';
import {colors} from '../../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {screenNames} from '../../utils/constants';
import TaskDetails from './TaskDetails';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../redux/actions/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewTask = ({navigation}) => {
  const theme = useTheme();
  const [taskData, setTaskData] = useState({
    taskName: '',
    categories: '',
    dateTime: '',
    startTime: '',
    endTime: '',
    description: '',
  });
  const dispatch = useDispatch();
  console.log(taskData, '---', taskData.taskName);
  const handleCreateTask = () => {
    dispatch(addTodo(taskData));
    console.log(addTodo(taskData), '{{{{{{{{{}}}}}}');
    navigation.navigate(screenNames.HOME);
    setTaskData('');
  };

  // const handleCreateTask = async () => {
  //   try {
  //     // store the task in async storage
  //     const storedTask = await AsyncStorage.getItem('tasks');
  //     const tasks = storedTask ? JSON.parse(storedTask) : [];

  //     tasks.push(taskData);

  //     await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  //     dispatch(addTodo(tasks));
  //     navigation.navigate(screenNames.HOME);
  //     setTaskData('');
  //     console.log(tasks, 'NewTasks::::');
  //   } catch (error) {
  //     console.error('Error creating task', error);
  //   }
  // };
  return (
    <ScrollView
      style={[
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
                onPress={() => {
                  navigation.navigate(screenNames.HOME_STACK);
                }}>
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
              label="Task Name"
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              placeholder="Enter"
              placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
              height={50}
              value={taskData.taskName}
              onChangeText={text => setTaskData({...taskData, taskName: text})}
            />
            <AppTextInput
              label="Categories"
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              placeholder="Enter"
              placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
              height={50}
              value={taskData.categories}
              onChangeText={text =>
                setTaskData({...taskData, categories: text})
              }
            />
            <AppTextInput
              label="Date & Time"
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              placeholder="Enter"
              placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
              height={50}
              value={taskData.dateTime}
              onChangeText={text => setTaskData({...taskData, dateTime: text})}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppTextInput
                label="Start Time"
                textColor={theme === 'LIGHT' ? 'black' : 'white'}
                placeholder="Enter"
                placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
                height={50}
                width={150}
                value={taskData.startTime}
                onChangeText={text =>
                  setTaskData({...taskData, startTime: text})
                }
              />
              <AppTextInput
                label="End Time"
                textColor={theme === 'LIGHT' ? 'black' : 'white'}
                placeholder="Enter"
                placeholderTextColor={theme === 'LIGHT' ? 'black' : 'white'}
                height={50}
                width={150}
                value={taskData.endTime}
                onChangeText={text => setTaskData({...taskData, endTime: text})}
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
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default NewTask;

const styles = StyleSheet.create({
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
