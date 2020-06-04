import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as selectors from '../../reducers';



const magazine = ({digitalMagazine, pdfs}) => {
  let PDFURL = '';
  const {magazine} = digitalMagazine;
  if (pdfs !== null){
    const range = pdfs.pdf.length;
    for (let i = 0; i < range; i++) {
      if (pdfs.pdf[i].magazine === magazine.id) {
        PDFURL = pdfs.pdf[i].pdf;
        console.log(pdfs)
        break;
      }
  
    }

  }

  return (
    <View>
      <Text>
        <Text style={styles.title}>{"'name'"}</Text>
        <Text style={styles.detail}>Author: {'author'}</Text>
        <Text style={styles.detail}>Volume: {'volume'}</Text>
        <Text style={styles.detail}>release_date: {'release_date'}</Text>
        <Text style={styles.detail}>number: {'number'}</Text>

        <Text style={styles.detal}>{PDFURL}</Text>
      </Text>
    </View>
  );
};
export default connect((state, id) => ({
  digitalMagazine: selectors.getMagazineFromMagazineCollection(state, id),
  pdfs: selectors.getMagazinePDF(state),
}))(magazine);

const styles = StyleSheet.create({});



