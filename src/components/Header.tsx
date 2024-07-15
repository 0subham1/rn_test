import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import CommonStyle from '../CommonStyle';
import {AuthContext} from '../../App';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const Header = () => {
  const {store, setStore} = useContext(AuthContext);
  const [isEnabled, setIsEnabled] = useState(false);

  let todayDate = new Date();
  console.log(todayDate, 'today');

  const cardHtml = () => {
    return (
      <>
        <View style={{flex: 1}}>
          <Text style={CommonStyle.txtWhite}>Cameron Williamson</Text>
          <Text style={CommonStyle.txtWhite}>+91 9876543210</Text>
          <Text style={{color: '#51C833'}}>Rs. 10,000.00</Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#51C833'}}
          thumbColor={isEnabled ? 'white' : '#f4f3f4'}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </>
    );
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={[CommonStyle.txtWhite, {fontSize: 30}]}>
        Let's make today count
      </Text>

      <View style={[CommonStyle.flexRowSpaceBtwn]}>
        <View style={{flex: 1}}>
          <Text style={CommonStyle.txtWhite}>{moment().format('ll')}</Text>
          <Text style={CommonStyle.txtWhite}>Welcome back!</Text>
        </View>

        <Image
          style={{height: 50, width: 50}}
          source={require('../Image/profile.png')}
        />
      </View>
      {isEnabled ? (
        <LinearGradient
          colors={['#51C833', '#0D2A3F']}
          style={[styles.card, CommonStyle.flexRowSpaceBtwn]}>
          {cardHtml()}
        </LinearGradient>
      ) : (
        <View style={[styles.card, CommonStyle.flexRowSpaceBtwn]}>
          {cardHtml()}
        </View>
      )}

      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    display: 'flex',
    width: '100%',
    height: 250,
    backgroundColor: '#0D2A3F',
    elevation: 7,
    alignItems: 'center',
    top: 0,
  },

  card: {
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    backgroundColor: '#334B5F',
  },
  cardBackground: {},
});
