import Carousel from "../../components/carousel/carousel.component";
import Layout from "../../components/layout/Layout.component";
import data1 from "../../constants/forSale.constants.json";
import data2 from "../../constants/community.constants.json";
import data from "../../constants/basedOnYourPreference.constant.json";
import { useNavigate } from "react-router-dom";

const Landing = (props) => {
  let navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/for-sale");
  };

  return (
    <Layout>
      <Carousel
        data={data}
        categoryHeading="Based on Your Preferences"
        subCategory={false}
      />

      <Carousel
        onClick={() => onClickHandler()}
        data={data1}
        categoryHeading="For Sale (Please Click this)"
        subCategory={true}
      />

      <Carousel data={data2} categoryHeading="Community" subCategory={true} />
    </Layout>
  );
};

export default Landing;
