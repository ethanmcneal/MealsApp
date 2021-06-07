import React from "react";
import { StyleSheet, Text, FlatList, View, TouchableOpacity} from "react-native";
import CategoryCard from "../components/CategoryCard";

import {CATEGORIES} from '../data/dummy-data'



const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return <CategoryCard itemData={itemData} navigation={props.navigation}/>
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
});
export default CategoriesScreen;
