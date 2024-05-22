// "use client";

// import axios, { AxiosResponse } from "axios";
// import { createContext, ReactNode, useContext, useEffect } from "react";

// type AppContextProviderProps = {
//   children: ReactNode;
// };

// type AppContextProps = {
//   getProducts: [];
// };

// const API = "http://localhost:3000/api/products";
// const AppContext = createContext({} as AppContextProps);

// // Global Provider
// const AppProvider = ({ children }: AppContextProviderProps) => {
//   async function getProducts(url) {
//     const req: AxiosResponse = await axios.get(url);
//     const products = await req.data;
//     // console.log(products);
//     return products;
//   }

//   useEffect(() => {
//     getProducts(API);
//   }, []);
//   return (
//     <AppContext.Provider value={getProducts}>{children}</AppContext.Provider>
//   );
// };

// // Custom Hook

// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };
