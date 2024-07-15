import React, {createContext, useState} from 'react';
import Routes from './src/Routes';

export const AuthContext = createContext<any>(null);

const App = () => {
  const [store, setStore] = useState<any>({path: 'home', todo: []});
  return (
    <AuthContext.Provider value={{store, setStore}}>
      <Routes />
    </AuthContext.Provider>
  );
};

export default App;
