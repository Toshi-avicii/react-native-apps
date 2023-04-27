import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../utils/colors';

export default function GameOverScreen({ userNumber, roundsNumber, startNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300
  if(width < 380) {
    imageSize = 200;
  }

  if(height < 400) {
    imageSize = 100;
  }

  const imageStyles = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/success.png')} style={[styles.image, imageStyles]} />
        </View>
        <Text style={styles.gameOverText}>
            Your Phone needed
            <Text style={styles.text}> {roundsNumber}</Text> turns to Guess the number
            <Text style={styles.text}> {userNumber}</Text>
        </Text>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  )
}

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent:"center",
    alignItems: 'center',
    flexDirection: "column",
    padding: 24
  },  
  imageContainer: {
    elevation: 4,
    // width: deviceWidth < 380 ? 200 : 300,
    // height: deviceWidth < 380 ? 200 : 300,
    // borderRadius: 150,
    overflow: 'hidden',
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  gameOverText: {
    marginTop: 8,
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign:"center"
  },
  text: {
    color: Colors.primary1,
    fontWeight: 'bold'
  },

  btnContainer: {
    width: '100%'
  }
})