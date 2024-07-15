import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import CommonStyle from '../CommonStyle';
import {AuthContext} from '../../App';

const Header = () => {
  const {store, setStore} = useContext(AuthContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  let todayDate = new Date();
  console.log(todayDate, 'today');
  return (
    <View style={styles.headerContainer}>
      <Text style={[CommonStyle.txtWhite, {fontSize: 30}]}>
        Let's make today count
      </Text>

      <View style={[CommonStyle.flexRowSpaceBtwn]}>
        <View>
          <Text style={CommonStyle.txtWhite}>June 30th, 2022</Text>
          <Text style={CommonStyle.txtWhite}>Welcome back!</Text>
        </View>

        <Image
          style={{height: 50, width: 50}}
          source={require('../Image/profile.png')}
        />
      </View>
      <View style={[styles.card, CommonStyle.flexRowSpaceBtwn]}>
        <View style={{flex: 1}}>
          <Text style={CommonStyle.txtWhite}>Cameron Williamson</Text>
          <Text style={CommonStyle.txtWhite}>+91 9876543210</Text>
          <Text style={{color: '#51C833'}}>Rs. 10,000.00</Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 280,
    backgroundColor: '#0D2A3F',
    padding: 10,
  },

  card: {
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    backgroundColor: '#3d6a8a',
  },
});
