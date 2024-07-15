import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonStyle from '../CommonStyle';
const Footer = (props: any) => {
  console.log(props, 'foot props');
  const navigation: any = useNavigation();
  return (
    <View style={styles.footer}>
      <FontAwesome
        //   style={{color: isDark ? 'white' : 'black'}}
        name="align-justify"
        size={18}
        color="black"
        onPress={() => navigation.navigate('home')}
      />

      <Feather
        //   style={{color: isDark ? 'white' : 'black'}}
        name="edit-3"
        size={18}
        color="black"
        onPress={() => navigation.navigate('todoCreate')}
      />

      <MaterialCommunityIcons
        //   style={{color: isDark ? 'white' : 'black'}}
        name="circle-double"
        size={18}
        color="black"
        onPress={() => navigation.navigate('todoList')}
      />
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
});
