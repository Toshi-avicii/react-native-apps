import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetail from './MealDetail';

export default function MealItem({ title, imageUrl, duration, complexity, affordabilty, mealId }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Meal Detail Page', {
      mealId: mealId
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed && styles.buttonPressed} 
        onPress={handlePress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail 
          duration={duration}
          complexity={complexity}
          affordabilty={affordabilty}
        />
        
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4
  },  
  image: {
    width: '100%',
    height: 200
  },

  buttonPressed: {
    opacity: 0.5
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
})