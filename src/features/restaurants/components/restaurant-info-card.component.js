import React from 'react';
import {Text,StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';


export const RestaurantInfo = ({restaurant={}}) => {
    const {
        name = 'TEST',
        icon,
        photos = ['https://d2fdt3nym3n14p.cloudfront.net/venue/3094/gallery/13009/conversions/121113237_811315479645435_5054498167316426209_o-big.jpg'],
        address='test address',
        isOpenNow=true,
        rating=4,
        isClosedTemporarely

    } = restaurant;
    return <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />

       <Text style={styles.title}>{name}</Text>

    </Card>
};

const styles=StyleSheet.create({
    card:{backgroundColor:'white'},
    cover:{padding:20,backgroundColor: 'white'},
    title:{padding:16}
})