import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  Appearance,
} from 'react-native';

import {colors} from '../../theme';
import {AppText, AppTextInput} from '../../components/atoms';
import AddTask from '../AddTask';
import data from '../../utils/data.json';
import Task from '../../components/template/Task';
import {useNavigation, useRoute} from '@react-navigation/native';
import TaskDetails from './TaskDetails';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from '../../components/template/ProgressBar';
import {screenNames} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const theme = useTheme();

  const progress = 60;

  const navigation = useNavigation();
  const route = useRoute();
  // const [tasks, setTasks] = useState([]);
  // const newTask = route.params?.taskData;

  const tasks = useSelector(state => state.tasks);

  // useEffect(() => {
  //   if (newTask) {
  //     setTasks([...tasks, newTask]);
  //   }
  // }, [newTask]);
  // console.log(newTask, '```taskDataHome```');
  // console.log(tasks.taskData, '```tasks.taskData--tasksHome```');
  // console.log(tasks, '```tasks--tasksHome```');

  const container = {
    flex: 1,
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'LIGHT' ? 'white' : '#212436'},
      ]}>
      <View>
        <AppText
          center
          // h2
          mt={30}
          textColor={colors.AppTheme}
          style={{
            fontFamily: 'AlegreyaSans-BoldItalic',
            fontSize: 36,
          }}>
          Task Manager
        </AppText>
      </View>
      <View>
        <LinearGradient
          colors={['#ffcb43', '#F9A31E', '#ff6425']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          useAngle={true}
          angle={135}
          angleCenter={{x: 0.5, y: 0.5}}
          style={styles.card}>
          <View
            style={{
              margin: 20,
              paddingLeft: 20,
            }}>
            <AppText
              textColor="white"
              custFamily="AlegreyaSans-BoldItalic"
              style={{fontSize: 20}}>
              Today's Progress Summary
            </AppText>
            <AppText
              // mh={20}
              textColor="white"
              custFamily="AlegreyaSans-Bold"
              style={{fontSize: 20}}>
              15 tasks
            </AppText>
            <View style={styles.progressBarContainer}>
              <AppText
                // mv={20}
                ml={20}
                textColor="white"
                custFamily="AlegreyaSans-Bold"
                style={{fontSize: 20}}>
                Progress - {progress}%
              </AppText>
              <ProgressBar
                progress={progress}
                barColor="blue"
                textColor="black"
              />
            </View>
          </View>
        </LinearGradient>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: 'green',
              marginVertical: 10,
            }}>
            <AppText
              mh={20}
              textColor={theme === 'LIGHT' ? 'black' : 'white'}
              textSize={24}
              style={{
                // fontSize: 24,
                fontWeight: '600',
                fontFamily: 'Roboto',
              }}>
              Today's Task
            </AppText>
            <AppText textColor={colors.AppTheme} mh={20} textSize={16}>
              See All
            </AppText>
          </View>
          <View style={{height: 400, paddingBottom: 50}}>
            <FlatList
              data={tasks.taskData}
              keyExtractor={({id}) => id}
              renderItem={({item, index}) => (
                <Task
                  task={item}
                  onPressItem={() => {
                    navigation.navigate(screenNames.TASK_DETAILS, {
                      task: item,
                    });
                  }}
                />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: colors.AppTheme,
    height: 175,
    borderRadius: 20,
    elevation: 10,
    margin: 20,
    marginTop: 35,
  },
  progressBarContainer: {
    // backgroundColor: 'green',
    margin: 10,
    // width: '100%',
    // alignContent: 'space-around',
  },
  progressBar: {
    height: 10,
    borderRadius: 50,
    backgroundColor: 'green',
    margin: 10,
    width: 50,
  },
});
