import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealCard from './MealCard';

const MealList = props => {

const renderMeal = (itemData) => {
		return (
			<MealCard
				itemData={itemData}
				navigateToMealDetails={props.navigateToMealDetails}
                navigation={props.navigation}
			/>
		);
	};
    return (
        <View style={styles.list}>
			<FlatList
				data={props.meals}
				renderItem={renderMeal}
				style={{ width: "90%" }}
			/>
		</View>
    )
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MealList