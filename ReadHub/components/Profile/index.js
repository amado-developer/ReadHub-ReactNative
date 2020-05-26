import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/profile';
import ImagePicker from 'react-native-image-picker';
import ProfilePicture from './profilePicture';
const profile = ({info}) => {
  return (
    <ScrollView>
      <ProfilePicture />
      <Text style={styles.text}>{info.first_name + ' ' + info.last_name} </Text>
      <Text style={styles.text}> {'Email: ' + info.email} </Text>
      <Text style={styles.text}> {'Age: ' + info.age} </Text>
      <Text style={styles.text}> {'Gender: ' + info.gender} </Text>
      <Text style={styles.text}> {'Occupation: ' + info.occupation} </Text>
      <Text style={styles.text}>{'Address Line: ' + info.address_line_1} </Text>
      <Text style={styles.text}>
        {info.address_line_2 === ' ' ? ' ' : info.address_line_2}
      </Text>
      <Text style={styles.text}> {'Phone: ' + info.phone_number} </Text>
      <Text style={styles.text}> Description: {' ' + info.description} </Text>
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
  mainContainer: {
    borderColor: 'black',
    borderStyle: 'solid',
    marginTop: '20%',
    marginLeft: '10%',
  },
  profileContainer: {},
  imageContainer: {},
  text: {
    color: '#010F78',
    fontFamily: 'Roboto-Thin',
    fontSize: 50,
  },
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
