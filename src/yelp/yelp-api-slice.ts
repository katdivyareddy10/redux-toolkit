import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const YELP_API_KEY = "09eadadf-d51c-4388-bbec-e56ec18d7e22";

interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  categories: Array<Record<string, any>>;
  rating: number;
  coordinates: Record<string, any>;
  transactions: Array<string>;
  price: string;
  location: Record<string, any>;
  phone: string;
  display_phone: string;
  distance: number;
}

export interface Breed {
  id: string;
  name: string;
  image: Record<string, any>;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.thedogapi.com/v1`,
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      // headers.set("Authorization", `Bearer ${YELP_API_KEY}`);
      // headers.set("Access-Control-Allow-Origin", "*");
      headers.set("x-api-key", YELP_API_KEY);
      // }
      return headers;
    },
  }),
  endpoints(build) {
    return {
      fetchBreed: build.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedQuery } = apiSlice;
