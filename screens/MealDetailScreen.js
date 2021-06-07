import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return(
        <View style={styles.screen}>
            <Text>
                meal deets screen {mealId}
            </Text>
            <Button title="go back to categories" onPress={() => props.navigation.popToTop()}/>
        </View>
    )
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return {
        headerTitle: selectedMeal.title
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default MealDetailScreen