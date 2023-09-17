// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `all`,
    }),
    getAllCountriesDetails: builder.query({
        query: (cn) => {return `name/${cn}`},
      }),
      
      
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCountriesQuery,useGetAllCountriesDetailsQuery} = countriesApi