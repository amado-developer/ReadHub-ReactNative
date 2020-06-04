import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

const loans = () =>{
    return(
        <View>
            <Text>Book</Text>
            <TouchableOpacity>
                <Text>Return Book</Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect()(loans);