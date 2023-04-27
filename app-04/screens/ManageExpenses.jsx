import { View, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../utils/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { removeExpense, addExpense, updateExpense } from '../store/expensesSlice';
import ExpenseForm from '../components/ExpenseForm';

export default function ManageExpenses({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const dispatch = useDispatch();
  const allExpenses = useSelector(state => state.expenses.dummyExpenses);

  const founedExpense = allExpenses.find((expense) => {
    return expense.id === expenseId;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  const deleteHandler = () => {
    dispatch(removeExpense({
      id: expenseId
    }))
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm isEditing={isEditing} expenseId={expenseId} editingExpense={founedExpense} />
      
      {
        isEditing && <View style={styles.deleteContainer}>
          <IconButton 
            icon="trash"
            size={36}
            onPress={deleteHandler}
            color={GlobalStyles.colors.error500}
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2, 
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
  
})