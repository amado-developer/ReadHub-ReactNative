import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import SearchForm from './searchForm';
import {ScrollView, View} from 'react-native';
import Book from './digitalBook';

const bookStore = ({digitalBooks}) => {
  return (
    <ScrollView>
      <SearchForm />
      {digitalBooks.length > 0 ? (
        <View>
          {digitalBooks.map(id => (
            <Book key={id} id={id} />
          ))}
        </View>
      ) : (
        <View />
      )}
    </ScrollView>
  );
};

export default connect(state => ({
  digitalBooks: selectors.getOrderedBooks(state),
}))(bookStore);
