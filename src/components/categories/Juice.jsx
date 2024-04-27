import ProductUnavailable from "./ProductUnavailable";
import MilkJuice from "../../assets/images/milk.png";

const Juice = () => {
  return (
    <>
      <ProductUnavailable heading="Juice" headingImg={MilkJuice} />
    </>
  );
};

export default Juice;