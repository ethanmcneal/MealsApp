import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from 'react-redux'
import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";
import { CATEGORIES} from "../data/dummy-data";

const MealsScreen = (props) => {
	const catId = props.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    const availableMeals = useSelector(state => state.meals.filteredMeals);
	const meals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

    if (meals.length === 0){
        return (
            <View style={styles.screen}>
                <DefaultText>No meals to view in {selectedCategory.title}, check your filters!</DefaultText>
            </View>
        )
    }
	return (
		<MealList meals={meals} navigation={props.navigation}/>
	);
};

MealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default MealsScreen;
