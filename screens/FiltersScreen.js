import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const FiltersScreen = (props) => {
    return(
        <View>
            <Text>
                filters screen
            </Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
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


export default FiltersScreen