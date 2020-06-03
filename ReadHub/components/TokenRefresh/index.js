import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import * as selectors from '../../reducers';
import * as actions from '../../actions/logIn';

const TokenRefresh = ({ onRefresh, reviewTime = 10000, isAuth }) => {
    if(isAuth){
    useEffect(
      () => {
        const interval = setInterval(onRefresh, reviewTime);
        return () => {
          clearInterval(interval);
        };
      },
      []
    );
    }
    return null;
  };

export default connect(
  state => ({
      isAuth : selectors.isAuthenticated(state),
  }),
  dispatch => ({
    onRefresh() {
      dispatch(actions.startTokenRefresh());
    },
  }),
)(TokenRefresh);