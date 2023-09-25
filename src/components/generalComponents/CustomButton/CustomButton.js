import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles/customButtonStyles'

const CustomButton = ({ label, bgColor, onPress, icon }) => {
  return (
    <View onPress={onPress} style={styles.buttonContainer}>
        <View style={{ ...styles.buttonArea, backgroundColor: bgColor }}>
            {icon}
        </View>
        <Text style={styles.text}>{label}</Text>
    </View>
  )
}

export default CustomButton