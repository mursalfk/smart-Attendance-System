import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import axios from "axios";
export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fullname: '',
      email: '',
      phone: '',
      Rollnumber: '', 
      username: '',
      password: '',
      hidden: true
    }
    this.handleSignup = this.handleSignup.bind(this);
}

  async handleSignup() {
    // console.log('Hello')  
      // console.log(this.state)
      if (
        this.state.fullname === '' ||   
        this.state.email === '' ||
        this.state.phone === '' ||
        this.state.Rollnumber === '' ||
        this.state.username === '' || 
        this.state.password === '' || 
        
        (this.state.fullname === '' &&
        this.state.email === '' &&
        this.state.phone === '' &&
        this.state.Rollnumber === '' &&
        this.state.username === '' &&
        this.state.password === '' )) 
        {
        Alert.alert(`Oh! something went wrong`, `Please enter all fields`);
        return;
      }else{
          // console.log(this.state)
      }
      
      axios({
          method:'post',
          url:'http://192.168.1.114:4000/api/users/register',
          data:{
            fullname:this.state.fullname,  
            email:this.state.email,
            phone:this.state.phone,
            Rollnumber:this.state.Rollnumber,
            username:this.state.username, 
            password:this.state.password 
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
        {/* <Text style={{paddingTop: 10,fontSize: 22,color: '#7B98DB',textAlign: 'center'}}>
          CicHub Internship | Group:3
        </Text> */}
        <Text style={{color: 'rgba(225,225,225,0.8)',paddingTop: 15, fontSize: 30, color: 'white', textAlign: 'center'}}>
          Sign Up
        </Text>
        <View>
        <TextInput
          onChangeText={(e) => this.setState({ fullname: e })}
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          underlineColorAndroid='transparent'
          placeholder="    Full Name e.g. Firstname Lastname" 
        />
        <TextInput
           onChangeText={(e) => this.setState({ email: e })}
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          underlineColorAndroid='transparent'
          placeholder="    Email e.g. someone@sth.com" 
        />
        <TextInput
          onChangeText={(e) => this.setState({ phone: e })}
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          underlineColorAndroid='transparent'
          placeholder="    Contact Number e.g. 03xx-xxxxxxx" 
        />
        <TextInput
          onChangeText={(e) => this.setState({ Rollnumber: e })}
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          underlineColorAndroid='transparent'
          placeholder="    Roll Number e.g. xxxxxxx" 
        />
        <TextInput
          onChangeText={(e) => this.setState({ username: e })}
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          underlineColorAndroid='transparent'
          placeholder="    Username e.g firstname.lastname" 
        />
        <TextInput
          onChangeText={(e) => this.setState({ password : e })}
          secureTextEntry={this.state.hidden}
          style={styles.pass}
          underlineColorAndroid='transparent'
          placeholderTextColor="#787A7E" 
          placeholder="    Password"  
        />
        <TouchableOpacity style={styles.loginButton}   >
          <Button color="#03085C"
           onPress={this.handleSignup}
         // onPress={() => navigation.navigate('Login')}
            title='Create Account'
          />
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
          marginTop:10,
        }}alighText='center' onPress={() => navigation.navigate('Login')}>
          <Text style={styles.SignUpButtonText} >
            Do you have an account? Sign in!
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
     // backgroundColor: '#D3D3D3'
    },
    footer: {
      backgroundColor: '#070F91',
      justifyContent: 'center',
      marginTop: 105,
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
    //  backgroundColor: '#070F91',
      justifyContent: 'center',
   //   borderTopWidth: 10,
      borderBottomColor: '#6C3483',
    },
    headerText: {
      color: 'rgba(225,225,225,0.8)',
      fontWeight: 'bold',
      alignSelf: 'center',
      padding: 20,
      // alignText:'center',
      fontSize: 22,
    },
    fullName: {
      alignSelf: 'stretch',
      color: '#3A7EB0',
      padding: 8,
      marginTop: 12,
      fontSize: 14,
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: 'rgba(225,225,225,0.8)',
      borderRadius: 20 ,
    },
    pass: {
      alignSelf: 'stretch',
      color: '#3A7EB0',
      backgroundColor:'#DBDCDF',
      marginTop: 12,
      backgroundColor: 'rgba(225,225,225,0.8)',
      padding: 8,
      fontSize: 14,
      borderRadius: 20 ,
      marginLeft: 50,
      marginRight: 50,
    },
    loginButton:{
      marginTop:15,
      marginLeft:80,
      marginRight: 80,
      //fontSize: 30,
    },
    SignUpButton: {
      position: 'absolute',
      right: 10,
      bottom:10,
      borderColor: '#A0A1B3',
      borderWidth: 5,
      // marginTop:50,
      backgroundColor: '#03085C',
      width: 90,
      height: 45,
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