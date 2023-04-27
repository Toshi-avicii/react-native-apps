import { FlatList } from 'react-native';
import CategoryTile from '../components/CategoryTile';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen({ navigation }) {

  function renderCategoryItem(itemData) {
    function navigationHandler() {
      navigation.navigate('Meals Overview', {
        categoryId: itemData.item.id
      });
    }

    return (
      <CategoryTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={navigationHandler}
      />
    ) 
      
  }
  return (
    <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
  )
}

