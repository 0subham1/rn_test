import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TodoList = ({route}: any) => {
  console.log(route.name, 'route.name TodoList');
  return (
    <View>
      <Text>TodoList</Text>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
