/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App: () => React$Node = () => {
  const [numberSelected, setNumberSelected] = useState();

  const numberSelectedHandler = (choosenNumber) => {
    setNumberSelected(choosenNumber);
  };

  let content = <StartGameScreen onChoosenNumber={numberSelectedHandler} />;

  if (numberSelected) {
    content = <GameScreen userChoice={numberSelected} />;
  }

  return (
    <View styles={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
