import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles/homeScreenStyles'
import Header from '../../generalComponents/Header/Header'
import CustomButton from '../../generalComponents/CustomButton/CustomButton'
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native'
import QuoteHomeCard from './components/QuoteHomeCard/QuoteHomeCard'

const HomeScreen = () => {
    const navigation = useNavigation()

    const cards = [
        {
            "_id": "615196bd1616d9ac4f91d27a",
            "name": "Quote #1",
            "date": 1671951600,
            "image": "",
            "user": {
                "_id": "3541658464565",
                "name": "Andres Carrasquero"
            },
            "price": 4000
        },
        {
            "_id": "615196bd1616d9ac4f91d27b",
            "name": "Quote #2",
            "date": 1671951601,
            "image": "",
            "user": {
                "_id": "3541658464566",
                "name": "Maria Rodriguez"
            },
            "price": 5000
        },
        {
            "_id": "615196bd1616d9ac4f91d27c",
            "name": "Quote #3",
            "date": 1671951602,
            "image": "",
            "user": {
                "_id": "3541658464567",
                "name": "Carlos Perez"
            },
            "price": 6000
        },
        {
            "_id": "615196bd1616d9ac4f91d27d",
            "name": "Quote #4",
            "date": 1671951603,
            "image": "",
            "user": {
                "_id": "3541658464568",
                "name": "Laura Gomez"
            },
            "price": 7000
        },
        {
            "_id": "615196bd1616d9ac4f91d27e",
            "name": "Quote #5",
            "date": 1671951604,
            "image": "",
            "user": {
                "_id": "3541658464569",
                "name": "Juan Martinez"
            },
            "price": 8000
        }
    ]
    
    

    const goToAddQuotes = () => {
        navigation.navigate('CreateQuote')
    }

    return (
        <ScrollView contentContainerStyle={styles.homeContainer}>
            <Header />
            <View style={styles.titles}>
                <Text style={styles.title1}>List of Quotes</Text>
                <Text style={styles.text}>You can see all quote information here</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton icon={<Icons.PlusIcon size={15} color={"#ffffff"} />} label="Create" bgColor={"darkblue"} onPress={goToAddQuotes} />
            </View>
            <View style={styles.recentQuotes}>
                <Text style={styles.title2}>Recent Quotes</Text>
                {cards.map((card) => {
                    return <QuoteHomeCard key={card._id} item={card} />
                })}
            </View>
        </ScrollView>
    )
}

export default HomeScreen