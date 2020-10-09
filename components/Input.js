import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 3,
    textAlign: 'center',
  },
});

export default Input;
