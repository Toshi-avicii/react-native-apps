import { View, StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'

export default function RecentExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput 
        expensesPeriod="Last 7 Days" fallbackText="No recent expense found" page="recent" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})