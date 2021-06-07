import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {CATEGORIES} from '../data/dummy-data'


const MealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => props.navigation.navigate({ routeName: "MealDetails" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealsScreen;
