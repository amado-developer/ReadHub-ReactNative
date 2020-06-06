import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import * as selectors from '../../reducers';
import * as actions from '../../actions/audiovisuals';

const loanEquipment = ({LoanData={}, onPressed}) =>{
    const {equipment} = LoanData;
    return(
        <View>
            <Text>{equipment.id}</Text>
            <Text>{equipment.name}</Text>
            <TouchableOpacity onPress={() => onPressed()}>
                <Text>Return Equipment</Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect(
    (state, {id}) =>({
        LoanData : selectors.getEquipmentLoan(state, id),
    }),
    (dispatch, {id}) =>({
        onPressed(){
            dispatch(actions.startReturningEquipment(id));
        }
    })
)(loanEquipment);

