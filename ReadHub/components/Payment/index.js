import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {withRouter} from 'react-router-native'
import * as selectors from '../../reducers';
import * as actions from '../../actions/payment';

const payment = withRouter(({history, cardInfo, onPress}) => {
    let card_holder = 'Card Holder';
    let card_number = 'Card Number';
    let exp_date = 'Exp Date';
    console.log('la card: ' + cardInfo.info)

    if(cardInfo.info.length > 0){
        card_holder = cardInfo.info[0].card_holder;
        card_number = cardInfo.info[0].card_number;
        exp_date = cardInfo.info[0].exp_date;
    }
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