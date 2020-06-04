import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import * as selectors from '../../reducers';
import * as actions from '../../actions/library';

const loan = ({loanData={}, onPressed}) =>{
    const {book} = loanData
    return(
        <View>
            <Text></Text>
            <TouchableOpacity onPress={() => onPressed()}>
                <Text>Return Book</Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect(
    (state, {id}) =>({
        loanData : selectors.getLoan(state, id),
    }),
    (dispatch, {id}) =>({
        onPressed(){
            dispatch(actions.startReturningBook(id));
        }
    })
)(loan);