import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {modificaEmail, modificaTexto} from '../actions/exampleActions';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <TouchableOpacity onPress={() => props.modificaEmail('vilminha@teste')}>
          <Icon name="rocket" size={23} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>{props.email}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={props.texto}
          onChangeText={texto => props.modificaTexto(texto)}
        />
      </View>
      <View styles={styles.containerText2}>
        <Text style={styles.text}>{props.texto}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 16,
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
  textInput: {
    borderColor: 'purple',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 3,
  },
  textInputContainer: {
    marginTop: 20,
  },
  containerText2: {
    flexDirection: 'row',
    padding: 16,
  },
});

const mapStateToProps = state => {
  return {
    email: state.exampleReducer.email,
    senha: state.exampleReducer.senha,
    texto: state.exampleReducer.texto,
  };
};

export default connect(mapStateToProps, {modificaEmail, modificaTexto})(Home);
