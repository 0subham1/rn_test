import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrafficLight from '../components/TrafficLight';

const Home = () => {
  return (
    <View style={styles.containerHome}>
      <Text style={{fontSize: 20}}>Traffic Stimulation</Text>
      <TrafficLight />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerHome: {
    padding: 10,
    // flex: 1,
    // textAlign: 'center',
    justifyContent: 'center',
    // width: Dimensions.get('screen').width - 20,
  },
});
