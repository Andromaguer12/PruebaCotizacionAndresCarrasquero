import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles/createQuoteFormStyles'

const CreateQuoteForm = ({ formState, setFormState }) => {
  const onChangeInput = (text, name) =>{
    setFormState({ ...formState, [name]: text })
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.customInputHalf}>
          <Text style={styles.label}>Name: </Text>
          <TextInput
            onChangeText={(e) => onChangeInput(e, 'name')}
            value={formState.name}
            name="name"
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.customInputHalf}>
          <Text style={styles.label}>Last Name: </Text>
          <TextInput
            onChangeText={(e) => onChangeInput(e, 'lastName')}
            value={formState.lastName}
            name="lastName"
            style={styles.inputStyle}
          />
        </View>
      </View>
      <View style={styles.customInput}>
        <Text style={styles.label}>Address: </Text>
        <TextInput
          onChangeText={(e) => onChangeInput(e, 'address')}
          value={formState.address}
          name="address"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.customInput}>
        <Text style={styles.label}>Date: </Text>
        <TextInput
          onChangeText={(e) => onChangeInput(e, 'date')}
          value={formState.address}
          name="date"
          style={styles.inputStyle}
        />
      </View>
    </View>
  )
}

export default CreateQuoteForm