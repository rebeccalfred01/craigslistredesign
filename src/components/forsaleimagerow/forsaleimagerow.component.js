import React from "react";
import ForSaleImage from "../forsaleimagecard/forsaleimagecard.component";

const Forsaleimagerow = (props) => {
  const render = () => {
    return props.data.map((item) => {
      return (
        <ForSaleImage
          imageurl={item.imageLink}
          description={item.caption}
          cost={item.cost}
          title={item.title}
        />
      );
    });
  };
  return (
    <div className="flex-row flex  items-center h-[26.5rem] max-h-max align-center">
      {render()}
    </div>
  );
};

export default Forsaleimagerow;
