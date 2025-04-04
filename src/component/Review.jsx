import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Example data for the reviews
const reviews = [
  {
    name: 'Tanika Chakraborty', // Replace with your image path
    rating: 5,
    review: "I bought the half sleeve T-shirts as gifts and very happy that I stumbled upon this",
  },
  {
    name: 'Smriti Pratihar',
    rating: 5,
    review: "Awesome fabric quality and stitching quality. Loved it.",
  },
  {
    name: 'Nourin Parvin',
    rating: 5,
    review: "Darun quality, khub sundor, khub valo dekhte are jemon dekhechi temon peyechi.",
  },
  {
    name: 'Nourin Parvin',
    rating: 5,
    review: "Darun quality, khub sundor, khub valo dekhte are jemon dekhechi temon peyechi.",
  },
  {
    name: 'Nourin Parvin',
    rating: 5,
    review: "Darun quality, khub sundor, khub valo dekhte are jemon dekhechi temon peyechi.",
  },
  {
    name: 'Nourin Parvin',
    rating: 5,
    review: "Darun quality, khub sundor, khub valo dekhte are jemon dekhechi temon peyechi.",
  },
  {
    name: 'Nourin Parvin',
    rating: 5,
    review: "Darun quality, khub sundor, khub valo dekhte are jemon dekhechi temon peyechi.",
  },
];

const ReviewSlider = () => {
  return (
    <div className="my-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-6">Customer Reviews</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <div className="flex justify-center mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="mt-4 text-gray-700">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="text-center mt-6">
        <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
          Leave a Review
        </button>
      </div> */}
    </div>
  );
};

export default ReviewSlider;
