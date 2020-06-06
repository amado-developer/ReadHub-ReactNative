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

const renderInput = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.input}
      placeholder=" Email"
    />
  );
};

const passwordRenderInput = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.input}
      secureTextEntry={true}
      placeholder=" Password"
      placeholderStyle={styles.placeholder}
    />
  );
};

async function checkLogIn(login, history) {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  if (login.token !== null) {
    history.push('/home');
  } else if (login.error !== null) {
    Alert.alert('Error', login.error);
    login.error = null;
  }
}
const logIn = props => {
  const {handleSubmit} = props;
  const {dispatch} = props;
  const {history} = props;
  const {login} = props;

  checkLogIn(login, history);
  if (login.token === null) {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../../../Images/logo.png')}
          />
        </View>
        <Field name="email" component={renderInput} type="text" />
        <Field name="password" component={passwordRenderInput} type="text" />
        <View>
          <TouchableOpacity
            style={styles.button}
            color={'white'}
            onPress={handleSubmit(values => {
              dispatch(actions.startLogin(values.email, values.password));
            })}>
            <Text>Log in</Text>
          </TouchableOpacity>


          <TouchableOpacity
          style={styles.button}
          color={'white'}
          onPress={()=>history.push("/SignUp")}> 
          <Text>Sign Up</Text>
        </TouchableOpacity>
    
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../../Images/logo.png')}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return state;
};

const decoratedComponent = connect(mapStateToProps)(logIn);

export default reduxForm({
  form: 'LogIn',
})(decoratedComponent);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 150,
    borderRadius: 10,
    marginLeft: 100,
    marginBottom: 20,
  },

  container: {
    marginTop: 200,
    marginLeft: 30,
  },

  input: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 50,
    width: 250,
    marginLeft: 50,
    marginBottom: 50,
    color: '#010F78',
  },

  image: {
    width: 250,
    height: 100,
    marginLeft: 55,
  },
});
