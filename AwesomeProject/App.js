import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const deleteGoal = (id) => {
    setGoals(prevGoals => {
      return prevGoals.filter((goal) => {
        return goal.id !== id;
      });
    });
  }

  const modalHandler = () => {
    if(isModalVisible) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      { showAlert && <Text style={styles.alert}>Entered Goal must be greater than 2 characters</Text>}
      <Button title='Add Goal' onPress={modalHandler} color="#E26D5C" />
      <GoalInput showModal={isModalVisible} setShowModal={modalHandler} setGoals={setGoals} setShowAlert={setShowAlert} />
      <GoalList goals={goals} deleteGoal={deleteGoal} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    backgroundColor: '#4C2A85'
  },

  alert: {
    width: '100%',
    backgroundColor: 'firebrick',
    padding: 8,
    color: 'white'
  }
});
