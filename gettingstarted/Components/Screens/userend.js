import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      called:'hi',
      time:'',
      hidden: true
    };
}

GetTime() {
    var date, TimeType, hour, minutes, seconds, fullTime;
    date = new Date();
    hour = date.getHours(); 
    if(hour <= 11)
    {
      TimeType = 'AM';
    }
    else{
      TimeType = 'PM';
    }
    if( hour > 12 )
    {
      hour = hour - 12;
    }
    if( hour == 0 )
    {
        hour = 12;
    } 
    minutes = date.getMinutes();
    if(minutes < 10)
    {
      minutes = '0' + minutes.toString();
    }
    seconds = date.getSeconds();
    if(seconds < 10)
    {
      seconds = '0' + seconds.toString();
    }
    fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
    this.setState({
      time: fullTime
  });
}
async handleSignup() {
  
    axios({
        method:'post',
        url:'http://192.168.1.114:4000/api/users/register',
        data:{
         call:this.state.called
        },
        headers:{
            'Access-Control-Allow-Origin':'http://192.168.1.114:4000'
          }
    }).then((response)=>{

        if(response === ''){
            alert('unsuccesful');
        }
        else{
          this.props.navigation.navigate('Success');
          console.log(response.data);
        }
    }).catch((err)=>{
      Logsuc
          console.log(err);
    })
}

componentDidMount() {
  this.Clock = setInterval( () => this.GetTime(), 1000 );
}
componentWillUnmount(){
  clearInterval(this.Clock);
}


showTime=()=>{

  Alert.alert(this.state.time.toString()) ;

}
showTime=()=>{
  Alert.alert(this.state.time.toString()) ;
}

  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground style={{
        width:'100%',
        height:'100%',
      }}source={require('./Images/1.jpg')}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Smart Attendance System</Text>
        </View>
       
        <Text style={{
        //  padding: 0,
        paddingTop: 15,
        // paddingBottom: 20,
         fontSize: 30, 
         color: 'white',
         textAlign: 'center'}}>
          Welcome
        </Text>
        <Text style={{
          color: 'white',
          marginTop:15,
          fontSize: 22,
          alignContent: 'center',
        }}>
          Please read the instructions carefully
        </Text>
        <View style={{
          marginLeft:30,
          marginRight:30,
        }}>
        <Text style={{
          color: 'white',
          marginTop: 35,
          // marginBottom: 50,
          fontSize: 18,
          textAlign: 'justify',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          Welcome to the  smart  attendance  system. 
          You have been marked present for this class at 
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 22,
            alignContent: 'center',
           }}>
          {this.state.time}
          </Text>
          <Text style={{
            color: 'white',
            // marginTop:15,
            fontSize: 18,
            alignContent: 'center',
          }}> If you want to logout
          from  the 'Smart  Attendance System', press 
          the "Log out"  button at  the bottom of the 
          screen.          
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 26,
          textAlign: 'center',
          alignContent: 'center',
        }}>
          Thank You!
        </Text>
        </View>
        {/* <TouchableOpacity style={styles.scanButton}  alighText='center' onPress={this.handleSignup}>
          <Text style={styles.scanButtonTexxt} >
            Mark
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.SignUpButton}  alighText='center' onPress={() => navigation.navigate('Login')}>
          <Text style={styles.SignUpButtonText} >
            Log Out
          </Text>
        </TouchableOpacity>
        <View style={styles.footer}>
            <Text style={styles.footerText}>CicHub Insternship | Group 3</Text>
        </View> 
      </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    scanButton:{
      position: 'absolute',
      right: 180,
      bottom:100,
      backgroundColor: '#03085C',
      width: 125,
      height: 35,
      borderRadius: 50,
      justifyContent: 'center',
      elevation: 8,
    },
    scanButtonTexxt:{
      color: 'white',
      alignSelf: 'center',
    },
    footer: {
      backgroundColor: '#070F91',
      justifyContent: 'center',
      marginTop: 200,
     // borderTopWidth: 10,
      borderBottomColor: '#6C3483',
    },
    footerText: {
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      padding: 5,
   //   alignText:'center',
      fontSize: 15,
    },
    header: {
      justifyContent: 'center',
    },
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      padding: 20,
      fontSize: 22,
    },
    fullName: {
      alignSelf: 'stretch',
      color: '#3A7EB0',
      padding: 3,
      marginTop: 7,
      fontSize: 12,
      marginLeft: 20,
      marginRight: 20,
    },
    pass: {
    alignSelf: 'stretch',
    color: '#3A7EB0',
    marginTop: 7,
    padding: 3,
    // backgroundColor: 'white',
    // borderTopWidth: 1,
    fontSize: 12,
    marginLeft: 20,
    marginRight: 20,
    },
    SignUpButton: {
      position: 'absolute',
      right: 100,
      bottom:150,
      backgroundColor: '#03085C',
      width: 125,
      height: 35,
      borderRadius: 50,
      justifyContent: 'center',
      elevation: 8,
    },
    SignUpButtonText:{
      color: 'white',
      alignSelf: 'center',
    },
  }
);