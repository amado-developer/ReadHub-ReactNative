import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import LoanEquipment from './return';
import * as selectors from '../../reducers';


const loans = ({loanCollectionEquipment}) =>{
    console.log(loanCollectionEquipment)
    return(
        <ScrollView>
            <Text></Text>

            {loanCollectionEquipment.map
            (id => <LoanEquipment key={id} id={id} />)}
        </ScrollView>
    );
};

export default connect(
    state => ({
        loanCollectionEquipment : selectors.getEquipmentOrderedLoans(state),

    }),
    dispatch => ({

    }),
)(loans);