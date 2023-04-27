import { useContext } from 'react'
import MealsList from '../components/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  const favoritesContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal => favoritesContext.ids.includes(meal.id));

  if(favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }

  return (
    <MealsList data={favoriteMeals} />
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
})