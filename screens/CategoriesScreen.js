import React from "react";
import { Button, StyleSheet, Text, FlatList, View } from "react-native";

import {CATEGORIES} from '../data/dummy-data'

const renderGridItem = (itemData) => {
    return (
        <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

const CategoriesScreen = (props) => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
  );
};

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
