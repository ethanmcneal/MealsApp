import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id == mealId);
	return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ing => <Text key={ing}>{ing}</Text>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.ingredients.map(step => <Text key={step}>{step}</Text>)}
        </ScrollView>
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
	image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'bold-sans',
        fontSize: 22,
        textAlign: "center"
    }
});
export default MealDetailScreen;
