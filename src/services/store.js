import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
import changeLanguageSlice from "./changeLanguageSlice";
const store = configureStore({
    reducer:{
        [articleApi.reducerPath]: articleApi.reducer,
        language: changeLanguageSlice,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(articleApi.middleware),
})

export default store;