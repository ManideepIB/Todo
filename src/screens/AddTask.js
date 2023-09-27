import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import Task from '../components/template/Task';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from '../theme';
import {AppButton, AppText, AppTextInput} from '../components/atoms';
import {AppModal} from '../components/organisms';
import TaskDetails from './Home/TaskDetails';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddTask = () => {
  const [taskManager, setTaskManager] = useState({
    taskItems: [],
    // status: 'open',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleModalPress = event => {
    // Check if the click target is within the modal content.
    if (event.target !== event.currentTarget) {
      return;
    }
    setSelectedTask(null);
  };

  const randomId = function (length = 6) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };

  const handleAddTask = () => {
    const {taskName, taskDescription, taskItems, status} = taskManager;
    const newTask = {
      id: randomId(), // Generate a random ID
      title: taskName,
      description: taskDescription,
      status: status,
    };
    if (editTaskId) {
      // If editing a task, find and update the existing task
      const updatedTasks = taskItems.map(task =>
        task.id === editTaskId ? newTask : task,
      );
      setTaskManager({
        // ...taskManager,
        taskItems: updatedTasks,
      });
    } else {
      // If adding a new task, simply add it to the list
      setTaskManager({
        // ...taskManager,
        taskName: '',
        taskDescription: '',
        taskItems: [...taskItems, newTask],
      });
    }
    setEditTaskId(null); // Reset the edit task ID
    // setTaskManager({
    //   ...taskManager,
    //   taskName: '',
    //   taskDescription: '',
    //   taskItems: [...taskItems, newTask],
    // });
    setModalVisible(!modalVisible);
  };

  const deleteTask = taskId => {
    const updatedTasks = taskManager.taskItems.filter(
      task => task.id !== taskId,
    );
    setTaskManager({
      ...taskManager,
      taskItems: updatedTasks,
    });
  };

  const editTask = taskId => {
    const edit = taskManager.taskItems.find(task => task.id === taskId);

    if (edit) {
      setEditTaskId(taskId);
      setTaskManager({
        ...taskManager,
        taskName: edit.title,
        taskDescription: edit.description,
      });
      setModalVisible(true);
    }
  };
  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = taskManager.taskItems.map(task => {
      if (task.id === taskId) {
        return {...task, status: newStatus};
      }
      return task;
    });

    setTaskManager({
      ...taskManager,
      taskItems: updatedTasks,
    });
  };
  console.log(taskManager.taskItems, '=========');
  console.log(taskManager, '////////////');
  console.log(selectedTask, '......');

  return (
    <View style={styles.container}>
      {/* Adding New Task */}

      <View style={styles.addTask}>
        <AppModal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <AppText style={styles.modalText} h3 center>
                  {editTaskId ? 'Edit Task' : 'Add Task'}
                </AppText>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <AppTextInput
                    placeholder="Task Name"
                    value={taskManager.taskName}
                    onChangeText={text =>
                      setTaskManager({...taskManager, taskName: text})
                    }
                    m={10}
                    pl={10}
                    align="center"
                  />
                  <View
                    style={{
                      // backgroundColor: 'red',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <MaterialIcons
                      name="description"
                      size={30}
                      color={colors.AppTheme}
                    />
                    <AppTextInput
                      placeholder="Description"
                      value={taskManager.taskDescription}
                      onChangeText={text =>
                        setTaskManager({...taskManager, taskDescription: text})
                      }
                      width={200}
                      m={10}
                      pl={10}
                    />
                  </View>
                </View>
                {/* <View
                  style={{
                    // flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <Pressable
                    style={{
                      alignItems: 'center',
                      backgroundColor: colors.AppTheme,
                      borderRadius: 15,
                      width: 100,
                      padding: 10,
                    }}
                    onPress={() => handleAddTask()}>
                    <AppText textSize={20} textColor="#fff" weight="600">
                      Done
                    </AppText>
                  </Pressable>
                </View> */}
                <AppButton
                  color={colors.AppTheme}
                  width={100}
                  center
                  br={15}
                  m={10}
                  p={10}
                  onPress={() => handleAddTask()}>
                  <AppText textSize={20} textColor={colors.white} weight="600">
                    Done
                  </AppText>
                </AppButton>

                {/* <Pressable
                  style={{alignItems: 'center'}}
                  onPress={() => handleAddTask()}>
                  <AppText style={styles.textStyle}>Done</AppText>
                </Pressable> */}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </AppModal>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setEditTaskId(null);
          }}
          style={{flexDirection: 'row'}}>
          <Icon name="add-to-list" size={30} color={colors.AppTheme} />
          <AppText style={styles.addTaskText}>Add Task</AppText>
        </TouchableOpacity>
      </View>

      {/* taskItems List */}
      <View style={{flex: 1}}>
        <FlatList
          data={taskManager.taskItems}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => setSelectedTask(item)}>
              <Task
                text={item.title}
                taskId={item.id}
                deleteTask={deleteTask}
                editTask={editTask}
                status={item.status}
                updateStatus={newStatus => updateTaskStatus(item.id, newStatus)}
              />
            </TouchableOpacity>
          )}
        />
        {/* {selectedTask && <TaskDetails task={selectedTask} />} */}
      </View>
      {/* Task Details Modal */}

      <AppModal
        animationType="slide"
        transparent={true}
        visible={selectedTask != null}
        onRequestClose={() => setSelectedTask(null)}>
        <TouchableWithoutFeedback onPress={handleModalPress}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TaskDetails task={selectedTask} />
              <Pressable
                style={styles.modalClose}
                onPress={() => setSelectedTask(null)}>
                <Icon name="cross" size={30} color={colors.AppTheme} />
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </AppModal>
    </View>
  );
};
export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    color: 'black',
  },
  addTask: {
    margin: 10,
    alignItems: 'flex-end',
  },
  addTaskText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.AppTheme,
    marginLeft: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 500,
    width: 300,
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalCard: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalClose: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
