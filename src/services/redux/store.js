import { combineReducers, configureStore  } from "@reduxjs/toolkit"
import thunkMiddleware from 'redux-thunk';
import quotes from './reducers/quotes/actions'

const reducers = combineReducers({
    quotes
})

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunkMiddleware)
});

export default store