import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as actions from '../../../actions/signup';

import {connect} from 'react-redux';

const SignUpProps = props => {
  const {handleSubmit} = props;
  const {dispatch} = props;
  const {history} = props;
  const {signup} = props;

const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Image
              style={styles.image2}
              source={require('../../../Images/LogoSignUp.png')}
            />
            <Image style={styles.image} source={require('./Images/logo.png')} />
          </View>
          <TextInput style={styles.inputName} placeholder="Name" />
          <TextInput style={styles.inputLastName} placeholder="Last Name" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              height: 100,
            }}>
            <View style={styles.inputWrap}>
              <TextInput style={styles.inputAge} placeholder="Age" />
            </View>

            <View style={styles.inputWrap}>
              <TextInput style={styles.inputGender} placeholder="Gender" />
            </View>
          </View>

          <TextInput style={styles.inputEmail} placeholder="Email" />
          <TextInput
            secureTextEntry={true}
            style={styles.inputPassword1}
            placeholder="Password"
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputPassword2}
            placeholder="Repeat your Password"
          />
          <Button
            onPress={handlesSubmit =>{dispatch(actions.startSignup(
              
              values.email, values.first_name, values.last_name,  values.age, values.gender, 
              values.occupation,values.address_line1, values.address_line2, 
              values.phone_number,values.password1, values.password2  
              ))}(



            title="Register"
            color="#841584"
            accessibilityLabel="Register"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return state;
};

const decoratedComponent = connect(mapStateToProps)(signup);

export default reduxForm({
  form: 'SignUp',
})(decoratedComponent);

const styles = StyleSheet.create({
  fondo: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: 120,
    height: 35,
    marginLeft: 120,
  },

  image2: {
    width: 250,
    height: 100,
    marginLeft: 45,
    marginBottom: 0,
  },

  inputName: {
    backgroundColor: '#F1E4FB',
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,

    //backgroundColor: 'red'
  },

  inputLastName: {
    paddingLeft: 15,
    backgroundColor: '#FFE4F2',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
  },

  inputWrap: {
    flex: 1,
    flexDirection: 'column',
  },

  inputAge: {
    backgroundColor: '#F1E4FB',
    fontSize: 18,
    marginRight: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: 20,
    height: 40,
  },
  inputGender: {
    backgroundColor: '#FFE4F2',
    fontSize: 18,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 20,
    height: 40,
  },

  inputEmail: {
    fontSize: 18,

    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 40,
    backgroundColor: '#F1E4FB',
  },
  inputPassword1: {
    backgroundColor: '#FFE4F2',

    marginBottom: 60,
    fontSize: 18,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  inputPassword2: {
    backgroundColor: '#FFE4F2',

    fontSize: 18,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
  },

  inner: {
    padding: 25,
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default SignUp;
