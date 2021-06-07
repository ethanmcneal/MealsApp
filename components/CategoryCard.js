import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoryCard = (props) => {
	return (
		<TouchableOpacity
			style={styles.gridItem}
			onPress={() => {
				props.navigation.navigate({
					routeName: "Meals",
					params: {
						categoryId: props.itemData.item.id,
					},
				});
			}}
		>
			<View
				style={{
					...styles.container,
					...{ backgroundColor: props.itemData.item.color },
				}}
			>
				<Text style={styles.title}>{props.itemData.item.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 18,
	},
    title: {
        fontFamily: 'bold-sans',
        fontSize: 18,
    }
});

export default CategoryCard;
