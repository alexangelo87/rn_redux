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
import {
  modificaEmail,
  modificaTexto,
  exampleReduxThunk,
} from '../actions/exampleActions';

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
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={texto => props.exampleReduxThunk(texto)}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.texto}</Text>
      </View>
      <View style={styles.textContainerReduxThunk}>
        <Text style={styles.text}>{props.textoReduxThunk}</Text>
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
  textContainer: {
    marginTop: 50,
    height: null,
    borderColor: 'purple',
    borderWidth: 5,
  },
  textContainerReduxThunk: {
    marginTop: 10,
    height: null,
    borderColor: 'yellow',
    borderWidth: 5,
  }
});

const mapStateToProps = state => {
  return {
    email: state.exampleReducer.email,
    senha: state.exampleReducer.senha,
    texto: state.exampleReducer.texto,
    textoReduxThunk: state.exampleReducer.textoReduxThunk,
  };
};

export default connect(mapStateToProps, {
  modificaEmail,
  modificaTexto,
  exampleReduxThunk,
})(Home);
