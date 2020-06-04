import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import SearchForm from './searchForm';
import {ScrollView, View} from 'react-native';
import Book from './book';

const library = ({orderedBooks}) => {
  return (
    <ScrollView>
      <SearchForm />
      {orderedBooks.length > 0 && orderedBooks !== undefined ? (
        <View>
          {orderedBooks.map(id => (
            <Book key={id} id={id} />
          ))}
        </View>
      ) : (
        <View />
      )}
    </ScrollView>
  );
};

export default connect(
  state => ({
    orderedBooks : selectors.getOrderedPhysicalBooks(state)
  })
)(library);
