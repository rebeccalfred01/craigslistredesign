import { useState, useEffect } from "react";
import ImageCarousel from "../imagecarousel/imagecarousel.component";
import { ArrowLeft, ArrowRight } from "../../assets/svg/arrow.svg";

const Carousel = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [shownImages, setShownImages] = useState([]);

  const NUM_IMAGES = 5;
  const data = props.data;

  useEffect(() => {
    setShownImages(data.slice(0, NUM_IMAGES));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setShownImages(data.slice(carouselIndex, carouselIndex + NUM_IMAGES));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselIndex]);

  const next = () => {
    if (carouselIndex + NUM_IMAGES >= data.length) {
      return;
    }
    setCarouselIndex(carouselIndex + NUM_IMAGES);
  };

  const prev = () => {
    if (carouselIndex - NUM_IMAGES < 0) {
      return;
    }
    setCarouselIndex(carouselIndex - NUM_IMAGES);
  };

  return (
    <div className="relative clearfix mt-2 mb-4 mx-10 flex align-center justify-between flex-row flex-wrap">
      <div className="mx-4 mt-4 mb-2 border-0">{props.categoryHeading}</div>
      <p className="basis-full invisible" />
      <div className="flex overflow-x-auto relative">
        <div className="flex w-full z-100 justify-between absolute top-24">
          <button
            className="translate-x-5 inline-block m-auto rounded-full w-7 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300"
            onClick={() => prev()}
          >
            <ArrowLeft />
          </button>
          <button
            className="-translate-x-5 inline-block m-auto rounded-full w-7 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300"
            onClick={() => next()}
          >
            <ArrowRight />
          </button>
        </div>
        <ImageCarousel data={shownImages} subCategory={props.subCategory} />
      </div>
    </div>
  );
};

export default Carousel;
