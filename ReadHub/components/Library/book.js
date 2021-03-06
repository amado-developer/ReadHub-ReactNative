import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import * as cartActions from '../../actions/bookLoanCart';
import {HOST} from '../../Config';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

        
const book = ({
  name,         
  author,       
  publisher,    
  language,      
  isbn,         
  edition,      
  release_date, 
  quantity,     
  cover,
  cart,
  id,
  onAddToCart,
  onRemoveFromCart,

}) => {
  return (
    <View style={styles.bookContainer}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.info}>
        <View style={styles.imageView}>
          <Image source={{uri: HOST + cover}} style={styles.image} />
        </View>
        <View style={styles.bookDetail}>
          <Text style={styles.detail}>Author: {author}</Text>
          <Text style={styles.detail}>Language: {language}</Text>
          <Text style={styles.detail}>Edition: {edition}</Text>
          <Text style={styles.detail}>Publisher: {publisher}</Text>
          <Text style={styles.detail}>isbn: {isbn}</Text>
          <Text style={styles.detail}>ke ke{release_date}</Text>
          <Text style={styles.detail}>quantity {quantity}</Text>
          {!cart.includes(id) ? (
          <TouchableOpacity style = {styles.touch}onPress={() => {
            quantity !== 0 ? onAddToCart() : Alert.alert('Error', 'No available units');
            }}>
            <Text style={styles.add}>Add to loan cart</Text>
          </TouchableOpacity >
          ) : (<TouchableOpacity onPress={() => onRemoveFromCart()} style = {styles.touch2}>
            <Text style={styles.add2}>Remove from loan cart</Text>
          </TouchableOpacity>)}
        </View>
      </View>
    </View>
  );
};

export default connect(
  (state, {id}) => ({
    ...selectors.getBook(state, id),
    cart: selectors.getBookLoanCart(state),
  }),
  (dispatch, {id}) => ({
    onAddToCart(){
      dispatch(cartActions.addToCart(id));
    },
    onRemoveFromCart(){
      dispatch(cartActions.removeFromCart(id));
    }
  })
)(book);


const styles = StyleSheet.create({
  touch2:{
    backgroundColor: '#FFCCF3', 
    width: 160,
     height:20,
     borderRadius:20

  },
  touch:{
    backgroundColor: '#DFCEFF', 
    width: 125,
     height:20,
     borderRadius:20

  },
  add2:{
    marginLeft:10

  },
  add:{
    marginLeft:14

  },
  icon: {
    marginRight: 10,
  },
  addToCartContainer: {
    marginLeft: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  cartIcon: {
    width: 30,
    height: 30,
  },

  button: {
    backgroundColor: '#0E49B5',
    width: 150,
    height: 30,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },

  removeButton: {
    backgroundColor: '#D6221C',
    width: 150,
    height: 30,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    paddingTop: 2,
    fontSize: 20,
  },

  removeText: {
    color: 'white',
    paddingTop: 2,
    fontSize: 20,
  },
  image: {
    width: 120,
    height: 200,
  },

  bookContainer: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    width: 384,
    borderRadius: 10,
    height: 'auto',
    borderColor: '#F0F0F0',
    borderWidth: 5,
  },

  title: {
    color: '#4D6066',
    fontFamily: 'Book Antiqua',
    fontSize: 26,
    fontWeight: 'bold',
    paddingLeft: 28,
    paddingRight: 10,
    marginTop: 10,
  },

  info: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  imageView: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 20,
  },

  bookDetail: {
    marginTop: 10,
  },

  detail: {
    color: '#4D6066',
    fontFamily: 'Book Antiqua',
    fontSize: 18,
  },
});
