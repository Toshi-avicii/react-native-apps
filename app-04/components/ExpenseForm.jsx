import { View, StyleSheet, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { addExpense, updateExpense } from '../store/expensesSlice';
import { convertToDate } from '../utils/date';


export default function ExpenseForm({ isEditing, expenseId, editingExpense }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    const [inputValues, setInputValues] = useState({
      amount: isEditing ? editingExpense?.amount.toString() : '',
      date: isEditing ? convertToDate(editingExpense?.date) : '',
      description: isEditing ? editingExpense?.description : ''
    });

    const inputChangeHandler = (inputIdentifier, enteredInput) => {
        setInputValues((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: enteredInput
            }
        })
    }

  const cancelHandler = () => {
    navigation.goBack();
  }

  const confirmHandler = () => {
    if(inputValues.amount.length === 0) {
      Alert.alert('Please Enter an amount');
      return;
    }

    if(isNaN(+inputValues.amount)) {
      Alert.alert('Amount is not a valid number');
      return;
    }

    if(inputValues.description.length === 0) {
      Alert.alert('Please enter a description for the expense');
      return;
    }



    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date).getTime() / 1000,
      description: inputValues.description
    }

    if(isEditing) {

      dispatch(updateExpense({
        id: expenseId,
        ...expenseData
      }))
    } else {
      dispatch(addExpense(expenseData))
    }
    navigation.goBack();
  }
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
            <Input 
                label="Amount" 
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValues.amount
                }}
                style={{
                    flex: 1
                }}
            />
            <Input 
                label="Date" 
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 20,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValues.date
                }} 

                style={{
                    flex: 1
                }}
            />
        </View>
      <Input 
        label="Description"
        textInputConfig={{
            multiline: true,
            value: inputValues.description,
            onChangeText: inputChangeHandler.bind(this, 'description')
        }} 
      />
      <View style={styles.buttons}>
        <CustomButton style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      button: {
        minWidth: 120,
        marginHorizontal: 8
      }
})