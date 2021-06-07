import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const MealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>
                meal screen
            </Text>
            <Button title='Go to Meal Details' onPress={() => props.navigation.navigate({routeName: 'MealDetails'})}/>
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
export default MealsScreen