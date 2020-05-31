import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../../reducers';
import SearchForm from './searchForm';
import { ScrollView, View } from 'react-native';
import Magazine from './magazine';

const magazineStore = ({magazines}) =>{
    return (
    <ScrollView>
    <SearchForm />
    {magazines.order.length > 0 ? (<View>
        {magazines.order.map(id => (
        <Magazine key={id} id={id} />
        ))}
    </View>) : (<View></View>)}
    
    </ScrollView>
    )
}

const mapStateToProps = state =>{
    console.log(state);
    return state;
}
export default connect(mapStateToProps
// state => ({
//     magazines: selectors.getOrderedMagazines(state),
// })
)(magazineStore);




