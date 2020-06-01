import React from 'react';
import StarRating from 'react-native-star-rating';
import {View} from 'react-native';
import {connect} from 'react-redux';

// const WATER_IMAGE = require('./water.png');
const test = () => {
  return (
    <View>
      <StarRating disabled={false} maxStars={5} rating={4} />
    </View>
  );
};

export default connect()(test);
