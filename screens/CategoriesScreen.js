import React from "react";
import {
	StyleSheet,
	Text,
	FlatList,
	View,
	TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryCard from "../components/CategoryCard";
import CustomHeaderButton from "../components/HeaderButton";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryCard itemData={itemData} navigation={props.navigation} />
		);
	};
	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

CategoriesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Categories",
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default CategoriesScreen;
