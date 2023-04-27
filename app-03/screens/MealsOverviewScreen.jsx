import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const categoryMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: catTitle
    });
  }, [navigation, catId]);

  return (
    <MealsList 
      data={categoryMeals}
    />
  )
}

