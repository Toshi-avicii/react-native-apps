import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../utils/colors'

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary,
        padding: deviceWidth < 380 ? 16 : 24,
        marginVertical: deviceWidth < 380 ? 16 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
      fontFamily: 'open-sans',
      color: Colors.secondary,
      fontSize: 36
    }
})