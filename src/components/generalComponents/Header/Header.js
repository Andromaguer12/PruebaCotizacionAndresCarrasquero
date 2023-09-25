import { View, Text } from 'react-native'
import React from 'react'
import { useNavigationState } from '@react-navigation/native';
import * as Icons from "react-native-heroicons/solid";
import styles from './styles/headerStyles'

const Header = () => {
    const state = useNavigationState(state => state);
    const routeName = state.routes[state.index].name;

  return (
    <View style={styles.headerContainer}>
        <Icons.Bars3Icon color="red" fill="black" size={30} />
        <Text>{routeName}</Text>
        <View style={styles.avatar} />
    </View>
  )
}

export default Header