import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://molla-backend.vercel.app",
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/api/product",
    }),

    getAllOrders: builder.query({
      query: () => "/api/orders",
    }),

    getProduct: builder.query({
      query: (id) => `/api/product/getproduct/${id}`,
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `/api/product/delete/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    createProduct: builder.mutation({
      query: (newProduct) => {
        const token = localStorage.getItem("token");
        console.log(token);
        return {
          url: "/api/product/create",
          method: "POST",
          body: newProduct,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    updateProduct: builder.mutation({
      query: ({ id, newProduct }) => {
        const token = localStorage.getItem("token");
        return {
          url: `/api/product/update/${id}`,
          method: "PUT",
          body: newProduct,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetPaymentQuery,
  useGetAllProductsQuery,
  useGetAllOrdersQuery,
  useUpdateMenuMutation,
  useGetProductQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApi;
