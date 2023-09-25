import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { format } from "date-fns"
import styles from './styles/productToCreateQuoteCardStyles'
import formatPrice from '../../../../../shared/functions/format-price'
import { Checkbox } from 'react-native-paper';

const ProductToCreateQuoteCard = ({ item, hideCheck }) => {

    const handleCheckboxChange = () => {
        // llamado a la api
      };

    const onChangeInput = () => {
        // llamado a la api
    }

  return (
    <View style={{...styles.cardContainer, backgroundColor: hideCheck ? 'transparent' : '#ffffff|'}}>
      <View style={styles.userAndDate}>
        {!hideCheck && <Checkbox
            status={item?.checked ? 'checked' : 'unchecked'}
            onPress={handleCheckboxChange}
        />}
        <View style={styles.avatar}>

        </View>
        <View style={styles.nameAndDate}>
            <Text style={styles.title1}>{item.name}</Text>
            <Text style={styles.text}>{format(item.date, 'dd/MM/yyyy')}</Text>
        </View>
      </View>
      <View style={styles.qty}>
        <TextInput
            onChangeText={(e) => onChangeInput(e, 'date')}
            defaultValue={item.desiredQty.toString()}
            style={styles.desiredQty}
        />
        <Text style={styles.text}>Quantity</Text>
      </View>
      <Text style={styles.price}>{formatPrice(item.price)}</Text>
    </View>
  )
}

export default ProductToCreateQuoteCard