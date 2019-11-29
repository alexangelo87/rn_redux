import React from 'react';
import {StyleSheet, View, TouchableOpacity, Alert, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {modificaEmail} from '../actions/exampleActions';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <TouchableOpacity onPress={() => props.modificaEmail('vilma@teste')}>
          <Icon name="rocket" size={23} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>{props.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  containerText: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
});

const mapStateToProps = state => {
  return {
    email: state.exampleReducer.email,
    senha: state.exampleReducer.senha,
  };
};

export default connect(mapStateToProps, {modificaEmail},)(Home);
