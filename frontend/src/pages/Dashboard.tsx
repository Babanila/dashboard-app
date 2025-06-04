import Button from "@/components/Button";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServiceOffers from "@/components/ServiceOffers";
import SubscriptionForm from "@/components/SubscriptionForm";
import type { FC } from "react";
import { useNavigate } from "react-router";

const Dashboard: FC = () => {
	return (
		<div className="flex flex-col">
			<WelcomeSection />
			<ServiceOffers />
			<FeaturedProducts />
			<SubscriptionForm />
		</div>
	);
};

export default Dashboard;

const WelcomeSection = () => {
	const navigate = useNavigate();

	const handleGoToProducts = () => {
		navigate("/products");
	};
	return (
		<section className="bg-primary text-secondary py-16 px-6 text-center">
			<h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to DASH</h1>
			<p className="text-lg md:text-xl mb-8">
				Your one-stop shop for premium tech, fashion, and more.
			</p>
			<Button
				className="bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-bgreen transition cursor-pointer"
				onClick={handleGoToProducts}
			>
				Shop Now
			</Button>
		</section>
	);
};
