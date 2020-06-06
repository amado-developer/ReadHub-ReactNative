import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    View, 
    TouchableOpacity, 
    Text, TextInput,
    StyleSheet,Image, 
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
} 
from 'react-native';
import {withRouter} from 'react-router-native'
import * as selectors from '../../reducers';
import * as actions from '../../actions/payment';

const payment = withRouter(({history, cardInfo, onPress}) => {
    let card_holder = 'Card Holder:';
    let card_number = 'Card Number:';
    let exp_date = 'Exp Date:';


    if(cardInfo.info.length > 0){
        card_holder = cardInfo.info[0].card_holder;
        card_number = cardInfo.info[0].card_number;
        exp_date = cardInfo.info[0].exp_date;
    }
    const [quantity, changeQuantity] = useState('');
    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} style={styles.container} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <View style={styles.header}>
            <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => history.push('/home')}>
                <Image
                    source={require('../../Images/goBackButton.png')}
                    style={styles.backImage}/>
            </TouchableOpacity>
        
            <Image source={require('../../Images/logo.png')} style={styles.logo} />
        </View>
      
        
            <View style={{backgroundColor:'#D3F4FF', marginLeft:25, marginRight:25, 
            height:350, borderRadius:25, paddingTop:15}}>
                <View style={{ width: 325, height:60, marginLeft:15}}>
                
                <Text style={styles.info}>INFORMATION</Text>
                
                <Image
                    source={require('../../Images/paymentmethod.jpg')}
                    style={styles.paymentmethod} 
                    >
                </Image>
                </View>

                <Text style={styles.card_holder} > {card_holder}</Text>
                <Text style={styles.card_number}> {card_number}</Text>
                <Text style={styles.exp_date}> {exp_date}</Text>
                <TouchableOpacity onPress={() => history.push("/paymentForm")}
                style = {{backgroundColor:'#08B4FB',marginLeft:25,
                 marginRight:25, height:50, borderRadius:25,marginTop:20}}>

                    <Text style={styles.change}> Change payment option</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#F1D3FF', 
            marginLeft:25, marginRight:25, height:250, 
            borderRadius:25,  marginTop:10,}}>

                <View>
                <Text style={styles.AddFounds}> Add Founds</Text>
                <TextInput 
                type='text' 
                placeholder=" 0" 
                keyboardType='number-pad'  
                value={quantity}
                onChangeText={(value) => changeQuantity(value)}
                style={{borderColor: 'black', borderWidth: 1, margin: 15}}
                />

                <TouchableOpacity onPress={() =>{
                    changeQuantity('');
                    Alert.alert('Great!', 'Founds Added!')
                    onPress(quantity);
                }} 
                style={{backgroundColor: '#6B049B', 
                height:50, width:200,
                marginLeft: 75, borderRadius: 20, marginTop:15}}>

                    <Text style={styles.addbtn}>Add</Text>
                </TouchableOpacity>
            </View>
            </View>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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

const styles = StyleSheet.create({

    addbtn:{
        fontFamily: 'Roboto',
        fontSize: 30,
        marginTop: 5,
        marginLeft: 70,
        color: 'white',
        fontWeight: 'bold'
    },


    AddFounds:{
        marginLeft: 15,
        marginTop:30,
        fontFamily: 'Roboto-Thin',
        fontSize: 20,
    },

    info:{
        fontFamily: 'Roboto',
        fontSize: 20,
        marginLeft: 95,
        fontWeight: 'bold',
        textDecorationLine: 'underline',

    },

    change:{
        fontFamily: 'Roboto',
        fontSize: 22,
        marginLeft: 35,
        fontWeight: 'bold',
        marginTop:8,
        color: 'white'
    
    },


    paymentmethod:{
        height: '100%',
        width: '100%',
        paddingTop:80,
        marginTop:15
    },

    card_holder:{
        fontFamily: 'Roboto',
        fontSize: 20,
        marginLeft: 10,
        marginTop:90
    },
    card_number:{
        marginTop:5,
        fontFamily: 'Roboto',
        fontSize: 20,
        marginLeft: 10
    },
    exp_date:{
        marginTop:5,
        fontFamily: 'Roboto',
        fontSize: 20,
        marginLeft: 10
    },



    goBackButton: {
      alignItems: 'center',
      padding: 10,
      width: 150,
      borderRadius: 10,
      marginLeft: 10,
      width: 60,
      marginTop: 20,
    },
    
    logo: {
      width: 300,
      height: 100,
    },
  
    backImage: {
      width: 50,
      height: 40,
    },
  
    header: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },

    
  });
  