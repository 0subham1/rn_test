import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../App';
import {useNavigation} from '@react-navigation/native';

const Road = () => {
  const {store, setStore} = useContext(AuthContext);
  const navigation: any = useNavigation();
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (store?.ambulanceLane) {
        setIsHorizontal(false);
        setIsVertical(false);
        setTimeout(() => {
          setStore({...store, ambulanceLane: null});
        }, 5000);
      } else {
        setIsHorizontal(!isHorizontal);
        setIsVertical(isHorizontal);
      }
    }, Number(store?.timeDuration));

    return () => clearInterval(interval);
  }, [store]);

  //   console.log(isHorizontal, 'isHor');
  //   console.log(isVertical, 'isVer');

  return (
    <View style={styles.roadContainer}>
      <View
        style={[
          styles.roadA,
          {backgroundColor: isVertical ? '#3fe07f' : 'red'},
        ]}>
        {store?.ambulanceLane == 'A' ? (
          <FontAwesome name="ambulance" size={20} />
        ) : (
          <Text>A</Text>
        )}
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View
          style={[
            styles.roadD,
            {backgroundColor: isHorizontal ? '#3fe07f' : 'red'},
          ]}>
          {store?.ambulanceLane == 'D' ? (
            <FontAwesome name="ambulance" size={20} />
          ) : (
            <Text>D</Text>
          )}
        </View>
        <View style={styles.roadO}></View>
        <View
          style={[
            styles.roadB,
            {backgroundColor: isHorizontal ? '#3fe07f' : 'red'},
          ]}>
          {store?.ambulanceLane == 'B' ? (
            <FontAwesome name="ambulance" size={20} />
          ) : (
            <Text>B</Text>
          )}
        </View>
      </View>
      <View
        style={[
          styles.roadC,
          {backgroundColor: isVertical ? '#3fe07f' : 'red'},
        ]}>
        {store?.ambulanceLane == 'C' ? (
          <FontAwesome name="ambulance" size={20} />
        ) : (
          <Text>C</Text>
        )}
      </View>
    </View>
  );
};

export default Road;

const styles = StyleSheet.create({
  roadA: {
    borderWidth: 1,
    borderBottomWidth: 0,
    width: 50,
    height: 50,
    padding: 15,
  },
  roadD: {
    borderWidth: 1,
    borderRightWidth: 0,
    height: 50,
    width: 50,
    padding: 15,
  },
  roadO: {
    height: 50,
    width: 50,
  },
  roadB: {
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 50,
    width: 50,
    padding: 15,
  },
  roadC: {
    borderWidth: 1,
    borderTopWidth: 0,
    width: 50,
    height: 50,
    padding: 15,
  },

  roadContainer: {
    marginTop: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
