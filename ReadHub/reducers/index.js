import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login, * as loginSelectors from './login';
import signup, * as signupSelectors from './signup';
import profilePicture, * as profilePictureSelectors from './profilePicture';
import profile, * as profileSelectors from './profile';
import digitalBooks, * as digitalBooksSelectors from './bookStore/digitalBooks';
import magazines, * as magazineSelectors from './magazineStore';
import bookCart, * as bookCartSelectors from './bookCart';
import magazineCart, * as magazineCartSelectors from './magazineCart/index';
import bookCollection, * as bookCollectionSelectors from './bookCollection';

const reducer = combineReducers({
  login,
  signup,
  profilePicture,
  profile,
  digitalBooks,
  magazines,
  bookCart,
  magazineCart,
  bookCollection,
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
export const getIsRetrieving = state =>
  profileSelectors.getIsRetrieving(state.profile);
export const getProfileError = state =>
  profileSelectors.getError(state.profile);

//Digital books SELECTORS
export const getDigitalBook = (state, id) =>
  digitalBooksSelectors.getDigitalBook(state.digitalBooks, id);
export const getDigitalBooks = state =>
  digitalBooksSelectors.getDigitalBooks(state.digitalBooks);
export const isFetchingDigitalBooks = state =>
  digitalBooksSelectors.isFetchingDigitalBooks(state.digitalBooks);
export const getDigitalBooksError = state =>
  digitalBooksSelectors.getError(state.digitalBooks);

export const getOrderedBooks = state =>
  digitalBooksSelectors.getOrderedBooks(state.digitalBooks);

//Book Cart SELECTORS
export const getCart = state => bookCartSelectors.getCart(state.bookCart);

//Magazines SELECTORS
export const getMagazine = (state, id) =>
  magazineSelectors.getMagazine(state.magazines, id);
export const getMagazines = state =>
  magazineSelectors.getMagazines(state.magazines);
export const isFetchingMagazines = state =>
  magazineSelectors.isFetchingMagazines(state.magazines);
export const getMagazinesError = state =>
  magazineSelectors.getError(state.magazines);

export const getMagazinesCollection = state =>
  magazineSelectors.getMagazineCollection(state.magazines);

export const getOrderedMagazines = state =>
  magazineSelectors.getOrderedMagazines(state.magazines);

//Magaine Cart SELECTORS
export const getMagazineCart = state =>
  magazineCartSelectors.getCart(state.magazineCart);

//Book Collection SELECTORS
export const getBookFromCollection = (state, id) =>
  bookCollectionSelectors.getDigitalBook(state.bookCollection, id);
export const getCollection = state =>
  bookCollectionSelectors.getDigitalBooks(state.bookCollection);
export const isFetchingCollection = state =>
  bookCollectionSelectors.isFetchingDigitalBooks(state.bookCollection);
export const getCollectionError = state =>
  bookCollectionSelectors.getError(state.bookCollection);
export const getOrderedBooksFromCollection = state =>
  bookCollectionSelectors.getOrderedBooks(state.bookCollection);

export const isBookCollectionButtonPressed = state =>
  bookCollectionSelectors.getIsButtonPressed(state.bookCollection);
