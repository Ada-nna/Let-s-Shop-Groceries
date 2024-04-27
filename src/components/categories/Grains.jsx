import ProductUnavailable from "./ProductUnavailable";
import FreshGrains from "../../assets/images/grain.png";

const Grains = () => {
  return (
    <>
      <ProductUnavailable heading="Grains" headingImg={FreshGrains} />
    </>
  );
};

export default Grains;