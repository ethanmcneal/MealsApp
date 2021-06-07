import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native";



const MealCard = (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.header, ...styles.row }}>
						<ImageBackground
							source={{ uri: props.itemData.item.imageUrl }}
							style={styles.bgImage}
						>
							<Text style={styles.title} numberOfLines={1}>
								{props.itemData.item.title}
							</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.row, ...styles.detail }}>
						<Text style={styles.detailText}>{props.itemData.item.duration}m</Text>
						<Text style={styles.detailText}>
							{props.itemData.item.complexity}
						</Text>
						<Text style={styles.detailText}>
						    {props.itemData.item.affordability}
						</Text>
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
