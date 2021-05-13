import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
var CryptoJS = require("crypto-js");


export default class DecryptScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedPasswordList : [],
      userId: firebase.auth().currentUser.email
    }
  this.requestRef= null
  }

  getRequestedPasswordList =()=>{
    this.requestRef = db.collection("passwords").where("userId", "==", this.state.userId)
    .onSnapshot((snapshot)=>{
      var requestedPasswordList = snapshot.docs.map(document => document.data());
      this.setState({
        requestedPasswordList : requestedPasswordList
      });
    })
  }

  componentDidMount(){
    this.getRequestedPasswordList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, index} ) =>{
    return (
      <ListItem
        key={index}
        title={item.password}
        subtitle={item.website}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}
            onPress={()=>{
              var bytes = CryptoJS.AES.decrypt(item.password, 'my-secret-key@123');
              var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
              navigator.clipboard.writeText(decryptedData)
              alert('Website: '+item.website+'\r\n'+'Password: '+decryptedData+'\r\n'+'\r\n'+"Password Copied Successfully!")
            }}
            >
              <Text style={{color:'#ffff', fontWeight: 600}}>Decrypt and Copy</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Decrypt"/>
        <View style={{flex:1,  backgroundColor: '#FCE8E8'}}>
          {
            this.state.requestedPasswordList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Passwords</Text>
              </View>
            )
            :(
              <View style={{backgroundColor: '#FCE8E8'}}>
              <FlatList
              style={{backgroundColor: '#FCE8E8'}}
                keyExtractor={this.keyExtractor}
                data={this.state.requestedPasswordList}
                renderItem={this.renderItem}
              />
              </View>
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:170,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#B22222",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
     
  }
})