import { Text, StyleSheet } from 'react-native'
import Colors from '../utils/colors'

export default function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'open-sans',
      fontSize: 24,
      padding: 12,
      textAlign: 'center',
      fontWeight: 'bold',
      marginVertical: 12,
      borderColor: Colors.secondary,
      borderWidth: 2,
      color: Colors.secondary,
    }
})