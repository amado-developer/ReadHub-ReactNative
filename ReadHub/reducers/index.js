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
import magazineCollection, * as magazineCollectionSelectors from './magazineCollection';
import payment, * as paymentOptionSelectors from './payment';
import library, * as librarySelectors from './library';
import bookLoanCart, * as bookLoanCartSelectors from './bookLoanCart';
import loans, * as loansSelectors from './loans';
import audiovisual, * as audiovisualSelectors from './audiovisuals';
import equipmentLoanCart, * as equipmentLoanCartSelectors from './equipmentLoanCart'
import EquipmentLoans,* as equipmentLoansSelectors from './equipment-loans'

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
  magazineCollection,
  payment,
  library,
  bookLoanCart,
  loans,
  audiovisual,
  equipmentLoanCart,
  EquipmentLoans,
  form: formReducer,
});

export default reducer;

//LOGIN SELECTORS
export const getToken = state => loginSelectors.getToken(state.login);
export const getIsLogingIn = state => loginSelectors.getIsLogingIn(state.login);
export const getError = state => loginSelectors.getError(state.login);
export const isAuthenticated = state => getToken(state) != null;
export const getUserId = state => loginSelectors.getUserId(state.login);
export const getIsRefreshingToken = state => loginSelectors.getIsRefreshingToken(state.login);
export const getRefreshingError = state => loginSelectors.getRefreshingError(state.login);
export const getAuthExpiration = state => loginSelectors.getAuthExpiration(state.login);
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
export const buy = (state, amount) => 
  profileSelectors.buy(state.profile, amount);
export const addFounds = (state, amount) => 
  profileSelectors.addFounds(state.profile, amount);

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

//Magazine Cart SELECTORS
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

export const getBookPDF = state =>
  bookCollectionSelectors.getPDF(state.bookCollection);


  //Magazine Collection SELECTORS
  export const getMagazineFromMagazineCollection = (state, id) =>
  magazineCollectionSelectors.getMagazine(state.magazineCollection, id);
export const getMagazineCollection = state =>
  magazineCollectionSelectors.getMagazines(state.magazineCollection);
export const isFetchingMagazineCollection = state =>
  magazineCollectionSelectors.isFetchingMagazines(state.magazineCollection);
export const getMagazineCollectionError = state =>
  magazineCollectionSelectors.getError(state.magazineCollection);
export const getOrderedMagazinesFromCollection = state =>
  magazineCollectionSelectors.getOrderedMagazines(state.magazineCollection);

export const isMagazineCollectionButtonPressed = state =>
  magazineCollectionSelectors.getIsButtonPressed(state.magazineCollection);

export const getMagazinePDF = state =>
  magazineCollectionSelectors.getPDF(state.magazineCollection);


  //Payment SELECTORS
  export const getPaymentOption  = state =>
  paymentOptionSelectors.getPaymentOption(state.payment);

  export const isFecthingPaymentOption = state =>
  paymentOptionSelectors.getPaymentOption(state.payment);

  export const getPaymentOptionError = state =>
  paymentOptionSelectors.getError(state.payment);

  //Library SELECTORS
  export const getBooks = state => 
  librarySelectors.getBooks(state.library);

  export const getBook = (state, id) =>
  librarySelectors.getBook(state.library, id);

  export const getOrderedPhysicalBooks = state =>
  librarySelectors.getOrderedBooks(state.library);

  export const isFetchingPhysicalBook = state =>
  librarySelectors.getIsFetching(state.library);

  export const bookError = state =>
  librarySelectors.getError(state.library);

  //Library cart SELECTORS
  export const getBookLoanCart = state => bookLoanCartSelectors.getCart(state.bookLoanCart);  

  //loans SELECTORS
  export const getLoan = (state, id) => loansSelectors.getLoan(state.loans, id);
  export const getLoans = state => loansSelectors.getLoans(state.loans);
  export const getOrderedLoans = state => loansSelectors.getOrderedLoans(state.loans);
  export const isFetchingLoans = state => loansSelectors.getIsFetching(state.loans);
  export const getLoansError = state => loansSelectors.getError(state.loans);

//Audiovisual SELECTORS
export const getEquipments = state => 
audiovisualSelectors.getEquipments(state.audiovisual);

export const getEquipment = (state, id) =>
audiovisualSelectors.getEquipment(state.audiovisual, id);

export const getOrderedEquipment = state =>
audiovisualSelectors.getOrderedEquipment(state.audiovisual);

export const getIsFetchingAudiovisuals = state =>
audiovisualSelectors.getIsFetching(state.audiovisual);

export const getErrorAudiovisuals = state =>
audiovisualSelectors.getError(state.audiovisual);

 //Library LOAN cart SELECTORS
 export const getEquipmentLoanCart = state => equipmentLoanCartSelectors.getEquipmentCart(state.equipmentLoanCart);  

 //equipmetn loans selectors
 export const getEquipmentLoan = (state, id) => equipmentLoansSelectors.getEquipmentLoan(state.EquipmentLoans, id);
 export const getEquipmentLoans = state => equipmentLoansSelectors.getEquipmentLoans(state.EquipmentLoans);
 export const getEquipmentOrderedLoans = state => equipmentLoansSelectors.getOrderedEquipmentLoans(state.EquipmentLoans);
 export const isFetchingEquipmentLoans = state => equipmentLoansSelectors.getIsFetchingEquipment(state.EquipmentLoans);
 export const getEquipmentLoansError = state => equipmentLoansSelectors.getErrorEquipmentLoan(state.EquipmentLoans);
 