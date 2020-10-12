import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, ScrollView} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.round(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const renderListItem = (value, numOfRound) => {
  return (
    <View key={value} style={styles.listItemContainer}>
      <Text style={styles.listItem}>#{numOfRound}</Text>
      <Text style={styles.listItem}>{value}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice, onGameOver} = props;

  useEffect(() => {
    if (currentGuess == props.userChoice) {
      props.onGameOver(pastGuesses.length);
      setPastGuesses([]);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Dont Lie!!', 'You know that this is wrong', [
        {text: 'Sorry', style: 'cancel'},
      ]);

      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );

    setCurrentGuess(nextNumber);
    setPastGuesses((cuurentPassGuesses) => [nextNumber, ...cuurentPassGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          onPress={() => {
            nextGuessHandler('lower');
          }}>
          LOWER
        </MainButton>
        <MainButton
          onPress={() => {
            nextGuessHandler('greater');
          }}>
          GREATER
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index),
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  listContainer: {
    width: '60%',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemContainer: {
    flexDirection: 'row',
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  listItem: {
    marginHorizontal: 4,
  },
});

export default GameScreen;
