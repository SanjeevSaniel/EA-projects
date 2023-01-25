import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//TODO: -- RTK Query

// TODO: The Base URL
export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

// TODO: custom hook gets created -> useGetAllProductsQuery
export const { useGetAllProductsQuery } = productsAPI;
