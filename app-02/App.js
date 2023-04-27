import { useState, useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // prevent splash screen from hiding if the resources are not ready.

export default function App() {
  const [confirmedNumber, setConfirmedNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [gameRounds, setGameRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync(); // hide the splash screen cause fonts are ready to be used now.
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null; // return null if fonts are not loaded yet.
  }

  function pickedNumberHandler(pickedNumber) {
    setConfirmedNumber(pickedNumber);
    setGameIsOver(false);
  }
  
  let screen = <StartGameScreen onPicked={pickedNumberHandler} />;

  const gameOverHandler = (guessRoundsNumber) => {
    setGameIsOver(true);
    setGameRounds(guessRoundsNumber);
  }

  if(confirmedNumber) {
    screen = <GameScreen userNumber={confirmedNumber} onGameOver={gameOverHandler} />
  }

  const startNewGame = () => {
    setConfirmedNumber(null);
    setGameRounds(0);
  }

  if(gameIsOver && confirmedNumber) {
    screen = <GameOverScreen userNumber={confirmedNumber} roundsNumber={gameRounds} startNewGame={startNewGame} />
  }

  return (
    <LinearGradient 
      colors={['#72063c', '#ddb52f']}
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          { screen }    
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backgroundImage: {
    opacity: 0.15
  }
});
