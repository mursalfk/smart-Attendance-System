import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import axios from "axios";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hidden: true,
      email: ' ',
      password: ' ',
    }
    this.handleSignup = this.handleSignup.bind(this);
  }
  async handleSignup() {
    const { navigate } = this.props.navigation;
    console.log('Hello')
      console.log(this.state)
      if (
        this.state.email === ' ' || 
        this.state.password === ' ' || 
        
        (this.state.email === ' ' &&
        this.state.password === ' ' )) 
        {
        Alert.alert(`Oh! something went wrong`, `Please enter all fields`);
        return;
      }else{
        console.log(this.state)
      }
      
      axios({
          method:'post',
          url:'http://192.168.1.114:4000/api/users/login',
          data:{
            email:this.state.email, 
            password:this.state.password 
          },
          headers:{
              'Access-Control-Allow-Origin':'http://192.168.1.121:5000'
            }
      }).then((response)=>{

          if(response === ''){
              alert('unsuccesful');
          }
          else{
            this.props.navigation.navigate('User');
              console.log(response.data);
              // this.state.password('');
          }
      }).catch((err)=>{
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
        
          <Text style={{
            paddingTop: 50,
            fontSize: 40,
            fontWeight: 'bold', 
            color: 'white',
            textAlign: 'center'}}>
            Log in
          </Text>
          <Image style={styles.logo} source={require('./Images/logo.png')} />
          <View style={{marginTop:30,}}>
            <TextInput
              style={styles.user}
              onChangeText={(e) => this.setState({ email: e })}
              placeholderTextColor="#6B6B74" 
              underlineColorAndroid='transparent'
              placeholder="    Email" 
            />
            <TextInput
              secureTextEntry={this.state.hidden}
              style={styles.pass}
              onChangeText={(e) => this.setState({ password: e })}
              placeholderTextColor="#6B6B74" 
              underlineColorAndroid='transparent'
              placeholder="    Password"  
            />
            <TouchableOpacity style={styles.loginButton} padding='10'>
              <Button color="#03085C"
                // onPress={() => }
                onPress={this.handleSignup}
                title='Log In'
              />
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={{
            marginTop: 10,
          }}onPress={() => navigation.navigate('Register')}>
            <Text style={styles.SignUpButtonText}>
              Dont have an account? Sign up!
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
    footer: {
      backgroundColor: '#070F91',
      justifyContent: 'center',
      marginTop: 100,
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
  //   backgroundColor: '#070F91',
      justifyContent: 'center',
     // borderTopWidth: 10,
      borderBottomColor: '#6C3483',
    },
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      padding: 20,
     // alignText:'center',
      fontSize: 22,
    },
    user: {
      alignSelf: 'stretch',
      color: 'black',
      padding: 3,
      marginTop: 7,
      fontSize: 12,
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: 'rgba(225,225,225,0.8)',
      borderRadius: 20 ,
 
    },
    pass: {
      alignSelf: 'stretch',
      color: 'black',
      backgroundColor:'#DBDCDF',
      marginTop: 7,
      backgroundColor: 'rgba(225,225,225,0.8)',
      padding: 3,
      fontSize: 12,
      borderRadius: 20 ,
      marginLeft: 50,
      marginRight: 50,
    },
    // SignUpButton: {
    //   position: 'absolute',
    //   right: 40,
    //   bottom:100,
    //   borderColor: '#A0A1B3',
    //   borderWidth: 5,
    //   backgroundColor: '#03085C',
    //   width: 90,
    //   height: 45,
    //   borderRadius: 50,
    //   justifyContent: 'center',
    //   elevation: 8,
    //   fontSize: 24,
    // },
    loginButton:{
      marginTop:15,
      marginLeft:80,
      marginRight: 80,
//      fontSize: 30,
      },
    SignUpButtonText:{
      color: 'white',
      alignSelf: 'center',
    },
    logo:{
      alignSelf:'center',
      marginTop:10,
      // bottom:10,
      // right:30,
      width:130,
      height:130,
      marginTop:30,
      // backgroundColor: 'white',
      borderRadius:50,
      borderColor:'white',
      borderWidth:2,
    },
    image: {
      width: 100,
      height: 100
    }
  }
);