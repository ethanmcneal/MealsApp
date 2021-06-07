import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const MealsScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>
                meal screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default MealsScreen