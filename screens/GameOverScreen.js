import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is Over!!</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')} style={styles.image} />
      </View>
      <Text>Number of rounds: {props.numberOfRounds}</Text>
      <Text>Number was: {props.selectedNumber} </Text>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default GameOverScreen;
