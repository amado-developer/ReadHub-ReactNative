import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import * as actions from '../../../actions/logIn';
import { connect } from 'react-redux';

// const data = values => {

// }
const renderInput = field =>{
	return (
    	<TextInput {...field.input} type={field.type} style={styles.input} placeholder=" Email"/> 
	)
} 

const passwordRenderInput = field =>{
  return (
    <TextInput {...field.input} type={field.type} style={styles.input} secureTextEntry={true} placeholder= " Password"/> 
)
}
const logIn = props =>{
  const {handleSubmit} = props;
  const { dispatch } = props;
  const {history} = props;
  const {login} = props;

  if(login.token !== null){
    history.push("/test");
  }


  if(login.error !== null){
    Alert.alert("Error", "Credential Error");
    login.error = null;
  }
  return(
	<View style={styles.container}>
		<Field  
		name="email" 
		component={renderInput} 
		type="text"
		/>
    <Field
    name="password" 
		component={passwordRenderInput} 
		type="text"
    />
    <View style={styles.button}>
    <Button title="Submit" onPress={handleSubmit(values =>{
      dispatch(actions.startLogin(values.email, values.password));  
          })}
        />
    </View>
	</View>
  );
};

const mapStateToProps = state => {
  //console.log(state);
  return state;
};

const decoratedComponent = connect(mapStateToProps)(logIn);

export default reduxForm({
  form: 'LogIn',
})(decoratedComponent);

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
    marginTop: 300
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