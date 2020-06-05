/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as actions  from '../../actions/library';
import * as audioActions from '../../actions/audiovisuals';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-native';
import Logout from '../LogOutButton';
const home = withRouter( props => {
  const {history} = props;
  const {dispatch} = props;
  return (
       <ScrollView style={{backgroundColor: '#F0F0F0'}} >
         <View style={styles.logout}>
            <Logout />


         </View>
         
          <View  style={styles.container} >
            <Image
              style={styles.image}
              source={require('../../Images/logo.png')}
            />
          </View>

          <View
            style={{
              flex: 1,
              //flexDirection: 'row',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-start',
              height: 250,
              //backgroundColor:'red'
            }}>
            <View style={styles.inputWrap}>

            <TouchableOpacity style={styles.button} onPress={()=> history.push('/books')}>
                <Text style={styles.text}>
                    Buy Books
                 </Text>

                 <Image
                    style={styles.imageIcon}
                    source={require('../../Images/Comprar.png')}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.inputWrap}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=> history.push("/library")}>
              <Text style={styles.text2}>
                Library
              </Text>
               <Image
                style={styles.imageIconRight}
                source={require('../../Images/libraryother.png')}
               />
            </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              //flexDirection: 'row',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-start',
              height: 250,
              //backgroundColor:'red'
            }}>
            <View style={styles.inputWrap}>

            <TouchableOpacity style={styles.button} onPress={()=>{
              dispatch(actions.startFetchingLoans());
              history.push("/loans")
              }}>
                <Text style={styles.text}>
                    Book Loans
                 </Text>

                 <Image
                    style={styles.imageIcon}
                    source={require('../../Images/loanbook.png')}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.inputWrap}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=> history.push('/audiovisuals')}>
              <Text style={styles.text3}>
                Request equipment
              </Text>
               <Image
                style={styles.imageIconRight}
                source={require('../../Images/images.png')}
               />
            </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              //flexDirection: 'row',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-start',
              height: 250,
              //backgroundColor:'red'
            }}>
            <View style={styles.inputWrap}>

            <TouchableOpacity style={styles.button} onPress={()=>history.push('/magazines')}>
                <Text style={styles.text}>
                    Buy Magazines
                 </Text>

                 <Image
                    style={styles.imageIconMagazine}
                    source={require('../../Images/magazine.png')}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.inputWrap}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=> history.push('/profile')}>
              <Text style={styles.text2}>
                Profile
              </Text>
               <Image
                style={styles.imageIconRight}
                source={require('../../Images/profile.jpg')}
               />
            </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-start',
              height: 300,
            }}>

          <View style={styles.inputWrap}>
            <TouchableOpacity style={styles.buttonRight} 
            onPress={()=> history.push('/payment')}>
              <Text style={styles.text2}>
                Payment
              </Text>
               <Image
                style={styles.imageIconRight}
                source={require('../../Images/payments.jpg')}
                resizeMode='contain'
               />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrap}>
          <TouchableOpacity style={styles.buttonRight} onPress={()=> {
              dispatch(audioActions.startFetchingEquipmentLoans());
              history.push('/returns');
             
              }}>
              <Text style={styles.text2}>
                Returns
              </Text>
               <Image
                style={styles.returnBtn}
                source={require('../../Images/return.png')}
                resizeMode='contain'
               />
            </TouchableOpacity>

          </View>
          </View>

        </ScrollView>

  );
});

const mapStateToProps = state =>{
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(home);


const styles = StyleSheet.create({

  returnBtn:{
    height: 125,
    width: 125,
    marginTop:10,
    marginLeft: 25,

  },

  logout:{
    height:55, width: 60,
     marginLeft:340,
      marginTop:20
  },

  buttonRight:{
    height: 250,
    width: 160,
    marginTop:40,
    marginLeft: 5,
  },
  imageIconMagazine:{
    height:150,
    width: 150,
    borderRadius: 20,
    marginLeft: 5,

  },

  inputWrap: {
    flex: 1,
    flexDirection: 'column',
  },

  imageIconRight:{
    height:150,
    width: 150,
    marginTop: 5,
    marginLeft: 15,
    borderRadius: 50,
  },
  text:{
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,

  },
  text2:{
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 50,

  },
  text3:{
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    textAlign: 'center',

  },


  imageIcon:{
    height:150,
    width: 150,
    borderRadius: 45,
  },

  button: {
    height:155,
    width: 160,
    marginTop: 50,
    marginLeft: 25,
    
  },
  image: {
    width: 400,
    height: 100,

  },
    container: {
    //backgroundColor: 'red',
    marginTop: 10,
    marginRight: 25,
    marginLeft: 15,
  
  },


});
