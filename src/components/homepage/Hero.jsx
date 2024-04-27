import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstImg from "../../assets/images/slide1.png";
import SecondImg from "../../assets/images/slide2.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="slider-container mt-[1.5rem] lg:mt-[3rem] px-4">
      <Slider {...settings}>
        <div className="border-none rounded-[25px]">
          <img
            src={FirstImg}
            alt="First Image"
            className="h-[12.5rem] lg:h-[25rem] w-[97%] lg:w-[98%] rounded-[25px] lg:mr-[2rem]"
          />
        </div>
        <div className="border-none rounded-[25px]">
          <img
            src={SecondImg}
            alt="First Image"
            className="h-[12.5rem] lg:h-[25rem] w-[97%] rounded-[25px] lg:mr-[2rem]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
