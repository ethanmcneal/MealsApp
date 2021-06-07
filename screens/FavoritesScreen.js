import React from "react";
import MealList from "../components/MealList";
import {MEALS} from '../data/dummy-data'

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter(meal => meal.id == 'm2' || meal.id == 'm3')
	return (
		<MealList meals={favMeals} navigation={props.navigation}/>
	);
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Favorite Meals'
}
export default FavoritesScreen;
