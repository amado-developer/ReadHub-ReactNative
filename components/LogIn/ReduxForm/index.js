import React, { useState } from 'react';
import {StyleSheet , View, Text, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions/logIn'
import * as selectors from '../../../reducers'

const ReduxForm = ( {onPress, isLoading} ) => {
  
    return (
    <View style={styles.container}>
    
    <Text> {'It is loading: ' + isLoading} </Text>
    <Button onPress={() => {
      onPress();
      } 
    }
    title="Press Me"/>
    </View>
    )};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  



export default connect(
  state => ({
    isLoading: selectors.getIsLogingIn(state)
  }),

  dispatch => ({
    onPress(){
      dispatch(actions.startLogin("hola", "adios"));
    }
  }),
)(ReduxForm);