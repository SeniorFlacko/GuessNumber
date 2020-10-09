import React from 'react';
import {View, Button, Text, StyleSheet, TextInput} from 'react-native';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Seelect a Number</Text>
        <TextInput />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
  button: {},
});

export default StartGameScreen;
