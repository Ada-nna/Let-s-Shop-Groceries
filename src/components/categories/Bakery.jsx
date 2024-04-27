import ProductUnavailable from "./ProductUnavailable";
import Loafers from "../../assets/images/bread.png";

const Bakery = () => {
  return (
    <>
      <ProductUnavailable heading="Bakery" headingImg={Loafers} />
    </>
  );
};

export default Bakery;
