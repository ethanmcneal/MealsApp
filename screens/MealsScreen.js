import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsScreen = (props) => {
	const catId = props.navigation.getParam("categoryId");
	const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
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
export default MealsScreen;
