import React from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const MealsScreen = (props) => {
	const catId = props.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
	return (
		<View style={styles.screen}>
			<Text>{selectedCategory.title}</Text>
			<Button
				title="Go to Meal Details"
				onPress={() =>
					props.navigation.navigate({ routeName: "MealDetails" })
				}
			/>
		</View>
	);
};

MealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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
