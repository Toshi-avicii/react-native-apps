import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

function GoalInput({ setGoals, setShowAlert, showModal, setShowModal }) {
  const [enteredText, setEnteredText] = useState('');

  const catchText = (enteredText) => {
    setEnteredText(enteredText);
  }
    
  const goalHandler = () => {
    if(enteredText.length <= 2) {
        setShowAlert(true);
        return;
    }
    
      setGoals((prevGoals) => [
        ...prevGoals,
        {text: enteredText, id: Math.random().toString()}
      ]);
      setShowAlert(false);
      setEnteredText('');
      setShowModal(false);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
      <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <View style={styles.input}>
          <TextInput style={styles.addGoalInput} placeholder='add your goal' onChangeText={catchText} value={enteredText} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={goalHandler} color="#6B7FD7" /> 
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={closeModal} color="#E86A92" /> 
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4C2A85'
    },
    
    input: {  
      width: '90%',
      marginBottom: 16
    },

    addGoalInput: {
      borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 3,
        color: 'white'
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    button: {
      width: '30%',
      marginHorizontal: 8
    },

    image: {
      alignSelf: 'center',
      width: 300,
      height: 300
    }
})