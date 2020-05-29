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
} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions/bookStore';
import Book from './digitalBook';

const searchValue = {vale: ''};
const search = event => {
  searchValue.value = event;
};

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

const searchForm = props => {
  console.log(searchValue)
  const {digitalBooks} = props;
  const {handleSubmit} = props;
  const {dispatch} = props;
  return (
    <ScrollView style={styles.screen}>
      <Image source={require('../../Images/logo.png')} style={styles.logo} />
      <View style={styles.searchContainer}>
        <Field name="search" component={renderInput} type="text" />
        <TouchableOpacity
          style={styles.button}
          color={'white'}
          onPress={handleSubmit(values => {
            dispatch(actions.startRetrieveBooks(values.search));
          })}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.booksContainer}>
        {digitalBooks.order.map(id => (
          <Book key={id} id={id} />
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return state;
};

const decoratedComponent = connect(mapStateToProps)(searchForm);

export default reduxForm({
  form: 'searchBook',
})(decoratedComponent);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'black',
    padding: 10,
    width: 150,
    borderRadius: 10,
    position: 'relative',
    left: 235,
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
  },

  screen: {
    backgroundColor: 'white',
  },

  logo: {
    marginTop: 20,
    marginLeft: 50,
    width: 300,
    height: 100,
  },
});
