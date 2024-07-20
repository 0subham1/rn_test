import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Road from '../src/components/Road';

const TrafficLight = () => {
  return (
    <View>
      <View style={styles.lightContainer}>
        <View style={styles.light1}></View>
        <View style={styles.light2}></View>
      </View>
      <Road />
    </View>
  );
};

export default TrafficLight;
let color1 = 'red';
let color2 = 'green';
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  lightContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
    borderWidth: 1,
    width: 70,
    padding: 10,
  },
  light1: {
    borderRadius: 50,
    height: 50,
    width: 50,
    margin: 5,
    backgroundColor: color1,
  },
  light2: {
    borderRadius: 50,
    height: 50,
    width: 50,
    margin: 5,
    backgroundColor: color2,
  },
});
