import { View, Text, FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

function GoalList({ goals, deleteGoal }) {
  return (
    <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        {/* <ScrollView fadingEdgeLength={5}>
          {
            goals.length > 0 && goals.map((goal, index) => {
              return (
                <Text key={index} style={styles.goalText}>{goal}</Text>
              )
            })
          }
        </ScrollView> */}

        <FlatList 
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                deleteGoalHandler={deleteGoal} 
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
  )
}

export default GoalList

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 6
    },
})