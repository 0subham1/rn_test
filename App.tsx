import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import Routes from './android/src/Routes';
export const AuthContext = createContext<any>(null);

const App = () => {
  const [store, setStore] = useState<any>({});
  return (
    <AuthContext.Provider value={{store, setStore}}>
      <Routes />
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
