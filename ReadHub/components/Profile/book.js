import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as selectors from '../../reducers';

const book = ({digitalBook, pdfs}) => {
  console.log(digitalBook.book.name);
  let PDFURL = '';
  const {book} = digitalBook;
  const range = pdfs.pdf.length;
  for (let i = 0; i < range; i++) {
    if (pdfs.pdf[i].book === book.id) {
      PDFURL = pdfs.pdf[i].pdf;
      break;
    }
  }

  return (
    <View>
      <Text>
        <Text style={styles.title}>{digitalBook.book.name}</Text>
        <Text style={styles.detail}>Author: {digitalBook.book.author}</Text>
        <Text style={styles.detal}>{PDFURL}</Text>
      </Text>
    </View>
  );
};
export default connect((state, {id}) => ({
  digitalBook: selectors.getBookFromCollection(state, id),
  pdfs: selectors.getBookPDF(state),
}))(book);

const styles = StyleSheet.create({});

//DJANGO => HACER LOS QUERIES (ACTION) 
//EN EL ESTADO (REDUCTORES => TYPES, ACTIONS)
// SAGAS -> llamadas al servidor como si fuera postman
// COMPONENTS
// MAP Y DISPATCH STATE TO PROPS 
// styles

