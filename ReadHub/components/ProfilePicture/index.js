import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/profile';
import ImagePicker from 'react-native-image-picker';

const getProfilePicture = (onUpload, onError) => {
  const options = {
    title: 'Select Profile picture',
  };

  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      onError('The user cancelled');
    } else if (response.error) {
      onError(response.error);
    } else {
      // const source = {uri: response.uri};
      const source = {uri: 'data:image/jpeg;base64,' + response.data};
      console.log(typeof response.data);
      onUpload(response);
    }
  });
};

const profilePicture = ({onUpload, onError, picture}) => {
  // console.log(picture);
  // picture === null ? (imageSource = '') : (imageSource = profilePicture);
  return (
    <View style={styles.mainContainer}>
      <View>
        {picture === null ? (
          <Image style={styles.image} />
        ) : (
          <Image
            source={{
              uri: `http://10.0.2.2:8000${picture}`,
            }}
            style={styles.image}
          />
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            getProfilePicture(onUpload, onError);
          }}>
          <Text style={styles.buttonText}>Update Profile Picture</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <Text style={styles.text}> First Name </Text>
        <Text style={styles.text}> Last Name </Text>
        <Text style={styles.text}> Email </Text>
        <Text style={styles.text}> Age </Text>
        <Text style={styles.text}> Gender </Text>
        <Text style={styles.text}> Occupation </Text>
        <Text style={styles.text}> Address Line 1 </Text>
        <Text style={styles.text}> Address Line 2 </Text>
        <Text style={styles.text}> Phone number </Text>
        <Text style={styles.text}> Description </Text>
      </View> */}
    </View>
  );
};

// const mapStateToProps = state => {
//   return {
//     pricture: selectors.getProfilePicture(state),
//   };
// };
export default connect(
  state => ({
    picture: selectors.getProfilePicture(state),
  }),
  dispatch => ({
    onUpload(picture) {
      dispatch(actions.startUploadProfilePicture(picture));
    },
    onError(error) {
      dispatch(actions.failUploadProfilePicture(error));
    },
  }),
)(profilePicture);

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
    fontSize: 25,
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
