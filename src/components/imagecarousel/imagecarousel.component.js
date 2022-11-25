import React from "react";
import ImageUnitAds from "../imageUnitAds/imageUnitAds.component";
import generateKey from "../../utils/generateKey.helper";
import ImageUnitSubCategory from "../imageUnitSubCategory/imageUnitSubCategory.component";

const ImageCarousel = (props) => {
  const render = () => {
    if (props.subCategory === true) {
      return props.data.map((item) => {
        return (
          <ImageUnitSubCategory
            imagePath={item.imageUrl}
            alt={item.alt}
            key={generateKey()}
            text={item.title}
          />
        );
      });
    } else {
      return props.data.map((item) => {
        return (
          <ImageUnitAds
            imagePath={item.imageUrl}
            alt={item.alt}
            key={generateKey()}
            text={item.title}
          />
        );
      });
    }
  };

  return (
    <div className="justify-center relative">
      <div className="flex relative justify-center align-center">{render()}</div>
    </div>
  );
};

export default ImageCarousel;
