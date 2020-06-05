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

const info = withRouter( props => {
    const {history} = props;
    const {dispatch} = props;
    return (
    
    <View>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => history.push('/home')}>
                <Image
                    source={require('../../Images/back_arrow.png')}
                    style={styles.backImage}
                 />
                </TouchableOpacity>
            
                <Image source={require('../../Images/logox2.png')} style={styles.logo} />
            </View>


            <View style={styles.container}>
                <Text style={styles.about}>About us</Text>
                <Image
                    source={require('../../Images/us.jpg')}
                    style = {styles.us}>
                </Image>

                <Text style={styles.creators}>
                    Creators
                </Text>
                <Text style={styles.text}>
                    Amado Garcia
                </Text>

                <Text style={styles.text}>
                    Sara Zavala
                </Text>

                <Text style={styles.read}>
                  READHUB S.A
                </Text>
            </View>


    </View>
      
    )})
const mapStateToProps = state =>{
    console.log(state);
    return state;
};
      
      export default connect(mapStateToProps)(info);

      const styles = StyleSheet.create({

        read:{
          marginTop: 80,
          fontFamily: 'Roboto-Thin',
          fontSize: 20,
          color: '#BCBBBB'


        },

        creators:{
          marginTop: 30,
          fontFamily: 'Roboto-Thin',
          fontSize: 25,
          color: 'black'

        },
          text:{
            fontFamily: 'Roboto',
            fontSize: 20,
            color: '#BCBBBB'

          },

        container:{
            marginTop: 50,
            alignItems: 'center',
        },

        about:{
            fontFamily: 'Roboto-Thin',
            fontSize: 40,
        },

        us:{
            width: 200,
            height: 200,
            marginTop: 20,
            borderRadius: 50

        },
        goBackButton: {
          alignItems: 'center',
          padding: 10,
          width: 150,
          borderRadius: 10,
          marginLeft: 10,
          width: 60,
          marginTop: 20,
        },
        
        logo: {
          width: 275,
          height: 100,
        },
      
        backImage: {
          width: 50,
          height: 40,
          
        },
      
        header: {
          marginTop: 100,
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
        },
      });