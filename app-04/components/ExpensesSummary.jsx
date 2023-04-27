import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../utils/globalStyles';

export default function ExpensesSummary({ expenses, periodName }) {
  const totalSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${totalSum.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500
  }
})