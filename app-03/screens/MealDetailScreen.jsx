import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import HeaderIconBtn from '../components/HeaderIconBtn';
import MealDetail from '../components/MealDetail';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const foundedMeal = MEALS.find((meal) => meal.id === mealId);
  const favoritesContext = useContext(FavoritesContext);

  const mealIsFavorite = favoritesContext.ids.includes(mealId);

  const headerBtnPressedHandler = () => {
    if(mealIsFavorite) {
      favoritesContext.removeFavorite(mealId);
    } else {
      favoritesContext.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return <HeaderIconBtn 
                icon={ mealIsFavorite ? 'star' : 'star-outline' } 
                color="white" 
                onPress={headerBtnPressedHandler} 
              />
      }
    });
  }, [navigation, headerBtnPressedHandler]);


  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: foundedMeal.imageUrl }} />
      <Text style={styles.title}>{foundedMeal.title}</Text>
      <MealDetail 
        duration={foundedMeal.duration}
        affordabilty={foundedMeal.affordability}
        complexity={foundedMeal.complexity}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Ingredients</Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          {
            foundedMeal.ingredients.map((ingredient, index) => (
              <Text key={index} style={styles.listItem}>{ingredient}</Text>
            ))
          }
        </View>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Steps</Text>
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          {
            foundedMeal.steps.map((step, index) => (
                <Text key={index} style={styles.listItem}>{step}</Text>
            ))
          }
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16
  },

  image: {
    width: '100%',
    height: 250
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8
  },

  heading: {
    color: '#e2b297',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 6
  },

  headingContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#e2b297',
    marginHorizontal: 30
  },

  listOuterContainer: {
    width: '100%',
    alignItems: "center"
  },

  listContainer: {
    width: '80%',
  },  

  listItem: {
    backgroundColor: '#e3a638',
    marginVertical: 6,
    padding: 8,
    borderRadius: 4,
    color: 'white'
  }
})