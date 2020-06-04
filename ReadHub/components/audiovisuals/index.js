import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import SearchForm from './searchForm';
import {ScrollView, View} from 'react-native';
import Equipment from './equipment';

const audiovisual = ({orderedEquipments}) => {
  return (
    <ScrollView>
      <SearchForm />
      {orderedEquipments.length > 0 && orderedEquipments !== undefined ? (
        <View>
          {orderedEquipments.map(id => (
            <Equipment key={id} id={id} />
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
    orderedEquipments : selectors.getOrderedEquipment(state)
  })
)(audiovisual);