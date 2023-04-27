import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#351401' },
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerActiveBackgroundColor: '#e4baa1',
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: 'white'
      }}>
        <Drawer.Screen 
          name="Categories" 
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name='list' size={size} color={color} />
            }
          }}
        />
        <Drawer.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name='star' size={size} color={color} />
            }
          }}
        />
      </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#351401' },
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen 
              name='Meals Categories' 
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name='Meals Overview' component={MealsOverviewScreen} />
            <Stack.Screen 
              name='Meal Detail Page' 
              component={MealDetailScreen} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
