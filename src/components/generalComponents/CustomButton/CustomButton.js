import { View, Text  } from 'react-native'
import React from 'react'
import styles from './styles/customButtonStyles'
import { Button } from 'react-native-paper'

const CustomButton = ({ label, bgColor, onPress, icon }) => {
  return (
    <Button mode="contained" onPress={onPress}>
        {label}
      </Button>
    // <Button title={label}>
    //     <View style={{ ...styles.buttonArea, backgroundColor: bgColor }}>
    //         {icon}
    //     </View>
    //     <Text style={styles.text}>{label}</Text>
    // </Button>
  )
}

export default CustomButton