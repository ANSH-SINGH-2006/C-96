import React, { Component } from 'react';
import { Button, View, Text, Alert,TouchableOpacity, StyleSheet } from 'react-native';

class MyHeader extends Component{
  render(){
    return(

      <View style={styles.textConatiner}>
      <Text style={styles.text}>Decrypt</Text>
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

export default MyHeader;