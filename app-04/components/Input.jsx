import { View, Text, TextInput, StyleSheet } from 'react-native'
import { GlobalStyles } from '../utils/globalStyles'

export default function Input({ label, textInputConfig, style }) {
  const { multiline } = textInputConfig;
  return (
    <View style={[styles.inputContainer, style && style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, multiline && styles.inputMultiline]} {...textInputConfig} />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    inputMultiline: {
        minHeight: 100,
        marginBottom: 6,
        textAlignVertical: 'top',
    }
})