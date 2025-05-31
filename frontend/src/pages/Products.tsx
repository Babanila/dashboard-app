import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useProducts } from '@/hooks/useProducts';
import { useProductSearch } from '@/hooks/useProductSearch';
import { ProductGroup } from '@/components/FeaturedProducts';
import LoadingSpinner from '@/components/LoadingSpinner';
import SearchInput from '@/components/SearchInput';

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, error, products } = useProducts();
  const { products: filteredProducts } = useProductSearch(searchTerm);

  const displayedProducts = useMemo(() => {
    return searchTerm.trim() ? filteredProducts : products;
  }, [searchTerm, filteredProducts, products]);

  const handleViewProduct = (productId: number) => {
    navigate(`/products/${productId}`);
  };
  const handleSearch = useCallback(() => {}, []);

  return (
    <div className="h-full flex flex-col bg-secondary py-8 space-y-16">
      <SearchInput
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        onSearch={() => handleSearch()}
      />

      {error && <p className="flex justify-center text-bred">Error searching for products</p>}

      {isLoading && (
        <div className="flex justify-center">
          <LoadingSpinner size="w-10 h-10" />
        </div>
      )}

      <ProductGroup
        products={displayedProducts}
        onProductView={handleViewProduct}
        total={products.length}
      />
    </div>
  );
};

export default Products;
