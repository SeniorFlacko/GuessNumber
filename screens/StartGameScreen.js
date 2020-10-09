import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState();
  const [choosenValue, setChoosenValue] = useState();
  const [confirm, setConfirm] = useState();

  const enteredValueHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
  };

  const resetEnteredValueHandler = () => {
    setEnteredValue('');
    setConfirm(false);
    setChoosenValue(null);
  };

  const confirmHandler = () => {
    const selectedValue = enteredValue;
    if (isNaN(selectedValue) || selectedValue < 0 || selectedValue > 99) {
      return;
    }

    setConfirm(true);
    setChoosenValue(selectedValue);
    setEnteredValue('');
  };

  let confirmedComp;

  if (confirm) {
    confirmedComp = <Text>You have choose: {choosenValue}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={enteredValueHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetEnteredValueHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedComp}
      </View>
    </TouchableWithoutFeedback>
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
  button: {
    width: 100,
    maxWidth: 100,
  },
  input: {
    margin: 10,
    width: 50,
  },
});

export default StartGameScreen;
