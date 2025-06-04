import { useEffect, useState } from "react";
import axios from "axios";
import { createClient } from "@/api/productsClient";
import { ProductDetailsProps } from "@/types";

const client = createClient(axios);

export const useProductSearch = (
	query: string,
	limit: number = 30,
	skip: number = 0,
) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [products, setProducts] = useState<ProductDetailsProps[]>([]);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		setError(null);
		setIsLoading(true);

		const fetchMovies = async () => {
			if (!query) {
				setProducts([]);
				return;
			}

			const response = await client.getProducts(query, limit, skip, signal);

			if (typeof response === "string") {
				setError(response);
			} else {
				setProducts(response);
				setError(null);
			}
		};

		fetchMovies().finally(() => {
			setIsLoading(false);
		});

		return () => {
			controller.abort();
		};
	}, [query, limit, skip]);

	return {
		isLoading,
		error,
		products,
	};
};
