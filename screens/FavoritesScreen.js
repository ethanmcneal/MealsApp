import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import {useSelector} from 'react-redux'

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)
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
