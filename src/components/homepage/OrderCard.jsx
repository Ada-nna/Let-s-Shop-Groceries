import DeliveryMan from "../../assets/images/bike-man.png";

const OrderCard = () => {
  return (
    <div className="h-[10.75rem] md:h-[18.75rem] mt-[5rem] lg:mt-[12rem] px-5 py-7 md:py-[3rem] md:px-[3rem] 2xl:py-[1rem] 2xl:px-[3rem] bg-slate-200 relative">
      <h1 style={{textShadow: "1px 1px 3px white"}} className="hidden md:block font-black text-[#000] leading-[4rem] 2xl:leading-[5rem] text-[24px] md:text-[60px] 2xl:text-[70px]">We deliver <br /> your grocery in 24 hrs</h1>
      <h1 style={{textShadow: "1px 1px 3px white"}} className=" md:hidden font-black text-[#000] leading-[1.6rem] text-[24px] flex items-center ">We deliver <br /> your grocery <br /> in 24 hrs</h1>
      <button
            type="button"
            className="font-bold bg-[#198057] hover:bg-[#2b986c] active:bg-[#1f7626] text-[12px] lg:text-[16px] text-[#ffffff] py-1 lg:py-4 px-4 lg:px-8 rounded-full mt-3 lg:mt-9"
          >
            Order Now
          </button>
      <div className="absolute top-[1rem] right-[1rem] md:-top-[8rem] md:right-[3rem]">
        <img src={DeliveryMan} alt="Delivery Man" className="w-[8rem] md:w-[25rem] 2xl:w-[25rem]" />
      </div>
    </div>
  );
};

export default OrderCard;
