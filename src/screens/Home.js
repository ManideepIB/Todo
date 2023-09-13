import React, {useState} from 'react';
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
} from 'react-native';

import Task from '../components/template/Task';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from '../theme';
import {AppText, AppTextInput} from '../components/atoms';
import {AppModal} from '../components/organisms';
import AddTask from './AddTask';

const Home = () => {
  const [taskName, setTaskName] = useState();
  const [taskDescription, setTaskDescription] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTask = () => {
    setTaskName(null);
    setTaskDescription(null); // Clear the input field
    setTaskItems([
      ...taskItems,
      {title: taskName, Description: taskDescription},
    ]);
    setModalVisible(!modalVisible);
  };

  const deleteTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  console.log(taskItems, '=========');
  // console.log(task, '=====');

  return (
    <View style={styles.container}>
      <AppText center h1 m={20} color={colors.Orange}>
        Task Manager
      </AppText>

      {/* Adding New Task */}
      <View>
        <View style={styles.addTask}>
          <AppModal
            animationType=""
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <AppText style={styles.modalText} h3>
                  Add Task
                </AppText>
                <AppTextInput
                  label="Task Name"
                  placeholder="Task Name"
                  value={taskName}
                  onChangeText={text => setTaskName(text)}
                />
                <AppTextInput
                  label="Description"
                  placeholder="Description"
                  value={taskDescription}
                  onChangeText={text => setTaskDescription(text)}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => handleAddTask()}>
                  <AppText style={styles.textStyle}>Done</AppText>
                </Pressable>
              </View>
            </View>
          </AppModal>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{flexDirection: 'row'}}>
            <Icon
              name="add-to-list"
              size={30}
              color={colors.Orange}
              // backgroundColor="red"
            />
            <AppText style={styles.addTaskText}>Add Task</AppText>
          </TouchableOpacity>
        </View>
      </View>

      {/* taskItems List */}
      <View style={{flex: 1}}>
        <FlatList
          data={taskItems}
          keyExtractor={(item, index) => index.toString()} // Use index as the unique key
          renderItem={({item, index}) => (
            <Task text={item.title} taskId={index} deleteTask={deleteTask} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    // fontWeight: 'bold',
    color: 'black',
  },
  addTask: {
    margin: 10,
    alignItems: 'flex-end',
    // backgroundColor: '#fff',
    // padding: 15,
  },
  addTaskText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'orange',
    marginLeft: 10,
    fontFamily: 'TimesNewRoman',
    // backgroundColor: 'green',
  },
  input: {
    width: 150,
    borderWidth: 2,
    // borderColor: {color},
    borderRadius: 10,
    height: 40,
  },
  modalView: {
    height: 500,
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
