import { View, Text, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'
import styles from './styles/createQuoteScreenStyles'
import Header from '../../generalComponents/Header/Header'
import { useNavigation } from '@react-navigation/native'
import CreateQuoteForm from './components/CreateQuoteForm/CreateQuoteForm'
import ProductToCreateQuoteCard from './components/ProductToCreateQuoteCard/ProductToCreateQuoteCard'
import Total from './components/Total/Total'
import { Button } from 'react-native-paper'


const CreateQuoteScreen = () => {
    const navigation = useNavigation()
    const [formState, setFormState] = useState({
        name: "",
        lastName: "",
        address: "",
        date: "",
      })
      const [confirming, setConfirming] = useState(null)

    const cards = [
        {
            "_id": "615196bd1616d9ac4f91d27a",
            "name": "Product 1",
            "code": "ashgds",
            "date": 1671951600,
            "image": "",
            "desiredQty": 2,
            "price": 4000,
            "checked": true
        },
        {
            "_id": "615196bd1616d9ac4f91d27b",
            "name": "Product 2",
            "code": "bgvewr",
            "date": 1671951601,
            "image": "",
            "desiredQty": 3,
            "price": 4500,
            "checked": false
        },
        {
            "_id": "615196bd1616d9ac4f91d27c",
            "name": "Product 3",
            "code": "cdfhrt",
            "date": 1671951602,
            "image": "",
            "desiredQty": 1,
            "price": 3200,
            "checked": true
        },
        {
            "_id": "615196bd1616d9ac4f91d27d",
            "name": "Product 4",
            "code": "djskfg",
            "date": 1671951603,
            "image": "",
            "desiredQty": 4,
            "price": 5200,
            "checked": false
        },
        {
            "_id": "615196bd1616d9ac4f91d27e",
            "name": "Product 5",
            "code": "ekwgnb",
            "date": 1671951604,
            "image": "",
            "desiredQty": 2,
            "price": 3800,
            "checked": true
        }
    ]

    const goToAddQuotes = () => {
        navigation.navigate('AddQuote')
    }

    const getTotal = () => {
        let total = 0 
        cards.forEach((d) => total += d.price)

        return total
    } 

    const handleConfirmButton = useCallback(() => {
        if(!confirming){
            setConfirming({
                currentTotal: getTotal(),
            })
        } else {
            // llamado a la api
        }
    }, [confirming, getTotal])
    

    return (
        <ScrollView contentContainerStyle={styles.createQuoteContainer}>
            <Header />
            <View style={styles.titles}>
                <CreateQuoteForm formState={formState} setFormState={setFormState} />
            </View>
            {confirming && <View style={{ ...styles.recentQuotes, marginBottom: 20 }}>
                <Total total={getTotal()} />
            </View>}
            {cards.length > 0 && !confirming &&<View style={styles.recentQuotes}>
                <Text style={styles.title2}>Choose products</Text>
                {cards.map((card) => {
                    return <ProductToCreateQuoteCard key={card._id} item={card} />
                })}
            </View>}
            {cards.length > 0 && confirming &&<View style={styles.recentQuotes}>
                <Text style={styles.title2}>Current products</Text>
                {cards.filter(d => d.checked).map((card) => {
                    return <ProductToCreateQuoteCard hideCheck key={card._id} item={card} />
                })}
            </View>}
            {!confirming && <View style={styles.recentQuotes}>
                <Total total={getTotal()} />
            </View>}
            <View style={styles.confirmButtons}>
                <Button mode="contained" style={{ width: '100%' }} onPress={handleConfirmButton}>
                    {confirming ? "Confirmar" : "Cotizar" }
                </Button>
            </View>
        </ScrollView>
    )
}

export default CreateQuoteScreen