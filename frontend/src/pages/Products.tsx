import { ProductGroup } from "@/components/FeaturedProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import SearchInput from "@/components/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { useProductSearch } from "@/hooks/useProductSearch";
import { useProducts } from "@/hooks/useProducts";
import type { ChangeEvent, FC } from "react";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";

const Products: FC = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	const { isLoading, error, products } = useProducts();
	const [triggerSearch, setTriggerSearch] = useState(false);

	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const shouldSearch = triggerSearch && debouncedSearchTerm.trim().length > 0;
	const { products: filteredProducts } = useProductSearch(
		shouldSearch ? debouncedSearchTerm : "",
	);

	const displayedProducts = useMemo(() => {
		return shouldSearch ? filteredProducts : products;
	}, [shouldSearch, filteredProducts, products]);

	const handleViewProduct = (productId: number) => {
		navigate(`/products/${productId}`);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setSearchTerm(e.target.value);
		setTriggerSearch(false);
	};

	const handleSearch = useCallback(() => {
		setTriggerSearch(true);
	}, []);

	return (
		<div className="h-full flex flex-col bg-secondary py-8 space-y-16">
			<SearchInput
				value={searchTerm}
				onChange={handleChange}
				onSearch={handleSearch}
			/>

			{error && (
				<p className="flex justify-center text-bred">
					Error searching for products
				</p>
			)}

			{isLoading && (
				<div className="flex justify-center">
					<LoadingSpinner size="w-10 h-10" />
				</div>
			)}

			{triggerSearch && displayedProducts.length === 0 && (
				<p className="flex justify-center text-primary">
					Searched products not available
				</p>
			)}

			<ProductGroup
				products={displayedProducts}
				onProductView={handleViewProduct}
				total={displayedProducts.length}
			/>
		</div>
	);
};

export default Products;
