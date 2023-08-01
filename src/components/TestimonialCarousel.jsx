import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../testimonial/testimonial1.png';
import img2 from '../testimonial/testimonial2.png';
import img3 from '../testimonial/testimonial3.png';
import img4 from '../testimonial/testimonial4.png';
import img5 from '../testimonial/testimonial5.png';
import img6 from '../testimonial/testimonial6.png';
import img7 from '../testimonial/testimonial7.png';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
    {
      id: 7,
      image: img7,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Adjust the settings for large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust the settings for medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust the settings for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <img src={testimonial.image} alt="testimonial" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
