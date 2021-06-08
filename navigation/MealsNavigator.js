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
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

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
            headerTitleStyle: {
                fontFamily: 'bold-sans'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
			headerTintColor:
				Platform.OS === "android" ? "white" : Colors.primaryColor,
		},
	},
);

const FavoritesNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetails: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor:
					Platform.OS === "android" ? Colors.primaryColor : "white",
			},
            headerTitleStyle: {
                fontFamily: 'bold-sans'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
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
			screen: FavoritesNavigator,
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

const FiltersNavigator = createStackNavigator({
	FiltersScreen: FiltersScreen
}, 
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "white",
        },
        headerTitleStyle: {
            fontFamily: 'bold-sans'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
},);

const MainNavigator = createDrawerNavigator({
	MealsFavs: {screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
	Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'bold-sans'
        }
    }
});

export default createAppContainer(MainNavigator);
