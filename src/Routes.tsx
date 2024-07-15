import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Home from './pages/Home';
import TodoCreate from './pages/TodoCreate';
import TodoList from './pages/TodoList';
import Footer from './components/Footer';
import Header from './components/Header';

const stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Header />
        <stack.Navigator
          screenOptions={{
            headerShown: false,
            // headerShadowVisible: false,
            // headerTintColor: 'white',
            // headerStyle: {
            //   backgroundColor: '#0D2A3F',
            // },
            // headerLeft: () => <></>,
          }}
          initialRouteName="home">
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="todoCreate" component={TodoCreate} />
          <stack.Screen name="todoList" component={TodoList} />
        </stack.Navigator>
        <Footer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;

const styles = StyleSheet.create({});
