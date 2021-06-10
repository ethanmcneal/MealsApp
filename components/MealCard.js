import React from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import DefaultText from "./DefaultText";




const MealCard = (props) => {

    const navigateToMealDetails = (id) => {
		props.navigation.navigate({
			routeName: "MealDetails",
			params: {
				mealId: id,
                mealTitle: props.itemData.item.title
			},
		});
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigateToMealDetails(props.itemData.item.id)}>
				<View>
					<View style={{ ...styles.header, ...styles.row }}>
						<ImageBackground
							source={{ uri: props.itemData.item.imageUrl }}
							style={styles.bgImage}
						>
							<DefaultText style={styles.title} numberOfLines={1}>
								{props.itemData.item.title}
							</DefaultText>
						</ImageBackground>
					</View>
					<View style={{ ...styles.row, ...styles.detail }}>
						<DefaultText style={styles.detailText}>{props.itemData.item.duration}m</DefaultText>
						<DefaultText style={styles.detailText}>
							{props.itemData.item.complexity}
						</DefaultText>
						<DefaultText style={styles.detailText}>
						    {props.itemData.item.affordability}
						</DefaultText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 200,
		width: "100%",
		backgroundColor: "#222",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 20,
	},
	bgImage: {
		width: "100%",
		height: "100%",
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
	},
	row: {
		flexDirection: "row",
	},
	title: {
		fontSize: 20,
		fontFamily: "bold-sans",
		color: "white",
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		paddingHorizontal: 12,
        paddingVertical: 5,
	},
	header: {
		height: "85%",
	},
	detail: {
		paddingHorizontal: 15,
		justifyContent: "space-between",
        alignItems: 'center',
        height: '15%',
        
	},
    detailText: {
        color: 'white'
    }
});

export default MealCard;
