import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {withRouter} from 'react-router-native'
import * as selectors from '../../reducers';
import * as actions from '../../actions/payment';

const payment = withRouter(({history, cardInfo, onPress}) => {
    const {card_holder, card_number, exp_date} = cardInfo.info[0];
   console.log(cardInfo.info[0]);
    const [quantity, changeQuantity] = useState('');
    return(
        <View>
            <View>
                <Text>{card_holder}</Text>
                <Text>{card_number}</Text>
                <Text>{exp_date}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => history.push("/paymentForm")}>
                    <Text>Change payment option</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>Add Founds</Text>
                <TextInput 
                type='text' 
                placeholder=" 0" 
                keyboardType='number-pad'  
                value={quantity}
                onChangeText={(value) => changeQuantity(value)}
                style={{borderColor: 'black', borderWidth: 5}}
                />

                <TouchableOpacity onPress={() => onPress(quantity)}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});
export default connect(
    state => ({
        cardInfo: selectors.getPaymentOption(state),
    }),
    dispatch =>({
        onPress(quantity){
            dispatch(actions.startAddFounds(quantity));
        }
    })
)(payment);