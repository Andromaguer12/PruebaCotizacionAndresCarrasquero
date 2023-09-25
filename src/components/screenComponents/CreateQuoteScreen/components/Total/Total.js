import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles/totalStyles'
import formatPrice from '../../../../../shared/functions/format-price'

const Total = ({total}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>TOTAL: </Text>
      <Text style={styles.number}>{formatPrice(total)}</Text>
    </View>
  )
}

export default Total