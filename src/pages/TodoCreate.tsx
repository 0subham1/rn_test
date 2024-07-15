import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../App';
import moment from 'moment';

const TodoCreate = ({route}: any) => {
  // console.log(route.name, 'route.name TodoCreate');
  const {store, setStore} = useContext(AuthContext);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAdd = () => {
    let obj = {title, description, date: new Date()};
    setStore({...store, todo: [...store?.todo, obj]});
    setTitle('');
    setDescription('');
  };
  const handleClear = () => {
    setTitle('');
    setDescription('');
    setStore({...store, todo: []});
  };
  useEffect(() => {
    console.log(store, 'store');
  }, [store]);
  return (
    <View style={styles.homeContainer}>
      <ScrollView>
        <Text
          style={{color: 'white', fontSize: 20, marginBottom: 20}}
          onPress={() => handleClear()}>
          Add Todo's
        </Text>
        <KeyboardAvoidingView>
          <View style={{marginBottom: 20}}>
            <Text style={{color: 'white'}}>Title</Text>
            <TextInput
              value={title}
              onChangeText={text => setTitle(text)}
              placeholder="Enter Title"
              placeholderTextColor="#8E90A3"
              style={styles.txtInp}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{color: 'white'}}>Description</Text>
            <TextInput
              multiline
              value={description}
              onChangeText={text => setDescription(text)}
              placeholder="Enter Description"
              placeholderTextColor="#8E90A3"
              style={styles.txtInp}
            />
          </View>

          <TouchableOpacity style={styles.addBtn} onPress={() => handleAdd()}>
            <Text style={{color: 'white'}}>ADD</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default TodoCreate;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#0D2A3F',
    padding: 10,
  },
  txtInp: {
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#334B5F',
    color: 'white',
  },

  addBtn: {
    backgroundColor: '#51C833',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: '45%',
    textAlign: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
});
