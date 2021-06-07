import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const MealDetailScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>
                meal deets screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default MealDetailScreen