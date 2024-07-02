import React from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <Text style={styles.listText}>
         <RestaurantInfo />
        </Text>
      </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: StatusBar.currentHeight
 },
search: {
  flex: 2,
  paddingTop:5
},
searchText:{
  padding: 9,
  fontWeight: "bold"
},
list: {
  flex: 20,
  backgroundColor: "blue"
},
listText: {
  padding: 9,
  fontWeight: "bold"
}
});