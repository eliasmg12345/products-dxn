import { Middleware, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const persistanceLocalStorageMiddleware: Middleware = store => next => action => {
    next(action)
    localStorage.setItem("products_dxn", JSON.stringify(store.getState()))
}

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch