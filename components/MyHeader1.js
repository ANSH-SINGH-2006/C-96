import React, { Component } from 'react';
import { Button, View, Text, Alert,TouchableOpacity, StyleSheet } from 'react-native';

class MyHeader1 extends Component{
  render(){
    return(

      <View style={styles.textConatiner}>
      <Text style={styles.text}>Encrypt</Text>
      </View>

    )
  }
}

const styles=StyleSheet.create({
  textConatiner: {
    backgroundColor:'#B22222'
  },
  text:{
    color:'white',
    padding:20,
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  }
})

export default MyHeader1;