import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '../utils/colors';

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        android_ripple={{ color: Colors.primary2 }} 
        style={({ pressed }) => pressed ? [styles.pressed, styles.buttonContainer] : styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginVertical: 8,
    elevation: 2,
    backgroundColor: Colors.primary1,
    borderRadius: 28,
    overflow: 'hidden'
  },

  buttonContainer: {
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },

  buttonText: {
    textAlign: 'center',
    color: 'white'
  },

  // for ios only
  pressed: {
    opacity: 0.5
  }
})