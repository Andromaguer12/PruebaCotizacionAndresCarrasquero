import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/screenComponents/HomeScreen/HomeScreen';
import CreateQuoteScreen from '../components/screenComponents/CreateQuoteScreen/CreateQuoteScreen';

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
        <Screen 
            name="CreateQuote"
            component={CreateQuoteScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}

export default Router