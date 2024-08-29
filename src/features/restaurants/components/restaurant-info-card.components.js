import React from "react"
import {View ,Text, StyleSheet} from "react-native"
import {Card} from "react-native-paper"
import styled from "styled-components/native"
import { SvgXml } from 'react-native-svg';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import star from "../../../../assets/star";
import open from "../../../../assets/open";


const RestaurantCard = styled(Card)`
   background-color: ${props => props.theme.colors.ui.quaternary};
   padding:${props => props.theme.space[1]};
`
const RestaurantCardCover = styled(Card.Cover)`
   padding: ${props => props.theme.space[3]};
   border-radius: ${props => props.theme.space[2]};
`

const Info = styled.View`
    padding: ${props => props.theme.space[3]};
`
const Title = styled.Text`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
    background-color: ${props => props.theme.colors.bg.primary};
`
const Address = styled.Text`
    font-family: ${props => props.theme.fonts.monospace};
    font-size: ${props => props.theme.fontSizes.caption}
`
const Rating = styled.View`
    padding-top: ${props => props.theme.space[1]};
    padding-bottom: ${props => props.theme.space[1]};
    flex-direction: row;

`
const StatInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const ClosedTag = styled.Text`
    color: ${props => props.theme.colors.text.error};
    font-size: ${props => props.theme.fontSizes.caption};
`

const Status = styled.Text`
    flex-direction: row;
`

export const RestaurantInfoCard = ({restaurant = {}}) => {

    const {
        name = "some restaurantt",
        icon = <MaterialIcons name="dinner-dining" size={16} color="black"  />,
        photos = ["https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"],
        address= "4 random street",
        isOpen = true,
        rating = 4,
        isClosedTemporarily= true,
     } = restaurant;

     //rating
     const ratingArray = Array.from(new Array(Math.floor(rating)))
     const ClosedTemporarily = () => (
        <>
        {isClosedTemporarily && (
            <ClosedTag variant="label">
                CLOSED TEMPORARILY
            </ClosedTag>
        ) }
        </>
     )

    return(
      <View>
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key ={name} source={{uri: photos[0]}} />
                <Info>
                    <Title>{name}</Title>
                    <StatInfo>
                        <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20}/>
                        ))}
                        </Rating>
                        
                        <Status>
                        {isOpen ? <SvgXml xml={open} width={20} height={20}/>  : <ClosedTemporarily />} 
                        <Text>{icon}</Text>
                        </Status>
                    </StatInfo>
                    <Address>{address}</Address>
                </Info>
        </RestaurantCard>
       </View>
    )
}

