import ProductUnavailable from "./ProductUnavailable";
import PCare from "../../assets/images/personal-care.png";

const PersonalCare = () => {
  return (
    <>
      <ProductUnavailable heading="PersonalCare" headingImg={PCare} />
    </>
  );
};

export default PersonalCare;
