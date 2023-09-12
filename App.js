/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
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
import Task from './src/screens/Task';
import Icon from 'react-native-vector-icons/Entypo';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTask(null);
    setTaskItems([...taskItems, task]);
  };
  const deleteTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.title}>Task manager</Text>
        {/* Adding New Task */}
        <View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.addTask}>
              <TextInput
                placeholder="enter"
                style={styles.input}
                value={task}
                onChangeText={text => setTask(text)}
              />
              <TouchableOpacity
                onPress={() => handleAddTask()}
                style={{flexDirection: 'row'}}>
                <Icon
                  name="add-to-list"
                  size={30}
                  color="#4F8EF7"
                  // backgroundColor="red"
                />
                <Text style={styles.addTaskText}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
      {/* taskItems List */}
      <View>
        {/* using map */}
        {taskItems.map((item, index) => (
          <Task
            key={index}
            taskId={index}
            text={item}
            deleteTask={deleteTask}
          />
        ))}

        {/* usingFlatlist */}
        {/* <FlatList
          data={taskItems}
          // keyExtractor={index} // Use a unique key for each item
          renderItem={({item, index}) => (
            <Task text={item} taskId={index} deleteTask={deleteTask} />
          )}
        /> */}

        {/* <Task text={'task3'} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  addTask: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-evenly',
    // backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    height: 80,
  },
  addTaskText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#50a2ed',
    marginLeft: 10,
    // backgroundColor: 'green',
  },
  input: {
    width: 150,
    borderWidth: 2,
    borderColor: '#50a2ed',
    borderRadius: 10,
    height: 40,
  },
});

export default App;
