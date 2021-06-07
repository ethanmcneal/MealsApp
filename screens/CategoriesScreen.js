import React from "react";
import { StyleSheet, Text, FlatList, View, TouchableOpacity} from "react-native";

import {CATEGORIES} from '../data/dummy-data'



const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({routeName: 'Meals', params: {
                    categoryId: itemData.item.id,
                }})
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
    headerTitle: 'Categories',
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
