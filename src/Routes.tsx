import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Home from './pages/Home';

import Footer from './components/Footer';

import Config from './pages/Config';

const stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="home">
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="config" component={Config} />
        </stack.Navigator>
        <Footer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
