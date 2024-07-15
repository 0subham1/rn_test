import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../App';
import {RawData} from '../rawData';
import CheckBox from 'react-native-check-box';
import CommonStyle from '../CommonStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

const Home = () => {
  const {store, setStore} = useContext(AuthContext);
  const [isSelected, setIsSelected] = useState<Boolean>(false);
  const [profileData, setProfileData] = useState<any>(RawData);

  const handleCheck = (item, index) => {
    console.log(item, 'itemm');
    console.log(index, 'index');

    let arr = [...profileData];
    if (arr[index].isSelected) {
      arr[index].isSelected = false;
    } else {
      arr[index].isSelected = true;
    }

    setProfileData(arr);
  };

  console.log(profileData, 'prof');
  return (
    <View style={styles.homeContainer}>
      <Text style={{color: 'white', fontSize: 20, marginBottom: 20}}>
        Explore
      </Text>

      <FlatList
        data={RawData}
        renderItem={({item, index}) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardContent}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  src={item?.user?.profile}
                  style={{
                    height: 40,
                    width: 40,
                    marginRight: 8,
                    borderRadius: 8,
                  }}
                />
                <View>
                  <Text style={{color: 'white', fontSize: 17}}>
                    {item?.user?.name}
                  </Text>

                  <Text style={{color: 'white', fontSize: 13}}>
                    {item?.user?.name + '@example.com'}
                  </Text>
                </View>
              </View>

              <CheckBox
                isChecked={item?.isSelected}
                onClick={() => handleCheck(item, index)}
                checkBoxColor="white"
              />
            </View>

            <View>
              <Text style={[CommonStyle.txtWhite, {fontSize: 10}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Text>
            </View>
            <View
              style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
              <AntDesign name="clockcircle" size={15} color="#adadad" />
              <Text style={{color: 'white', marginLeft: 4}}>
                {moment(item?.date_time).format('DD/MM/YYYY LT')}
              </Text>
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
    backgroundColor: '#0D2A3F',
    padding: 10,
  },
  card: {
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    backgroundColor: '#334B5F',
    marginBottom: 5,
    marginTop: 5,
    height: 130,
  },

  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
});
