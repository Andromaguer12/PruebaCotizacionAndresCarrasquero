/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/services/redux/store'
import Router from './src/screens/router';

function Main() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Router />
            </Provider>
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => Main);
