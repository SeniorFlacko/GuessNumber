import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text>The game is Over!!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.resultContainer}>
          <Text>Number of rounds: {props.numberOfRounds}</Text>
          <Text>Number was: {props.selectedNumber} </Text>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    alignItems: 'center',
  },
});
export default GameOverScreen;
