import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
				<Text>{props.label}</Text>
				<Switch
					trackColor={{true: Colors.primaryColor}}
					value={props.state}
					onValueChange={props.onChange}
				/>
			</View>
    )
}

const FiltersScreen = (props) => {
	const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Filters</Text>
			<FilterSwitch label='Gluten-free' state={glutenFree} onChange={(val) => setGlutenFree(val)}/>
            <FilterSwitch label='Lactose-free' state={lactoseFree} onChange={(val) => setLactoseFree(val)}/>
            <FilterSwitch label='Vegetarian' state={vegetarian} onChange={(val) => setVegetarian(val)}/>
            <FilterSwitch label='Vegan' state={vegan} onChange={(val) => setVegan(val)}/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	filterContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "80%",
        marginVertical: 20,
	},
	title: {
		fontFamily: "bold-sans",
		fontSize: 22,
		margin: 20,
		textAlign: "center",
	},
});
FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Filter Meals",
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
};

export default FiltersScreen;
