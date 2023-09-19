"use client";
import { createContext, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
/* import { CacheProvider } from '@chakra-ui/next-js'; */

export const DataContext = createContext();

export const Providers = ({ children }) => {
	const [data, setData] = useState({});
	return (
		<DataContext.Provider value={{ data, setData }}>
			{/* <CacheProvider> */}
			<ChakraProvider>{children}</ChakraProvider>
			{/* </CacheProvider> */}
		</DataContext.Provider>
	);
};
