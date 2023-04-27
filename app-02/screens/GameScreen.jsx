import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, FlatList, useWindowDimensions, ScrollView } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';

const generateRandomNumber = (min, max, exclude) => {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if(rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
}

let minBoundary = 1;
let maxBounary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([{ guess: initialGuess, id: 1 }]);
  const { width, height } = useWindowDimensions();

  const nextGuessHandler = (direction) => {
    if(
        (direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber)
      ) {
      Alert.alert("Don't Lie", "You know you are wrong...", [{ text: 'Sorry...', style: 'cancel' }])
      return;
    }
    if(direction === 'lower') {
      maxBounary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandNumber = generateRandomNumber(minBoundary, maxBounary, currentGuess);
    setCurrentGuess(newRandNumber);
    setGuessRounds(prevGuessRounds => [
      ...prevGuessRounds,
      {guess: newRandNumber, id: Math.random().toString()}
    ]);
  }
  
  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBounary = 100;
  }, []);

  const guessRoundsLength = guessRounds.length;

  let screenContent = (
    <>
      <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name='md-add' size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='md-remove' size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem 
                key={itemData.id}
                guessNumber={guessRoundsLength - itemData.index}
                guess={itemData.item.guess}
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View>
    </>
  );

  if(height < 400) {
    screenContent = (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList 
            data={guessRounds}
            renderItem={(itemData) => {
              return (
                <GuessLogItem 
                  key={itemData.id}
                  guessNumber={guessRoundsLength - itemData.index}
                  guess={itemData.item.guess}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <>
      {screenContent}
    </>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 12
    },
    listContainer: {
      flex: 1,
      paddingVertical: 16
    }
})