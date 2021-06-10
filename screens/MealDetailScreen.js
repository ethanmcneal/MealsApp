import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

const MealDetailScreen = (props) => {
	const meals = useSelector((state) => state.meals.meals);
	const mealId = props.navigation.getParam("mealId");
	const isFavorite = useSelector((state) =>
		state.meals.favoriteMeals.some((meal) => meal.id === mealId),
	);
	const selectedMeal = meals.find((meal) => meal.id == mealId);

	useEffect(() => {
		props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
	}, [toggleFavoriteHandler]);
	const dispatch = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(mealId));
	}, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({isFav: isFavorite})
    }, [isFavorite])

	return (
		<ScrollView>
			<Image
				source={{ uri: selectedMeal.imageUrl }}
				style={styles.image}
			/>
			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration}m</DefaultText>
				<DefaultText>{selectedMeal.complexity}</DefaultText>
				<DefaultText>{selectedMeal.affordability}</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((ing) => (
				<ListItem key={ing}>{ing}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((step) => (
				<ListItem key={step}>{step}</ListItem>
			))}
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const toggleFavorite = navigationData.navigation.getParam("toggleFav");
	const mealTitle = navigationData.navigation.getParam("mealTitle");
    const isFav = navigationData.navigation.getParam('isFav')
	// const selectedMeal = MEALS.find((meal) => meal.id == mealId);
	return {
		headerTitle: mealTitle,
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Favorite"
						iconName={isFav ? "ios-star" : "ios-star-outline"}
						onPress={toggleFavorite}
					/>
				</HeaderButtons>
			);
		},
	};
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},
	title: {
		fontFamily: "bold-sans",
		fontSize: 22,
		textAlign: "center",
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#ccc",
		padding: 10,
		borderWidth: 1,
		borderRadius: 8,
	},
});
export default MealDetailScreen;
