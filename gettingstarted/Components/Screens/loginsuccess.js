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
export default class Logsuc extends Component {
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
            fontSize: 35,
            fontWeight: 'bold', 
            color: 'white',
            textAlign: 'center'}}>
            Sign up Successful!
          </Text>
          <Image style={styles.logo} source={require('./Images/logo.png')} />
          <View style={{
              marginLeft:50,
              marginRight:50,
          }}>
            <Text style={{
                color:'white',
                marginTop:50,
                marginBottom:50,
                alignContent:'center',
            }}>
                Please click on the login button below to log in from your newly created account
            </Text>
            </View>
          <View style={{marginTop:30,}}>
            <TouchableOpacity style={styles.loginButton} padding='10'>
              <Button color="#03085C"
                onPress={() => navigation.navigate('Login')}
                title='Log In'
              />
          </TouchableOpacity>
          </View>

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
      marginTop: 150,
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