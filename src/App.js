import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import HooksCake from './Component/HooksCake';
import Cake from './Component/Cake';
import User from './Component/User';


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      {/* <HooksCake />
     <Cake /> */}
     <User />
    </div>
    </Provider>
  );
}

export default App;
