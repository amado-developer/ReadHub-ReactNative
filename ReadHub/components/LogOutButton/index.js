import React from 'react';
import {connect} from 'react-redux';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert,
  } from 'react-native';
import * as actions from '../../actions/logIn';
import {withRouter} from 'react-router-native'
const logOut =withRouter( ({onPress, history}) => {
    return(
        <View>
            <TouchableOpacity onPress={() => {
                onPress();
                history.push("/")
                }}>
                <Image source={require('../../Images/logout.png')} style={{width: 50, height: 50}}/>
            </TouchableOpacity>
        </View>
    )
});

export default connect(
    undefined,
    dispatch => ({
        onPress(){
            dispatch(actions.logout())
        }
    })
)(logOut);
