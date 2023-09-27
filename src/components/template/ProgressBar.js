import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppText} from '../atoms';

const ProgressBar = ({progress, barColor, textColor}) => {
  const progressWidth = `${progress}%`;
  const remainingWidth = `${100 - progress}%`;
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.completedBar, {width: progressWidth}]} />
        <View style={[styles.remainingBar, {width: remainingWidth}]} />
      </View>
      {/* <AppText textColor={textColor}>{progress}%</AppText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
    // backgroundColor: 'white',
    borderRadius: 10,
  },
  progressBar: {
    height: 12,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffc87c', // Default white color for the progress bar
  },
  completedBar: {
    // height: 20,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 8,
    backgroundColor: '#fdf5e6', // Default white color for the progress bar
  },
  //   remainingBar: {
  //     height: 20,
  //     borderRadius: 10,
  //     backgroundColor: 'grey',
  //   },
});

export default ProgressBar;
