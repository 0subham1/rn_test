import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../App';
import {RawData} from '../rawData';
import CheckBox from 'react-native-check-box';
import CommonStyle from '../CommonStyle';
const Home = () => {
  const {store, setStore} = useContext(AuthContext);
  const [isSelected, setIsSelected] = useState<Boolean>(false);
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={RawData}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                  src={item?.user?.profile}
                  style={{height: 40, width: 40, marginRight: 8}}
                />
                <View>
                  <Text style={CommonStyle.txtWhite}>{item?.user?.name}</Text>

                  <Text style={CommonStyle.txtWhite}>
                    {item?.user?.name + '@example.com'}
                  </Text>
                </View>
              </View>

              <CheckBox
                isChecked={isSelected}
                onClick={() => setIsSelected(!isSelected)}
                // style={{alignSelf: 'center'}}
                // leftText={'CheckBox'}
              />
            </View>

            <View>
              <Text>{item.comments[0]}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
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
    marginBottom: 5,
    marginTop: 5,
    height: 130,
  },

  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
