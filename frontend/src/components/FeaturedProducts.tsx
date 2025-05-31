import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { useProducts } from '@/hooks/useProducts';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';

const FeaturedProducts: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, error, products } = useProducts();

  const handleViewProduct = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner size="w-10 h-10" />
      </div>
    );
  }

  if (error) {
    return <p className="flex justify-center text-bred">Error loading featured products</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {products?.slice(0, 3).map(({ title, description, brand, thumbnail, id }) => {
        return (
          <FeaturedProductCard
            key={id}
            id={id}
            title={title}
            thumbnail={thumbnail}
            brand={brand}
            description={description}
            onProductView={() => handleViewProduct(id)}
          />
        );
      })}
    </div>
  );
};

export default FeaturedProducts;

type FeaturedProductCardProps = {
  id: number;
  title: string;
  thumbnail: string;
  brand: string;
  description: string;
  onProductView: () => void;
};

export const FeaturedProductCard: FC<FeaturedProductCardProps> = ({
  id,
  title,
  thumbnail,
  brand,
  description,
  onProductView,
}) => {
  return (
    <div key={id} className="bg-secondary rounded-lg shadow hover:shadow-md transition p-4">
      <div className="flex justify-center items-center bg-light-gray2 h-40 rounded mb-4">
        {<img src={thumbnail} alt={`${title} image`} className="w-40 h-40" />}
      </div>
      <h3 className="font-semibold text-lg mb-2">
        {brand} {title}
      </h3>
      <p className="text-light-gray5 text-sm">{description}</p>
      <Button className="mt-4 text-primary font-medium hover:underline" onClick={onProductView}>
        View Details
      </Button>
    </div>
  );
};
