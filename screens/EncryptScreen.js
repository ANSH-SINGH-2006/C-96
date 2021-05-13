import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList

} from 'react-native'

import firebase from 'firebase';

import MyHeader1 from '../components/MyHeader1';

import db from '../config';

var CryptoJS = require("crypto-js");

export default class EncryptScreen extends React.Component{

  constructor(){
    super()
    this.state={
      userId: firebase.auth().currentUser.email,
      password: '',
      website: ''
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  addPassword = async(website,password)=>{
    var userId = this.state.userId

    

  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(password, 'my-secret-key@123').toString();

    
      var randomRequestId = this.createUniqueId()
      db.collection('passwords').add({
        "website": website,
        "password": ciphertext,
        "userId": userId
    })
    

    
    

    this.setState({
        password: '',
        website: ''
    })
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    console.log(decryptedData)

    return alert("Password Encrypted and Stored")

  }

    render(){
        return(
            

    
<View style={{flex:1}}>
<MyHeader1 title="Encrypt"/>
                    <View style={{flex:1,  backgroundColor: '#FCE8E8'}}>
                      
                        <KeyboardAvoidingView style={styles.keyBoardStyle}>
                        <View style={{alignItems: 'center'}}>
                          <TextInput
                            style ={styles.formTextInput}

                            onChangeText={(text)=>{
                              this.setState({
                                website: text
                              })
                            }}

                            placeholder={"enter website name"}
                            
                            
                          />
            
                          
                                
            
            <TextInput
                            style ={styles.formTextInput}
                            
                            onChangeText={(text)=>{
                              this.setState({
                                password: text
                              })
                            }}
                            
                            placeholder={"enter the password"}
                            
                            
                          />
                          <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{this.addPassword(this.state.website, this.state.password)}}
                            >

                            <Text style={{color: 'white'}}>Encrypt and Submit</Text>
                          </TouchableOpacity>

                          
            
                                </View>
            
            
                              
                          
                          
                        </KeyboardAvoidingView>
                    </View>
                    </View>
              
        )
    }

    
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:250,
      height:35,
      alignSelf:'center',
      borderColor:'#B22222',
      borderRadius:10,
      borderWidth:2,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#B22222",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )