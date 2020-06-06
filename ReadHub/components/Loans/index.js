import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity,StyleSheet,Image, ScrollView} from 'react-native';
import Loan from './loan';
import * as selectors from '../../reducers';
import {withRouter} from 'react-router-native';


const loans = withRouter( ({loanCollection, history}) =>{
    
    return(
        <ScrollView>
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
            {loanCollection.map
            (id => <Loan key={id} id={id} />)}


        </ScrollView>
    );
});

export default connect(
    state => ({
        loanCollection : selectors.getOrderedLoans(state),
    }),
    dispatch => ({

    }),
)(loans);


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
