import React from "react"
import {View ,Text} from "react-native"
import {Card} from "react-native-paper"

export const RestaurantInfo = ({restaurant = {}}) => {

    const {
        name = "some restaurant",
        icon,
        photos = ["https://cdn.businessday.ng/2020/08/Restaurants-in-Nigeria.jpg"],
        address= "4 random street",
        isOpen = true,
        rating,
        isClosedTemporarily= false,
     } = restaurant;

    return(
    <View>
        <Card>
            <Card.Cover source={{uri : photos[0]}} />
            <Card.Title title={name}/>
            <Card.Content>
                 <Text>{address}</Text>
            </Card.Content>
        </Card>
    </View>
    )
}