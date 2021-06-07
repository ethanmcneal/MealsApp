import React from "react";
import { Button, StyleSheet, Text, FlatList, View, Touchable, TouchableOpacity, Platform } from "react-native";
import Colors from "../constants/Colors";

import {CATEGORIES} from '../data/dummy-data'



const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({routeName: 'Meals'})
            }}>
            <View >
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
  );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
      flex:1,
      margin: 15,
      padding: 15,
  },
});
export default CategoriesScreen;
