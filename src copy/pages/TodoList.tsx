import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../App';
import moment from 'moment';

const TodoList = ({route}: any) => {
  const {store, setStore} = useContext(AuthContext);
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.head}>Todo's</Text>

      {store?.todo?.length > 0 ? (
        <FlatList
          data={store?.todo}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#8E90A3'}}>{item?.title}</Text>
                <Text style={{color: '#8E90A3'}}>
                  {moment(item?.date).format('LT')}
                </Text>
              </View>
              <Text style={{color: '#8E90A3'}}>{item?.description}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={{fontSize: 20, color: 'white'}}>No Items added yet..</Text>
      )}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#0D2A3F',
    padding: 10,
  },

  card: {
    color: '#8E90A3',
    borderRadius: 7,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    height: 70,
    borderColor: '#8E90A3',
  },

  head: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#51C833',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    paddingLeft: 12,
  },
});
