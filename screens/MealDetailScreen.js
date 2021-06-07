import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const MealDetailScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>
                meal deets screen
            </Text>
            <Button title="go back to categories" onPress={() => props.navigation.popToTop()}/>
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