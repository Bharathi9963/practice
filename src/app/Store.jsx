
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/CounterSlice'
import { countriesApi } from '../features/services/RestCountries'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})
setupListeners(store.dispatch)