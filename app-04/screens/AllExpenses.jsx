import { View, StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'

export default function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Total" fallbackText="No expenses found" page="all" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})