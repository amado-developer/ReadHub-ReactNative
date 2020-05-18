import React from 'react';
import {View, TextInput, StyleSheet, Button, Text, Alert} from 'react-native';
import { connect } from 'react-redux';

const test = () =>{
    return(
    <View style={styles.container}>
    <Button title="hahaha" />
    <Text style={styles.container} >NO POS MIAU</Text>
    </View>
);
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'rebeccapurple',
      color: 'white',
      height: 40,
      lineHeight: 30,
      marginTop: 10,
      textAlign: 'center',
      width: 250,
      marginLeft : 50
    },
    container: {
      marginTop: 300,
      marginLeft: 100,
      color: 'red',
      fontSize:40,
    },
    input: {
      borderColor: 'black',
      borderWidth: 1,
      height: 37,
      width: 250,
      marginLeft : 50,
      marginBottom: 50,
    }
  })
export default connect()(test);