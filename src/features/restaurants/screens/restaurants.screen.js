import React from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native"

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}`}px;
`;
const SearchView = styled(View)`
    padding:${props => props.theme.space[1]};

`;

const ListView = styled(View)`
    flex: 1;
    backgroundColor: ${props => props.theme.colors.brand.primary};
    padding: ${props => props.theme.space[2]};
`



export const RestaurantsScreen = () => (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ListView>
         <RestaurantInfoCard />
      </ListView>
    </SafeArea>
)

const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: StatusBar.currentHeight
 },
search: {
  flex: 2,
  paddingTop:5,
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