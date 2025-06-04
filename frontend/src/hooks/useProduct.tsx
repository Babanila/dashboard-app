import { createClient } from "@/api/productsClient";
import type { ProductDetailsProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const client = createClient(axios);

export const useProductDetails = (id: string | undefined) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [productDetails, setProductDetails] =
		useState<ProductDetailsProps | null>(null);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		setError(null);
		setIsLoading(true);

		const fetchProductDetails = async () => {
			if (!id) return;

			const response = await client.getProductDetails(id, signal);

			if (typeof response === "string") {
				setError(response);
			} else {
				setProductDetails(response);
				setError(null);
			}
		};

		fetchProductDetails().finally(() => {
			setIsLoading(false);
		});

		return () => {
			controller.abort();
		};
	}, [id]);

	return {
		isLoading,
		error,
		productDetails,
	};
};
