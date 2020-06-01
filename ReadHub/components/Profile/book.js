import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const book = () => {
  console.log('aqui ve');
  return (
    <View>
      <Text>
        <Text style={styles.title}>{"'name'"}</Text>
        <Text style={styles.detail}>Author: {'author'}</Text>
        <Text style={styles.detail}>Language: {'language'}</Text>
        <Text style={styles.detail}>Edition: {'edition'}</Text>
        <Text style={styles.detail}>Publisher: {'publisher'}la</Text>
        <Text style={styles.detail}>DOI: {'doi'}</Text>
        <Text style={styles.detail}>Release Date: {'release_date'}</Text>
      </Text>
    </View>
  );
};

export default connect()(book);

const styles = StyleSheet.create({});
