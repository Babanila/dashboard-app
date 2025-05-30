import { AxiosInstance, GenericAbortSignal } from 'axios';
import { PAGE_SIZE } from '@/utils/constant';

const BASE_URL = import.meta.env.VITE_APP_SERVER_URL || '';

export const createClient = (axios: AxiosInstance, baseUrl: string = BASE_URL) => {
  const getAllProducts = async (signal: GenericAbortSignal) => {
    // Check query in session storage
    const storedProducts = sessionStorage.getItem("all-products");

    if (storedProducts) {
      return JSON.parse(storedProducts);
    }

    const url = `${baseUrl}/api/v1/products`;

    try {
      const response = await axios.get(url, { signal });

      if (response.data.Error) {
        throw new Error(response.data.Error);
      }

      const result = response.data.Search?.slice(0, PAGE_SIZE) || [];
      sessionStorage.setItem("all-products", JSON.stringify(result));
      return result;
    } catch (error) {
      console.error(error);
      return `Error fetching products`;
    }
  };

  const getProducts = async (query: string, limit: number, skip: number, signal: GenericAbortSignal) => {
    // Check query in session storage
    const storedQuery = sessionStorage.getItem(query);

    if (storedQuery) {
      return JSON.parse(storedQuery);
    }

    const url = `${baseUrl}/api/v1/products/search?name=${query}&limit=${limit}&skip=${skip}`;
    const encodedUrl = encodeURI(url);

    try {
      const response = await axios.get(encodedUrl, { signal });

      if (response.data.Error) {
        throw new Error(response.data.Error);
      }

      const result = response.data.Search?.slice(0, PAGE_SIZE) || [];
      sessionStorage.setItem(query, JSON.stringify(result));
      return result;
    } catch (error) {
      console.error(error);
      return `Error searching for product with query: ${query}`;
    }
  };

  const getProductDetails = async (id: string, signal: GenericAbortSignal) => {
    // Check product ID in local storage
    const productStored = localStorage.getItem(id);

    if (productStored) {
      return JSON.parse(productStored);
    }

    const url = `${baseUrl}/api/v1/products/${id}`;

    try {
      const response = await axios.get(url, { signal });

      if (response.data.Error) {
        throw new Error(response.data.Error);
      }

      localStorage.setItem(id, JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
      return `Error fetching product details with id: ${id}`;
    }
  };

  return { getAllProducts, getProducts, getProductDetails };
};
