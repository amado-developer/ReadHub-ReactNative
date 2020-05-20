/* eslint-disable */
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as actions from '../../../actions/logIn';
import {connect} from 'react-redux';

const renderInput = field =>{
    return(
        <TextInput
        {...field.input}
        type={field.type}
        style={styles.input}
        placeholder = "First Name"
        />
    );
};

const renderInputLastName = field =>{
    return(
        <TextInput
        {...field.input}
        type={field.type}
        style={styles.input}
        placeholder = "Last Name"
        />
    );
};

const renderInputLastName = field =>{
    return(
        <TextInput
        {...field.input}
        type={field.type}
        style={styles.input}
        placeholder = "Last Name"
        />
    );
};

