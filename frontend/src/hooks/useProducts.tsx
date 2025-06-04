import { createClient } from "@/api/productsClient";
import type { ProductDetailsProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const client = createClient(axios);

export const useProducts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [products, setProducts] = useState<ProductDetailsProps[] | []>([]);

	useEffect(() => {
		setError(null);
		setIsLoading(true);

		const fetchProductDetails = async () => {
			const response = await client.getAllProducts();

			if (typeof response === "string") {
				setError(response);
			} else {
				setProducts(response);
				setError(null);
			}
		};

		fetchProductDetails().finally(() => {
			setIsLoading(false);
		});

		return () => {};
	}, []);

	return {
		isLoading,
		error,
		products,
	};
};
