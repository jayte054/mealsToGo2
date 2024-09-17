import styled from "styled-components/native"

import { View, SafeAreaView, StatusBar, FlatList } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.brand.primary};
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}`}px;
`;
export const SearchView = styled(View)`
    padding:${props => props.theme.space[1]};

`;

export const ListView = styled(View)`
    flex: 1;
    backgroundColor: ${props => props.theme.colors.brand.primary};
    padding: ${props => props.theme.space[2]};
`
export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 8
    }
})``