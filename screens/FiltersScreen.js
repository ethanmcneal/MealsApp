import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {useDispatch} from 'react-redux'
import { setFilters } from "../store/actions/meals";
import FilterSwitch from "../components/FilterSwitch";

const FiltersScreen = (props) => {
    const {navigation} = props
	const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const dispatch = useDispatch();
 

    
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenGree: glutenFree,
            vegan: vegan,
            lactoseFree: lactoseFree,
            vegetarian: vegetarian
        };
        console.log(appliedFilters)
    dispatch(setFilters(appliedFilters)) 
    }, [glutenFree, vegan, lactoseFree, vegetarian, dispatch])

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    },[saveFilters])

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Filters</Text>
			<FilterSwitch label='Gluten-free' state={glutenFree} onChange={val => setGlutenFree(val)}/>
            <FilterSwitch label='Lactose-free' state={lactoseFree} onChange={val => setLactoseFree(val)}/>
            <FilterSwitch label='Vegetarian' state={vegetarian} onChange={val => setVegetarian(val)}/>
            <FilterSwitch label='Vegan' state={vegan} onChange={val => setVegan(val)}/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
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
        headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Save"
						iconName="ios-save"
						onPress={navData.navigation.getParam('save')}
					/>
				</HeaderButtons>
        	)
        ;
	}
}
};

export default FiltersScreen;
