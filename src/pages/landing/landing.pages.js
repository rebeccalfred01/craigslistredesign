import Carousel from "../../components/carousel/carousel.component";
import Layout from "../../components/layout/Layout.component";
import data from "../../constants/carousel.constants.json";

const Landing = (props) => {
  return (
    <Layout>
      <Carousel
        data={data}
        categoryHeading="Based on Your Preferences"
        subCategory={false}
      />
      <Carousel
        data={data}
        categoryHeading="Based on Your Preferences"
        subCategory={true}
      />
      <Carousel
        data={data}
        categoryHeading="Based on Your Preferences"
        subCategory={true}
      />
    </Layout>
  );
};

export default Landing;
