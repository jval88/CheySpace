import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

interface CarouselProps {
  items: Array<{ id: string; content: React.ReactNode }>; // Array of items with content as React nodes
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // Ensures the carousel adapts to the content height
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="px-4 py-5">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            {item.content}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
