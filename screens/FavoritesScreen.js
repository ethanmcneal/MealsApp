import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import {useSelector} from 'react-redux'
import { StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals){
        return <View style={styles.screen}>
            <DefaultText>
                No Favorite Meals
            </DefaultText>
        </View>
    }
	return (
		<MealList meals={favMeals} navigation={props.navigation}/>
	);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

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
