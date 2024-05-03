import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/Products/getproductsSlice.ts'
export default configureStore({
    reducer: {
        products: productReducer,
       

    },
})