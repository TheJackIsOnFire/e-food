import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: builder => ({
    getRestaurantOptions: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),
    getRestaurantData: builder.query<Restaurant, string>({
      query: id => `restaurantes/${id}`,
    }),
  }),
});

export const { useGetRestaurantOptionsQuery, useGetRestaurantDataQuery } = api;
export default api;
