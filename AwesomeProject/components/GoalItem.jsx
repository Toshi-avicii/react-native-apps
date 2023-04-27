import { StyleSheet, Text, Pressable } from "react-native"

function GoalItem({ text, deleteGoalHandler, id }) {
  return (
    <Pressable 
      onPress={deleteGoalHandler.bind(this, id)} 
      android_ripple={{ color: 'cornsilkblue' }}
      style={styles.goalText}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalText: {
    backgroundColor: '#AF99FF',
    marginVertical: 8,
    borderRadius: 4,
    padding: 8
  },
  text: {
    color: 'white'
  }
})