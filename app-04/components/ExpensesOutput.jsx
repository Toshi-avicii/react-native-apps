import { View, StyleSheet, Text } from 'react-native'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../utils/globalStyles';
import {useSelector} from 'react-redux';
import { recentExpenses } from '../utils/date';

export default function ExpensesOutput({ expensesPeriod, fallbackText, page }) {
  const dummyExpenses = useSelector(state => state.expenses.dummyExpenses);
  let content = <Text style={styles.infoText}>{fallbackText}</Text>
  const recExp = recentExpenses(dummyExpenses);

  if(dummyExpenses.length > 0 && page === 'all') {
    content = (
      <ExpensesList expenses={dummyExpenses} /> 
    )
  }

  if(dummyExpenses.length > 0 && page === 'recent') {
    content = (
        <ExpensesList expenses={recExp} /> 
    )
  }


  console.log(recExp);
  return (
    <View style={styles.container}>
      <ExpensesSummary 
        expenses={page === 'all' ? dummyExpenses : recExp}
        periodName={expensesPeriod} 
      />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
    marginVertical: 20
  }
})