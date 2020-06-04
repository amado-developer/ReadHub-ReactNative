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

import {connect} from 'react-redux';
import * as actions from '../../actions/payment';

const cardHolderInput = field => {
    return (
      <TextInput
        {...field.input}
        type={field.type}
        style={styles.input}
        placeholder=" Card Holder"
      />
    );
  };

const cardNumberInput = field => {
    return (
      <TextInput
        {...field.input}
        type={field.type}
        style={styles.input}
        placeholder=" Card Number"
        keyboardType= 'numeric'
      />
    );
};

const expirtationDateInput = field => {
    return (
      <TextInput
        {...field.input}
        type={field.type}
        style={styles.input}
        placeholder=" Expiration Date"
        keyboardType= 'numeric'
      />
    );
};
  

const cvvInput = field => {
    return (
      <TextInput
        {...field.input}
        type={field.type}
        style={styles.input}
        placeholder=" CVV"
        keyboardType= 'numeric'
      />
    );
};

const paymentForm = props => {
    const {handleSubmit} = props;
    const {history} = props;
    const {dispatch} = props;
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require('../../Images/paymentLogo.png')}
          />
        </View>
        <Field name="cardholder" component={cardHolderInput} type="text" />
        <Field name="cardnumber" component={cardNumberInput} type="text" />
        <Field name="expdate" component={expirtationDateInput} type="text" />
        <Field name="cvv" component={cvvInput} type="text" />

        <View>
          <TouchableOpacity
            style={styles.button}
            color={'white'}
            onPress={handleSubmit(values => {
              const {cardholder, cardnumber, expdate, cvv} = values;
                if(cardholder !== undefined && cardnumber !== undefined 
                && expdate !== undefined && cvv !== undefined){
                  dispatch(actions.startChangePaymentOption(cardholder, cardnumber, expdate, cvv))
                }
            })}>
        <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const mapStateToProps = state => {
    console.log(state.payment.paymentOption)
    return state;
  };
  
  const decoratedComponent = connect(mapStateToProps,)(paymentForm);
  
  export default reduxForm({
    form: 'payment',
  })(decoratedComponent);

  const styles = StyleSheet.create({
    logo:{
        marginBottom: 50,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 150,
      borderRadius: 10,
      marginLeft: 100,
    },
  
    container: {
      marginTop: 100,
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
  