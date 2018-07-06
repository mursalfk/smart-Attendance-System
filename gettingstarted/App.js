import React from 'react';
import Main from './Components/Screens/Main';
import signup from './Components/Screens/signup';
import {createStackNavigator,} from 'react-navigation';
import user from './Components/Screens/userend';
import Logsuc from './Components/Screens/loginsuccess';
//import ScanScreen from './Components/Screens/QRScan';

//Database available at
// https://mlab.com/home
// username: Hafsa
// Password: Hafsacs76

const MyStack = createStackNavigator({
  Login : {
    screen: Main,
    navigationOptions:{
      header: null,
    }
  },
  Register : {
    screen: signup,
    navigationOptions:{
      header: null,
    }
  },
  User: {
    screen:user,
    navigationOptions:{
      header:null,
    }
  },
  Success: {
    screen: Logsuc,
    navigationOptions:{
      header:null,
    }
  },
});

export default class App extends React.Component {
  render() {
    return (
      <MyStack/>
    );
  }
}
