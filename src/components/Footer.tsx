import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = (props: any) => {
  console.log(props, 'foot props');
  const navigation: any = useNavigation();
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <FontAwesome name="align-justify" size={18} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('todoCreate')}>
        <Feather name="edit-3" size={18} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('todoList')}>
        <MaterialCommunityIcons name="circle-double" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 50,
    backgroundColor: '#51C833',
    elevation: 7,
    alignItems: 'center',
    bottom: 0,
  },

  btn: {
    height: 50,
    width: 50,
  },
});
