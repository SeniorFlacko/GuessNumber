import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is Over!!</Text>
      <Text>Number of rounds: {props.numberOfRounds}</Text>
      <Text>Number was: {props.selectedNumber} </Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
});
export default GameOverScreen;
