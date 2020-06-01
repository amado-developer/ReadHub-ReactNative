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
      onUpload(response);
    }
  });
};

const profilePicture = ({onUpload, onError, info}) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        {info.profile_picture === null ? (
          <Image
            style={styles.image}
            source={require('../../assets/default-picture.png')}
          />
        ) : (
          <Image
            source={{
              uri: info.profile_picture,
              // uri: `http://10.0.2.2:8000${picture}`,
            }}
            resizeMode="cover"
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
    info: selectors.getProfileInfo(state),
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
    alignItems: 'center',
    borderStyle: 'solid',
    marginTop: '15%',
    marginLeft: '31%',
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
    height: 40,
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
  },

  buttonText: {
    color: 'white',
    paddingTop: 10,
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 80,
  },
});
