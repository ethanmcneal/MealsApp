import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import {MEALS} from '../data/dummy-data'

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter(meal => meal.id == 'm2' || meal.id == 'm3')
	return (
		<MealList meals={favMeals} navigation={props.navigation}/>
	);
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
		headerTitle: "Favorites Meals",
		headerLeft: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Menu"
						iconName="ios-menu"
						onPress={() => navData.navigation.toggleDrawer()}
					/>
				</HeaderButtons>
			);
		},
	};
}
export default FavoritesScreen;
