import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions/library';
import {withRouter} from 'react-router-native';

const renderInput = field => {
  return (
    <TextInput
      {...field.input}
      type={field.type}
      style={styles.input}
      placeholder=" Search Book"
    />
  );
};

const searchForm = withRouter(props => {
  const {handleSubmit} = props;
  const {dispatch} = props;
  const {profile} = props;
  const {history} = props;
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => history.push('/home')}>
          <Image
            source={require('../../Images/goBackButton.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
        <Image source={require('../../Images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.searchContainer}>
        <Field name="search" component={renderInput} type="text" />
        <TouchableOpacity style={styles.buyButton} onPress={() => loan(props)}>
          <Text>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          color={'white'}
          onPress={handleSubmit(values => {
            dispatch(actions.startFetchingBook(values.search));
          })}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
});

const loan = props => {
  const {cart} = props.bookLoanCart;
  if (cart.length > 0) {
    const {dispatch} = props;
      dispatch(actions.startLoaningBook(cart));
    }
  else {
    Alert.alert('Error', 'Nothing to Loan');
  }
};

const mapStateToProps = state => {
  return state;
};

const decoratedComponent = connect(mapStateToProps)(searchForm);

export default reduxForm({
  form: 'searchPhysicalBooks',
})(decoratedComponent);

const styles = StyleSheet.create({
  goBackButton: {
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 0.5,
    padding: 10,
    width: 150,
    borderRadius: 10,
    marginLeft: 10,
    width: 60,
    marginTop: 20,
  },
  totalAmmount: {
    fontSize: 35,
    fontFamily: 'Book Antiqua',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 3,
  },
  balanceText: {
    fontSize: 35,
    fontFamily: 'Book Antiqua',
    fontWeight: 'bold',
    marginTop: 10,
  },

  button: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'black',
    padding: 10,
    width: 150,
    borderRadius: 10,
    marginLeft: 10,
  },

  buyButton: {
    alignItems: 'center',
    width: 150,
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 75,
  },

  searchButtonText: {
    color: 'white',
  },
  input: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    width: 385,
    marginBottom: 10,
    color: '#010F78',
  },
  searchContainer: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  screen: {
    backgroundColor: 'white',
  },

  logo: {
    width: 300,
    height: 100,
  },

  backImage: {
    width: 50,
    height: 40,
  },

  header: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
