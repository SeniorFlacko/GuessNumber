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
import GameOverScreen from './screens/GameOverScreen';

const App: () => React$Node = () => {
  const [numberSelected, setNumberSelected] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const numberSelectedHandler = (choosenNumber) => {
    setNumberSelected(choosenNumber);
    setNumberOfRounds(0);
  };

  const gameOverHandler = (roundsNumber) => {
    setNumberOfRounds(roundsNumber);
  };

  const restartHandler = () => {
    setNumberOfRounds(0);
    setNumberSelected(null);
  };

  let content = <StartGameScreen onChoosenNumber={numberSelectedHandler} />;

  if (numberSelected && numberOfRounds <= 0) {
    content = (
      <GameScreen userChoice={numberSelected} onGameOver={gameOverHandler} />
    );
  } else if (numberOfRounds > 0) {
    content = (
      <GameOverScreen
        numberOfRounds={numberOfRounds}
        selectedNumber={numberSelected}
        onRestart={restartHandler}
      />
    );
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
