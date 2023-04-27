import { View, Text, StyleSheet } from 'react-native'
import Colors from '../utils/colors'

export default function GuessLogItem({ guessNumber, guess }) {
  return (
    <View style={styles.guessItem}>
      <Text style={styles.guessRound}>#{guessNumber}</Text>
      <Text style={styles.guessNumber}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    guessItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.primary1,
        backgroundColor: Colors.secondary,
        padding: 8,
        marginVertical: 4
    },

    guessNumber: {
        color: Colors.primary1
    },
    guessRound: {
        color: Colors.primary1
    }
})