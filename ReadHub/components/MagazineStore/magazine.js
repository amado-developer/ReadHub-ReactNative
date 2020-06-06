import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import * as cartActions from '../../actions/magazineCart';
import {HOST} from '../../Config';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const magazine = ({
  author,
  cover,
  name,
  number,
  price,
  release_date,
  volume,
  onPress,
  onRemove,
  id,
  cart,
}) => {
  console.log(price);
  return (
    <View style={styles.bookContainer}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.info}>
        <View style={styles.imageView}>
          <Image source={{uri: HOST + cover}} style={styles.image} />
        </View>
        <View style={styles.bookDetail}>
          <Text style={styles.detail}>Author: {author}</Text>
          <Text style={styles.detail}>Volume: {volume}</Text>
          <Text style={styles.detail}>Number: {number}</Text>
          <Text style={styles.detail}>Release Date: {release_date}</Text>
          <Text style={styles.detail}>Price: ${price}</Text>
          {!cart.includes(id) ? (
            <TouchableOpacity style={styles.button} onPress={() => onPress()}>
              <View style={styles.addToCartContainer}>
                <View style={styles.icon}>
                  <Image
                    source={require('../../Images/cartIcon.png')}
                    style={styles.cartIcon}
                  />
                </View>
                <View>
                  <Text style={styles.buttonText}>Add to cart</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => onRemove()}>
              <Text style={styles.removeText}>Remove from cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default connect(
  (state, {id}) => ({
    ...selectors.getMagazine(state, id),
    cart: selectors.getMagazineCart(state),
  }),
  (dispatch, {id}) => ({
    onPress() {
      dispatch(cartActions.addToCart(id));
    },
    onRemove() {
      dispatch(cartActions.removeFromCart(id));
    },
  }),
)(magazine);

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
    fontSize: 20,
  },
});
