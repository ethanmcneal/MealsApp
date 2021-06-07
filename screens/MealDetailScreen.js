import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id == mealId);
	return (
		<View style={styles.screen}>
			<Text>meal deets screen {mealId}</Text>
			<Button
				title="go back to categories"
				onPress={() => props.navigation.popToTop()}
			/>
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id == mealId);
	return {
		headerTitle: selectedMeal.title,
		headerRight: () => {
            return(
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => console.log("pressed")}
				/>
			</HeaderButtons>
            )
		},
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default MealDetailScreen;
