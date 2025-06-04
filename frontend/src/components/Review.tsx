import type { FC } from "react";
import { FaStar } from "react-icons/fa";

interface ReviewProps {
	reviewerName: string;
	comment: string;
	rating: number;
	date: Date | string;
}

const Review: FC<ReviewProps> = ({ reviewerName, comment, rating, date }) => {
	const currentDate = new Date(date);
	const reviewTime = currentDate.toLocaleDateString("en-GB");

	return (
		<div className="review-container p-4 mb-4 border border-light-gray2 rounded-lg shadow-sm max-w-md">
			<div className="flex items-center mb-2">
				<div className="font-semibold text-primary mr-2">{reviewerName}</div>
				<div className="flex">
					{[1, 2, 3, 4, 5].map((item) => {
						return (
							<button
								key={item}
								type="button"
								className={`${
									rating >= item ? "text-yellow-400" : "text-gray-300"
								} text-xl cursor-default}`}
							>
								<FaStar />
							</button>
						);
					})}
				</div>
			</div>
			<p className="text-light-gray5">{comment}</p>
			<p className="text-light-gray5">{reviewTime}</p>
		</div>
	);
};

export default Review;

export const DisplayReviews: FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
	return (
		<div>
			<p className="text-lg text-primary font-semibold mt-4 mb-1">Reviews</p>
			{reviews.map(({ comment, date, rating, reviewerName }: ReviewProps) => {
				return (
					<Review
						key={reviewerName}
						reviewerName={reviewerName}
						comment={comment}
						rating={rating}
						date={date}
					/>
				);
			})}
		</div>
	);
};
