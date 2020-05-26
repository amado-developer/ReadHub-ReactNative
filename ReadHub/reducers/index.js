import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login, * as loginSelectors from './login';
import signup, * as signupSelectors from './signup';
import profilePicture, * as profilePictureSelectors from './profilePicture';
import profile, * as profileSelectors from './profile';
const reducer = combineReducers({
  login,
  signup,
  profilePicture,
  profile,
  form: formReducer,
});

export default reducer;

//LOGIN SELECTORS
export const getToken = state => loginSelectors.getToken(state.login);
export const getIsLogingIn = state => loginSelectors.getIsLogingIn(state.login);
export const getError = state => loginSelectors.getError(state.login);
export const isAuthenticated = state => getToken(state) != null;
export const getUserId = state => loginSelectors.getUserId(state.login);

//Signup SELECTORS
export const getRegister = state => signupSelectors.getRegister(state.signup);
export const getIsSignUp = state => signupSelectors.getIsSignUp(state.signup);
export const getErrorSignup = state =>
  signupSelectors.getErrorSignup(state.signup);

//Profile SELECTORS
export const getProfilePicture = state =>
  profilePictureSelectors.getPicture(state.profilePicture);
export const getIsAValidProfilePicture = state =>
  profilePictureSelectors.getIsValid(state.profilePicture);
export const getProfilePictureIsUploading = state =>
  profilePictureSelectors.getIsUploading(state.profilePicture);
export const getProfilePictureError = state =>
  profilePictureSelectors.getError(state.profilePicture);
export const getProfileInfo = state => profileSelectors.getInfo(state.profile);
export const getIsRetrieving = state => profileSelectors.getIsRetrieving(state.profile);
export const getProfileError = state => profileSelectors.getError(state.profile);
