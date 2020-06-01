import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/signup';

const renderName = field => {
  
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.inputName}
      placeholder=" Name"
      //autoFocus = {true}  
     
    />
  );
};

const renderLastName = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.inputLastName}
      placeholder=" Last Name"
    />
  );
};

const renderAge = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.inputAge}
      placeholder=" Age"
    />
  );
};

const renderGender = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.inputGender}
      placeholder="Gender"
    />
  );
};

const renderEmail = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.inputEmail}
      placeholder="Email"
    />
  );
};

const renderPassword = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.inputPassword1}
      placeholder="Password"
    />
  );
};

const renderConfirmPasword = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.inputPassword2}
      placeholder="Confirm your password"
    />
  );
};

const renderOccupation= field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.occupation}
      placeholder="Occupation"
    />
  );
};
const renderAddressLine1 = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.addrressLine1}
      placeholder="Address Line 1"
    />
  );
};

const renderAddressLine2 = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.addrressLine2}
      placeholder="Address Line 2"
    />
  );
};

const renderPhoneNumber = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.phoneNumber}
      placeholder="Phone Number"
    />
  );
};
  
  

const signUp = props => {
  const {handleSubmit} = props;
  const {dispatch} = props;
  const {history} = props;
  const {SignUp} = props;

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == 'ios' ? 'padding' : null} 
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
        <ScrollView style={styles.scrollView}>

          <View >
              <Image
                  style={styles.image2}
                  // source={require('../../Images/signup.png')}
                />
              <Image
                  style={styles.image}
                  source={require('../../Images/logo.png')}
                />
            </View>

            <Field name="first_name" component={renderName} type="text" />
            <Field name="last_name" component={renderLastName} type="text" />

            <View style={{flexDirection: 'row', alignItems: 'flex-start',height:100,}}>

                  <View style={styles.inputWrap}>
                    
                      <Field name="age" component={renderAge} type="text" />

                  </View>
  
                  <View style={styles.inputWrap}>
                  
                      <Field name="gender" component={renderGender} type="text" />
                  </View>     

            </View> 

            <Field name="email" component={renderEmail} type="text" />
            <Field name="password1" component={renderPassword} type="text" />
            <Field name="password2" component={renderConfirmPasword} type="text" />

            <Field name="occupation" component={renderOccupation} type="text" />
            <Field name="address_line1" component={renderAddressLine1} type="text" />
            <Field name="address_line2" component={renderAddressLine2} type="text" />
            <Field name="phone_number" component={renderPhoneNumber} type="text" />
            
            
            <TouchableOpacity

                style={styles.button}
                color={'white'}
                onPress={handleSubmit(values => {
                  dispatch(actions.startSignup(values.email, values.first_name, values.last_name,  
                    values.age, values.gender, values.occupation,
                    values.address_line1, values.address_line2, values.phone_number,
                    values.password1, values.password2));
                })}>

                <Text>Register!</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


const mapStateToProps = state => {
  return state;
};

const decoratedComponent = connect(mapStateToProps)(signUp);
export default reduxForm({
  form: 'signup',
})(decoratedComponent);


const styles = StyleSheet.create({

  occupation:{
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 30,
    color: '#010F78',

  },
  addrressLine1:{
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 30,
    color: '#010F78',

  },

  addrressLine2:{
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 30,
    color: '#010F78',

  },

  phoneNumber:{
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 30,
    color: '#010F78',

  },

  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 150,
    borderRadius: 10,
    marginLeft: 125,
    marginTop: 35,
    marginBottom: 40
    

  },

  image: {
    width: 120,
    height: 35,
    marginLeft: 145,
 
  },

  image2: {
    width: 250,
    height: 100,
    marginLeft: 75,
    marginTop: 35
  },

  inputName: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 20,
    color: '#010F78',
    
  },

  inputLastName: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 25,
    color: '#010F78',
  
  },

  inputAge: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 100,
    marginLeft: 50,
    marginTop: 25,
    color: '#010F78',

  },

  inputGender: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 120,
    marginLeft: 20,
    marginTop: 25,
    color: '#010F78',
  },

  inputEmail: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    
    color: '#010F78',
  },

  inputPassword1: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 25,
    color: '#010F78',
  },


  inputPassword2: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'black',
    height: 50,
    width: 300,
    marginLeft: 50,
    marginTop: 25,
    color: '#010F78',
  },


  inputWrap: {
    flex: 1,
    flexDirection: 'column',
  },
});

