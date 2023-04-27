import { FlatList } from 'react-native'
import ExpenseItem from './ExpenseItem'

export default function ExpensesList({ expenses }) {

  const renderExpenseItem = (itemData) => {
    return <ExpenseItem 
      description={itemData.item.description} 
      amount={itemData.item.amount} 
      date={itemData.item.date} 
      id={itemData.item.id}
    />
  }
  return (
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
  )
}