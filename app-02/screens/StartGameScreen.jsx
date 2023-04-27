import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title';
import Colors from '../utils/colors';

export default function StartGameScreen({ onPicked }) {
  const [enteredText, setEnteredText] = useState('');
  const { width, height } = useWindowDimensions();

  function handleInput(enteredText) {
    setEnteredText(enteredText);
  }

  function resetInputHandler() {
    setEnteredText('');
  }

  function handleConfirm() {
    const chosenNumber = parseInt(enteredText);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert(
            'Entered Number is Invalid!',
            'Number must be between 1 and 99',
            [{ text: 'Okay', style: 'cancel', onPress: resetInputHandler }]
        );

        return;
    }
    onPicked(chosenNumber);
  }

  const screenMargin = height < 400 ? 20 : 75;

  return (
    <ScrollView>
        <KeyboardAvoidingView behavior='position'>
            <View style={{ marginTop: screenMargin }}>
                <Title>Guess My Number</Title>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.numberInput} 
                        maxLength={2} 
                        keyboardType="number-pad" 
                        autoCorrect={false}
                        value={enteredText}
                        onChangeText={handleInput}
                    />
                    <View style={styles.btnsContainer}>
                        <View style={[styles.btn, styles.leftBtn]}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.btn}>
                            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.primary3,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center'
    },

    numberInput: {
        height: 50,
        width: 50,
        borderBottomWidth: 2,
        borderBottomColor: Colors.secondary,
        color: Colors.secondary,
        fontSize: 32,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    btn: {
        flex: 1,
    },
    leftBtn: {
        marginRight: 6
    }
})

// to add shadow to ios devices, use "shadow" properties.