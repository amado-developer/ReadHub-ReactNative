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

import {connect} from 'react-redux';
import {withRouter} from 'react-router-native';

const home = withRouter( props => {
  const {history} = props;
  return (
       <ScrollView >
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
                source={require('../../Images/prestarLibro.png')}
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

            <TouchableOpacity style={styles.button} onPress={()=>history.push("/loans")}>
                <Text style={styles.text}>
                    Book Loans
                 </Text>

                 <Image
                    style={styles.imageIcon}
                    source={require('../../Images/esta.png')}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.inputWrap}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=>{alert('you clicked me');}}>
              <Text style={styles.text3}>
                Solicitar Equipo
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
                    Comprar revistas
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
                source={require('../../Images/profile.jpeg')}
               />
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputWrap}>
            <TouchableOpacity style={styles.buttonRight} onPress={()=> history.push('/payment')}>
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

            

        </ScrollView>

  );
});

const mapStateToProps = state =>{
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(home);


const styles = StyleSheet.create({
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
    marginLeft: 0,
    marginBottom: 5,

  },
  text2:{
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,

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
    //backgroundColor: 'blue'
  },
  image: {
    width: 400,
    height: 100,
    //marginRight:500,
    //backgroundColor : 'blue'
  },
    container: {
    //backgroundColor: 'red',
    marginTop: 100,
    marginRight: 25,
    marginLeft: 15,
   // backgroundColor: 'red'
  },


});

