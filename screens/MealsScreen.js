import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MealCard from "../components/MealCard";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsScreen = (props) => {

const navigateToMealDetails = (id) => {
        props.navigation.navigate({
            routeName: "MealDetails",
            params: {
                mealId: id,
            },
        });
    };
	const renderMeal = (itemData) => {
		return (
			<MealCard
				itemData={itemData}
                navigateToMealDetails={navigateToMealDetails}
			/>
		);
	};
	const catId = props.navigation.getParam("categoryId");
	const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
	return (
		<View style={styles.screen}>
			<FlatList
				data={meals}
				renderItem={renderMeal}
				style={{ width: "90%" }}
			/>
		</View>
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
		justifyContent: "center",
		alignItems: "center",
	},
});
export default MealsScreen;
