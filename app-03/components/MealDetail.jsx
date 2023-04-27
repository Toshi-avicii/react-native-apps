import { View, Text, StyleSheet } from 'react-native'

export default function MealDetail({ duration, complexity, affordabilty }) {
  return (
    <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordabilty.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    
    detailItem: {
        padding: 8,
        fontSize: 14
    }
})