import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './utils/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/IconButton';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigation() {
  return <BottomTab.Navigator screenOptions={({ navigation, route }) => ({
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({ tintColor }) => {
      return <IconButton color={tintColor} size={24} icon="add" onPress={() => {
        navigation.navigate('ManageExpense');
      }} />
    }
  })}>
    <BottomTab.Screen r
      name="RecentExpenses" 
      component={RecentExpenses} 
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent Expenses',
        tabBarIcon: ({ color, size }) => <Ionicons size={size} color={color} name='hourglass' />
      }}
    />
    <BottomTab.Screen 
      name="AllExpenses" 
      component={AllExpenses} 
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name='calendar' />
      }}
    />
  </BottomTab.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Provider store={store}>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: "white"
        }}>
          <Stack.Screen 
            name="BottomTabNavigation" 
            component={BottomTabNavigation} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='ManageExpense' 
            component={ManageExpenses}
          />
        </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
}