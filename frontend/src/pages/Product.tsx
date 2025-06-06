import Button from "@/components/Button";
import LoadingSpinner from "@/components/LoadingSpinner";
import { DisplayReviews } from "@/components/Review";
import { useProductDetails } from "@/hooks/useProduct";
import type { ProductDetailsProps } from "@/types";
import type { FC, ReactNode } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const Product: FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { isLoading, error, productDetails } = useProductDetails(id);

	const handleBack = () => {
		navigate(-1);
	};

	const handleAddToCart = () => {
		console.log("Cart button clicked!!!");
	};

	return (
		<div className="h-full flex flex-col justify-center items-center space-y-8 bg-primary">
			{productDetails && <ProductCard product={productDetails} />}

			{isLoading && (
				<div className="flex justify-center">
					<LoadingSpinner size="w-15 h-15" />
				</div>
			)}

			{error && !isLoading && (
				<p className="flex justify-center text-bred">
					Error loading product details
				</p>
			)}

			<div className="flex flex-col-reverse justify-center space-y-reverse space-y-4 mb-4 md:flex-row md:space-y-0 md:space-x-8 md:mb-12">
				<Button
					className="w-35 bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-bgreen transition cursor-pointer"
					onClick={handleBack}
				>
					Back
				</Button>

				<Button
					className="w-35 bg-bgreen text-primary font-semibold px-6 py-3 rounded-lg hover:bg-secondary transition cursor-pointer"
					onClick={handleAddToCart}
				>
					Add to cart
				</Button>
			</div>
		</div>
	);
};

export default Product;

export const ProductCard: FC<{ product: ProductDetailsProps }> = ({
	product,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = product.images;

	const onChangeImage = (direction: "previous" | "next") => {
		setCurrentImageIndex((prev) => {
			const lastIndex = images.length - 1;
			if (direction === "previous") return prev === 0 ? lastIndex : prev - 1;
			return prev === lastIndex ? 0 : prev + 1;
		});
	};

	return (
		<div className="w-full max-w-5xl mx-auto bg-secondary rounded-lg shadow-lg overflow-hidden border border-light-gray2 p-6 my-6 flex flex-col items-center justify-center md:flex-row md:gap-6">
			<div className="relative w-full md:w-1/2 flex items-center justify-center">
				<img
					className="object-contain h-80 w-full rounded-md"
					src={images[currentImageIndex]}
					alt={product.title}
				/>
				{images.length > 1 && (
					<>
						<Button
							onClick={() => onChangeImage("previous")}
							className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-secondary hover:bg-bgreen p-2 rounded-full"
						>
							&lt;
						</Button>
						<Button
							onClick={() => onChangeImage("next")}
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-secondary hover:bg-bgreen p-2 rounded-full"
						>
							&gt;
						</Button>
					</>
				)}
			</div>

			<div className="mt-4 md:mt-0 md:w-1/2 flex flex-col gap-4">
				<h1 className="text-2xl font-bold text-primary">{product.title}</h1>
				<p className="text-sm text-light-gray5">By {product.brand}</p>
				<p className="text-base text-primary leading-relaxed">
					{product.description}
				</p>

				<div className="text-lg text-primary font-medium">
					${product.price}{" "}
					<span className="text-bred font-semibold">
						({product.discountPercentage}% off)
					</span>
				</div>

				<div className="text-sm space-y-1 text-primary-one">
					<ListTile
						inputKey="Availability"
						value={
							<span className="text-bgreen font-medium">
								{product.availabilityStatus}
							</span>
						}
					/>
					<ListTile inputKey="Quantity Available" value={product.stock} />
					<ListTile inputKey="SKU" value={product.sku} />
					<ListTile inputKey="Rating" value={`${product.rating} / 5`} />
				</div>

				<div className="text-sm space-y-2 text-primary-one">
					<ListTile inputKey="Shipping" value={product.shippingInformation} />
					<ListTile inputKey="Warranty" value={product.warrantyInformation} />
					<ListTile inputKey="Return Policy" value={product.returnPolicy} />
				</div>

				<DisplayReviews reviews={product.reviews} />
			</div>
		</div>
	);
};

type ListTileProps = {
	inputKey: string;
	value: ReactNode;
};

export const ListTile: FC<ListTileProps> = ({ inputKey, value }) => {
	return (
		<p>
			<strong>{inputKey}:</strong> {value}
		</p>
	);
};
