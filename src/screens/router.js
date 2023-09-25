import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/screenComponents/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator()

const Screen = Stack.Screen

const Router = () => {
  return (
    <Stack.Navigator>
        <Screen 
            name="Quotes"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}

export default Router