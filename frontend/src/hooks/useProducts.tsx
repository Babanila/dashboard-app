import { useEffect, useState } from 'react';
import axios from 'axios';
import { createClient } from '@/api/productsClient';
import { ProductDetailsProps } from '@/types';

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

      if (typeof response === 'string') {
        setError(response);
      } else {
        setProducts(response);
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
