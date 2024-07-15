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
    <View style={[styles.footer, CommonStyle.flexRowSpaceBtwn]}>
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
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',

    padding: 10,
    // bottom: 0,
    // height: '10%',
    // width: '100%',
    backgroundColor: '#51C833',
    // borderBlockColor: 'red',
    // borderWidth: 2,
  },
});
