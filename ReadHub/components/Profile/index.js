import React from 'react';
import {
  Image,

  View,
  Text,
  ImageBackground ,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import { Icon } from 'react-native-elements';
import * as actions from '../../actions/profile';
import ImagePicker from 'react-native-image-picker';
import ProfilePicture from './profilePicture';
const profile = ({info}) => {
  return (
    <ScrollView>
      <View >
        <View style= {styles.topBack}>
          <ImageBackground  
            source ={require('../../Images/min.jpg')}
            style = {{width: '100%', height: '100%'}}>
          </ImageBackground>
      
          <View style = {{position:'absolute'}}>
              <ProfilePicture />
          </View>
        </View>
      </View>
      
      
      <Text style={styles.name}>{info.first_name + ' ' + info.last_name} </Text>
      
      <View style={{paddingHorizontal: 40, flexDirection: "row", alignItems: "center"}}>
        <View style = {{marginTop:15}}>
          <Icon 
            size = {20}
            reverse
            name='mail'            
          />
        </View>

        <View style = {{}}>
          <Text style={styles.email}> {'Email: '} </Text>
        </View>
      </View>

      <Text style ={styles.email2}>{info.email}</Text>


      <View style={{paddingHorizontal: 40, flexDirection: "row", alignItems: "center"}}>
        <View style = {{marginTop:15}}>
          <Icon 
            size = {20}
            reverse
            name='face'            
          />
        </View>

          <View>
            <Text style={styles.age}>{'Age:'} </Text>
          </View>
        </View>
        <Text style={styles.age2}> {info.age} </Text>


        <View style={{paddingHorizontal: 40, flexDirection: "row", alignItems: "center"}}>
          <View style = {{marginTop:15}}>
          <Icon 
            size = {20}
            reverse
            name='wc'            
          />
          </View>

            <View>
              <Text style={styles.gender}> {'Gender:'} </Text>
            </View>
        </View>
        <Text style = {styles.gender2}>{info.gender}</Text>


      <View style={{paddingHorizontal: 40, flexDirection: "row", alignItems: "center"}}>
          <View style = {{marginTop:15}}>
            <Icon 
              size = {20}
              reverse
              name='work'            
            />
          </View>
          <View>
              <Text style={styles.occupation}> {'Occupation: ' } </Text>
          </View>
      </View>      
      <Text style = {styles.occupation2}>{info.occupation} </Text>

      <View style={{paddingHorizontal: 40, flexDirection: "row", alignItems: "center"}}>
          <View style = {{marginTop:15}}>
            <Icon 
                  size = {20}
                  reverse
                  name='directions'            
              />
          </View>
          
          <View>
              <Text style={styles.address}>{'Address Line: '} </Text>

          </View>
      </View>
      <Text style = {styles.addressx2}>{info.address_line_1}</Text>
      <Text style={styles.address2x2}>{info.address_line_2 === ' ' ? ' ' : info.address_line_2}</Text>



      <View style={{paddingHorizontal: 40, flexDirection: "row", alignItems: "center"}}>

      <View style = {{marginTop:15}}>
            <Icon 
                  size = {20}
                  reverse
                  name='phone'            
              />
          </View>

          <View>
              <Text style={styles.phone}> {'Phone: '} </Text>
          </View>
      </View>      
      <Text style = {styles.phone2}>{info.phone_number} </Text>


      <View style={{paddingHorizontal: 40, flexDirection: "row", alignItems: "center"}}>

      <View style = {{marginTop:15}}>
            <Icon 
                  size = {20}
                  reverse
                  name='description'            
              />
      </View>

      <View>
            <Text style={styles.description}> Description: {' ' } </Text>
      </View>



      </View>
      <Text style={styles.description2}> {info.description}</Text>
    </ScrollView>
  );
};

// const mapStateToProps = state => {
//   console.log(state);
//   return state;
// };
export default connect(state => ({
  info: selectors.getProfileInfo(state),
}))(profile);

const styles = StyleSheet.create({
  topBack:{
    backgroundColor: 'red',
    height: 290,

  },
  name:{
    marginTop: 10,
    marginLeft: 100,
    fontSize: 35,
    color: 'black',
    fontFamily: 'sans-serif-thin'

  },
  email:{
    marginTop: 15,
    fontFamily: 'Roboto',
    marginLeft: 0,
    fontSize: 20
  
  },
  email2:{
    marginTop: -15,
    fontFamily: 'Roboto-Thin',
    marginLeft: 100,
    fontSize: 20
  
  },
  age:{
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 20
  },
  age2:{
    marginTop: -10,
    fontFamily: 'Roboto-Thin',
    marginLeft: 105,
    fontSize: 20
  },
  gender:{
    marginTop: 20,
    fontFamily: 'Roboto',
    marginLeft: 0,
    fontSize: 20
  },
  gender2:{
    marginTop: -10,
    fontFamily: 'Roboto-Thin',
    marginLeft: 105,
    fontSize: 20
  },
  occupation:{
    marginTop:10,
    fontFamily: 'Roboto',
    marginLeft: 0,
    fontSize: 20
  },
  occupation2:{
    marginTop: -15,
    fontFamily: 'Roboto-Thin',
    marginLeft: 105,
    fontSize: 20
  },
  address:{
    marginTop: 20,
    fontFamily: 'Roboto',
    marginLeft: 0,
    fontSize: 20
  },
  addressx2:{
    marginTop: -15,
    fontFamily: 'Roboto-Thin',
    marginLeft: 105,
    fontSize: 20
  },
  address2:{
    fontFamily: 'Roboto',
    marginLeft: 105,
    fontSize: 20
  },
  address2x2:{
    fontFamily: 'Roboto-Thin',
    marginLeft: 105,
    fontSize: 20
  },
  phone:{
    marginTop: 0,
    fontFamily: 'Roboto',
    marginLeft: 0,
    fontSize: 20
  },
  phone2:{
    marginTop: -25,
    fontFamily: 'Roboto-Thin',
    marginLeft: 105,
    fontSize: 20
  },
  description:{
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 20

  },

  description2:{
    marginTop: -10,
    fontFamily: 'Roboto-Thin',
    marginLeft: 105,
    fontSize: 20,
    //marginTop: 25
  },

  mainContainer: {
    
    borderColor: 'black',
    borderStyle: 'solid',
    marginTop: '20%',
    marginLeft: '10%',
  },
  profileContainer: {},
  imageContainer: {},
  
  button: {
    backgroundColor: 'gray',
    width: 150,
    height: 50,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    paddingTop: 15,
  },
  image: {
    width: 200,
    height: 200,
  },
});
