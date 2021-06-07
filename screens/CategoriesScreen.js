import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const CategoriesScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>
                Cat screen
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
export default CategoriesScreen