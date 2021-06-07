import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import MealsScreen from "../screens/MealsScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		Meals: MealsScreen,
		MealDetails: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor:
					Platform.OS === "android" ? Colors.primaryColor : "white",
			},
			headerTintColor:
				Platform.OS === "android" ? "white" : Colors.primaryColor,
		},
	},
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		MealsNav: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarLabel: "Meals",
				tabBarIcon: (tabInformation) => {
					return (
						<Ionicons
							name="ios-restaurant"
							size={25}
							color={tabInformation.tintColor}
						/>
					);
				},
			},
		},
		Favorites: {
			screen: FavoritesScreen,
			navigationOptions: {
				tabBarIcon: (tabInformation) => {
					return (
						<Ionicons
							name="ios-star"
							size={25}
							color={tabInformation.tintColor}
						/>
					);
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.primaryColor,
		},
	},
);

export default createAppContainer(MealsFavTabNavigator);
