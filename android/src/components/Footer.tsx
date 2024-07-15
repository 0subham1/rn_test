import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.footer}>
      <Text onPress={() => navigation.navigate('home')}>home</Text>
      <Text onPress={() => navigation.navigate('todoCreate')}>create</Text>
      <Text onPress={() => navigation.navigate('todoList')}>list</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
});
