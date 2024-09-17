import React from "react"
import {View ,Text, StyleSheet} from "react-native"
import {Card} from "react-native-paper"
import styled from "styled-components/native"
import { SvgXml } from 'react-native-svg';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacerComponent";
import { Texts } from "../../../components/typography/text.component";

import { 
    RestaurantCard, 
    RestaurantCardCover, 
    Info, 
    Rating, 
    StatInfo,
    Status,
} 
from "./restaurant-info-card.styles";


// const Title = styled.Text`
//     font-family: ${props => props.theme.fonts.heading};
//     font-size: ${props => props.theme.fontSizes.body};
//     color: ${props => props.theme.colors.ui.primary};
//     background-color: ${props => props.theme.colors.bg.primary};
// `
// const Address = styled.Text`
//     font-family: ${props => props.theme.fonts.monospace};
//     font-size: ${props => props.theme.fontSizes.caption}
// `


// const ClosedTag = styled.Text`
//     color: ${props => props.theme.colors.text.error};
//     font-size: ${props => props.theme.fontSizes.caption};
//     padding-left: ${props => props.theme.space[3]}

// `


// const Spacing = styled.View`
//     padding-left: ${props => props.theme.space[3]}
// `

export const RestaurantInfoCard = ({restaurant = {}}) => {

    const {
        name = "some restaurantt",
        icon = <MaterialIcons name="dinner-dining" size={16} color="black"  />,
        photos = ["https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"],
        address= "4 random street",
        isOpen = false,
        rating = 4,
        isClosedTemporarily= true,
     } = restaurant;

     //rating
     const ratingArray = Array.from(new Array(Math.floor(rating)))
     const ClosedTemporarily = () => (
        <>
        {isClosedTemporarily && (
            <Texts variant="error">
                CLOSED TEMPORARILY
            </Texts>
        ) }
        </>
     )


    return(
      <View>
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key ={name} source={{uri: photos[0]}} />
                <Info>
                    <Texts variant="label">{name}</Texts>
                    <StatInfo>
                        <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20}/>
                        ))}
                        </Rating>
                        <Status>
                        {isOpen ? <SvgXml xml={open} width={20} height={20}/>  : <ClosedTemporarily />}
                        <Spacer position="left" size="large">
                        <Texts >{icon}</Texts>
                        </Spacer>
                        </Status>
                    </StatInfo>
                    <Texts variant="caption">{address}</Texts>
                </Info>
        </RestaurantCard>
       </View>
    )
}

