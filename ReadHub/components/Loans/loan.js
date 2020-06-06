import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/library';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {withRouter} from 'react-router-native';
const loan = withRouter(({loanData, onPressed, history}) =>{
    const {book} = loanData
    console.log(book);
    return(
        <View style={styles.container}>
            <Text style={styles.textId}>{book.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                Alert.alert('Returned!', 'Book Returned succesfuly!');
                history.push("/home");
                onPressed();
                }}>
                <Text style={styles.textButton}>Return Book</Text>
            </TouchableOpacity>
        </View>
    );
});

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
        backgroundColor: "#94D0FF",
        width: 100,
        height: 40,
    },

    textButton: {
        paddingLeft: 10,
        paddingTop: 10,
        color: '#51738C',
    },
});



