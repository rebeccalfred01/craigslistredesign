import React from "react";
import FilterCheckbox from "../../components/filterCheckbox/filterCheckbox.component";
import Layout from "../../components/layout/Layout.component";
import PriceRange from "../../components/pricerange/priceRange.component";
import sellerType from "../../constants/sellerType.constants.json";
import displayFilters from "../../constants/displayFilters.constant.json";
import condition from "../../constants/condition.constant.json";
import ForSaleComponent from "../../components/forSale/forSale.component";
import ForSaleImage from "../../components/forsaleimagecard/forsaleimagecard.component";
import Forsaleimagerow from "../../components/forsaleimagerow/forsaleimagerow.component";
import data from "../../constants/forSaleRow1.constants.json";
import data2 from "../../constants/forSaleRow2.constants.json";
import data3 from "../../constants/forSaleRow3.constants.json";
import Sortbydropdown from "../../components/sortbydropdown/sortbydropdown.component";
import ForSaleNavBar from "../../components/forsalenavbar/forSaleNavBar.component";

const ForSale = () => {
  return (
    <Layout>
      <div className="relative bg-white flex flex-row m-auto w-auto h-full overflow-scroll ">
        <div className="mx-2 p-2 flex flex-column w-[350px] flex-wrap border-r-2">
          <div className="w-full border-b-2 h-fit">
            <FilterCheckbox title={sellerType.title} items={sellerType.items} />
          </div>
          <div className="w-full border-b-2 h-fit">
            <FilterCheckbox
              title={displayFilters.title}
              items={displayFilters.items}
            />
          </div>
          <div className="w-full border-b-2 h-fit">
            <PriceRange />
          </div>
          <div className="w-full h-fit e-500">
            <FilterCheckbox title={condition.title} items={condition.items} />
          </div>
        </div>
        <div className="flex flex-row white p-10 m-2 h-screen w-full flex-wrap justify-center">
          <ForSaleNavBar />
          <div className="w-full"></div>
          <Forsaleimagerow data={data} />
          <Forsaleimagerow data={data2} />
          <Forsaleimagerow data={data3} />
        </div>
      </div>
    </Layout>
  );
};

export default ForSale;
