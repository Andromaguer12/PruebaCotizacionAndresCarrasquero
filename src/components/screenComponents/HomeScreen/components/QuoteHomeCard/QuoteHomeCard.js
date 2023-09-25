import { View, Text } from 'react-native'
import React from 'react'
import { format } from "date-fns"
import styles from './styles/quoteHomeCardStyles'
import formatPrice from '../../../../../shared/functions/format-price'

const QuoteHomeCard = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.userAndDate}>
        <View style={styles.avatar}>

        </View>
        <View style={styles.nameAndDate}>
            <Text style={styles.title1}>{item.name}</Text>
            <Text style={styles.text}>{format(item.date, 'dd/MM/yyyy')}</Text>
        </View>
      </View>
      <Text style={styles.userNames}>{item.user.name}</Text>
      <Text style={styles.price}>{formatPrice(item.price)}</Text>
    </View>
  )
}

export default QuoteHomeCard