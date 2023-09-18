import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://650888b156db83a34d9c7a2b.mockapi.io/api/v1',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
