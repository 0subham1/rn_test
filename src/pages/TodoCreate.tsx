import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../App';

const TodoCreate = ({route}: any) => {
  console.log(route.name, 'route.name TodoCreate');
  const {store, setStore} = useContext(AuthContext);

  return (
    <View style={{height: Dimensions.get('screen').height - 10}}>
      <Text>TodoCreate</Text>
    </View>
  );
};

export default TodoCreate;

const styles = StyleSheet.create({});
