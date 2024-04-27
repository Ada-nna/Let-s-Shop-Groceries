import ChickenImg from "../../assets/images/chicken.png";
import ProductUnavailable from "./ProductUnavailable";

const ChickenEgg = () => {
  return (
    <>
      <ProductUnavailable heading="Chicken & Egg" headingImg={ChickenImg} />
    </>
  );
};

export default ChickenEgg;
