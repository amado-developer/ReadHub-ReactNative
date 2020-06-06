import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import * as cartActions from '../../actions/equipmentLoanCart';
import {HOST} from '../../Config';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

        
const equipment = ({
  name, 
  type,             
  language,       
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
        <View style={styles.bookDetail}>
          <Text style={styles.detail}>Name: {name}</Text>
          <Text style={styles.detail}>Type: {type}</Text>
          <Text style={styles.detail}>Release Date: {release_date}</Text>
          <Text style={styles.detail}>quantity {quantity}</Text>
          {!cart.includes(id) ? (
          <TouchableOpacity style={styles.button} onPress={() => {
            quantity !== 0 ? onAddToCart() : Alert.alert('Error', 'No available units');
            }}>
            <Text style={styles.buttonText}>Add to loan cart</Text>
          </TouchableOpacity>
          ) : (<TouchableOpacity onPress={() => onRemoveFromCart()}>
            <Text>Remove from loan cart</Text>
          </TouchableOpacity>)}
        </View>
      </View>
    </View>
  );
};

export default connect(
  (state, {id}) => ({
    ...selectors.getEquipment(state, id),
    cart: selectors.getEquipmentLoanCart(state),
  }),
  (dispatch, {id}) => ({
    onAddToCart(){
      dispatch(cartActions.addToCart(id));
    },
    onRemoveFromCart(){
      dispatch(cartActions.removeFromCart(id));
    }
  })
)(equipment);

const styles = StyleSheet.create({
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
    backgroundColor: '#A639E6',
    width: 150,
    height: 30,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
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
    paddingLeft: 130,
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
    marginLeft: 120
  },

  detail: {
    color: '#4D6066',
    fontFamily: 'Book Antiqua',
    fontSize: 20,
  },
});