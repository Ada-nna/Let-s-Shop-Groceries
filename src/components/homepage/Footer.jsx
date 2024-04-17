import { FooterLinks } from "./FooterLinks";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-[3rem] lg:mt-[5rem] bg-slate-100 h-[20.2rem] lg:h-[26.4rem] lg:p-[4rem] space-y-7 flex flex-col justify-center">
      <div className="flex justify-center">
        <img
          src={Logo}
          alt="Footer Logo"
          className="w-[6.5rem] lg:w-[12.5rem]"
        />
      </div>
      <div className="">
        <p className="text-center text-[12px] lg:text-[16px] mb-[1.5rem] lg:mb-[3rem] text-neutral-800 font-medium italic">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
          Incidunt consequuntur amet culpa cum itaque neque.
        </p>
        <ul className="flex space-x-2 lg:space-x-10 justify-center font-medium underline lg:no-underline lg:font-bold text-[14px] lg:text-[16px]">
          {FooterLinks.map((link, index) => (
            <li key={index}>
              {" "}
              <Link to="./">{link.text}</Link>{" "}
            </li>
          ))}
        </ul>
        <ul className="flex justify-center items-center space-x-8 mt-[1.5rem] lg:mt-[3rem]">
          <li className="bg-[#198057] hover:bg-[#2b986c] active:bg-[#1f7626] p-2 rounded-full">
            <Link to="/">
              <Facebook color="#ffffff" size="18px" />
            </Link>
          </li>
          <li className="bg-[#198057] hover:bg-[#2b986c] active:bg-[#1f7626] p-2 rounded-full">
            <Link to="/">
              <Github color="#ffffff" size="18px" />
            </Link>
          </li>
          <li className="bg-[#198057] hover:bg-[#2b986c] active:bg-[#1f7626] p-2 rounded-full">
            <Link to="/">
              <Linkedin color="#ffffff" size="18px" />
            </Link>
          </li>
          <li className="bg-[#198057] hover:bg-[#2b986c] active:bg-[#1f7626] p-2 rounded-full">
            <Link to="/">
              <Twitter color="#ffffff" size="18px" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
