import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../App';
import {useNavigation} from '@react-navigation/native';

const Config = () => {
  const {store, setStore} = useContext(AuthContext);
  const [time, setTime] = useState<any>(store?.timeDuration);
  const [lane, setLane] = useState<any>(store?.ambulanceLane);
  const navigation: any = useNavigation();

  const handleSave = () => {
    setStore({...store, timeDuration: time, ambulanceLane: lane});
    navigation.navigate('home');
  };

  return (
    <View style={styles.containerConfig}>
      <KeyboardAvoidingView>
        <View style={{marginBottom: 20}}>
          <Text>Enter TimeDuration (in ms)</Text>
          <TextInput
            value={time}
            inputMode="numeric"
            onChangeText={setTime}
            style={styles.txtInp}
          />
        </View>

        <View style={{marginBottom: 20}}>
          <Text>Select Ambulance Lane: {lane ? lane : 'none'}</Text>
          <View style={styles.radio}>
            <Button title=" A" onPress={() => setLane('A')}></Button>
            <Button title=" B" onPress={() => setLane('B')}></Button>
            <Button title=" C" onPress={() => setLane('C')}></Button>
            <Button title=" D" onPress={() => setLane('D')}></Button>
            <Button title="none" onPress={() => setLane(null)}></Button>
          </View>
        </View>

        <Button title="Save" onPress={() => handleSave()}></Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Config;

const styles = StyleSheet.create({
  containerConfig: {
    padding: 10,
    paddingTop: 50,
    // flex: 1,
    justifyContent: 'center',
  },
  txtInp: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },

  addBtn: {
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: '45%',
    textAlign: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    backgroundColor: '#34cfeb',
  },

  radio: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
});
