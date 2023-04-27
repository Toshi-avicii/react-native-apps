import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem';

export default function MealsList({ data }) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={(itemData) => {
          const { title, imageUrl, duration, affordability, complexity, id } = itemData.item;
          return (
            <MealItem 
              title={title}
              imageUrl={imageUrl}
              duration={duration}
              affordabilty={affordability}
              complexity={complexity}
              mealId={id}
            />
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})