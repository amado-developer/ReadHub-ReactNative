import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Field, reduxForm} from 'redux-form';

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

const bookStore = props => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <Field name="search" component={renderInput} type="text" />
        <TouchableOpacity style={styles.button} color={'white'}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};

const decoratedComponent = connect(mapStateToProps)(bookStore);

export default reduxForm({
  form: 'searchBook',
})(decoratedComponent);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 150,
    borderRadius: 10,
    position: 'relative',
    left: 235,
  },
  input: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 50,
    width: 385,
    marginBottom: 10,
    color: '#010F78',
  },
  searchContainer: {
    marginLeft: 10,
    marginTop: 40,
  },
});
