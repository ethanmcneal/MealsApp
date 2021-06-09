import React from 'react'
import { Switch, Text, View } from 'react-native'
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



export default FilterSwitch