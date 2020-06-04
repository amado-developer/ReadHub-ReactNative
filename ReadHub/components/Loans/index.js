import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import Loan from './loan';
import * as selectors from '../../reducers';
const loans = ({loanCollection}) =>{
    return(
        <ScrollView>
            {loanCollection.map
            (id => <Loan key={id} id={id} />)}
        </ScrollView>
    );
};

export default connect(
    state => ({
        loanCollection : selectors.getOrderedLoans(state),
    }),
    dispatch => ({

    }),
)(loans);