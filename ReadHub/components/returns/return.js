import React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import * as selectors from '../../reducers';
import * as actions from '../../actions/audiovisuals';
import {withRouter} from 'react-router-native';
const loanEquipment = withRouter(({LoanData={}, onPressed, history}) =>{
    const {equipment} = LoanData;

    return(
        <View style={styles.container}>
            <Text style={styles.textId}>Equipment id: {equipment.id}</Text>
            <Text style={styles.text}>Equipment: {equipment.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                onPressed();
                Alert.alert('Returned', 'Equipment Returned!');
                history.push("/home")
                }}>
                <Text style={styles.textButton}>Return Equipment</Text>
            </TouchableOpacity>
        </View>
    );
});

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

const styles = StyleSheet.create({
    container: {
        marginLeft: 100,
        marginBottom: 25,
        marginTop: 25,
        display: "flex",
        flexDirection: 'column',
        flexWrap: 'nowrap',
    },

    textId: {
        fontFamily: 'Book Antiqua',
        fontSize: 20,
        fontWeight: 'bold',
    },

    text: {
        fontFamily: 'Book Antiqua',
        fontSize: 20,
        marginTop: 10,
    },

    button: {
        borderRadius: 10,
        marginTop: 25,
        backgroundColor: "#7592FF",
        width: 100,
        height: 40,
    },

    textButton: {
        paddingLeft: 16,
        color: 'white'
    },
});



