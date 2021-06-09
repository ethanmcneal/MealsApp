import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
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

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        
    },
})



export default FilterSwitch