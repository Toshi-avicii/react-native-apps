import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'
// import { useNavigation } from '@react-navigation/native';

export default function CategoryTile({ title, color, onPress }) {
  // const navigation = useNavigation();

  // const navigateHandler = () => {
  //   navigation.navigate('Meals Overview')
  // }

  return (
    <View style={styles.gridItem}>
      <Pressable 
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} 
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
      overflow: Platform.OS === 'android' ? "hidden" : "visible",
      flex: 1,
      margin: 16,
      elevation: 4,
      height: 150,
      borderRadius: 8,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 8
  },

  button: {
    flex: 1
  },

  buttonPressed: {
    opacity: 0.5
  },

  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})