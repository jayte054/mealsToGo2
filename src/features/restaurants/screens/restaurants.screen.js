import React from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native"

import { 
  SafeArea, 
  SearchView, 
  RestaurantList,
} from "./restaurant.screen.styles";
import { Spacer } from "../../../components/spacerComponent";
// const SafeArea = styled(SafeAreaView)`
//     flex: 1;
//     ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}`}px;
// `;
// const SearchView = styled(View)`
//     padding:${props => props.theme.space[1]};

// `;

// const ListView = styled(View)`
//     flex: 1;
//     backgroundColor: ${props => props.theme.colors.brand.primary};
//     padding: ${props => props.theme.space[2]};
// `



export const RestaurantsScreen = () => (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <RestaurantList 
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7}
        ]}
        renderItem={() => (
        <Spacer position="bottom" size="large">
        <RestaurantInfoCard />
        </Spacer>
        )}
        keyExtractor= {item => item.name}
      />
         
    </SafeArea>
)

// const styles = StyleSheet.create({
//  container: {
//   flex: 1,
//   marginTop: StatusBar.currentHeight
//  },
// search: {
//   flex: 2,
//   paddingTop:5,
// },
// searchText:{
//   padding: 9,
//   fontWeight: "bold"
// },
// list: {
//   flex: 20,
//   backgroundColor: "blue"
// },
// listText: {
//   padding: 9,
//   fontWeight: "bold"
// }
// });