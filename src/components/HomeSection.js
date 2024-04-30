 import { Link } from 'react-scroll';

const HomeSection = () => {
  return (
    <div 
    style={{position:"fixed",
    background: "white",
    zIndex: "9999"}}  className=" w-[100%] flex flex-row items-center justify-between py-[0rem] px-[4.375rem] box-border text-left text-[1rem] text-black font-poppins">
      <div  className="flex flex-col items-center justify-start gap-[0.6rem]">
        <img
          className="w-[3.569rem] relative h-[4.569rem]"
          alt=""
          src="/clip-path-group.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[0.668rem]">
          <img
            className="w-[0.563rem] relative h-[0.581rem]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="w-[0.594rem] relative h-[0.563rem]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="w-[0.506rem] relative h-[0.581rem]"
            alt=""
            src="/vector2.svg"
          />
          <img
            className="w-[0.469rem] relative h-[0.563rem]"
            alt=""
            src="/vector3.svg"
          />
          <img
            className="w-[0.25rem] relative h-[0.581rem]"
            alt=""
            src="/vector4.svg"
          />
          <img
            className="w-[0.563rem] relative h-[0.581rem]"
            alt=""
            src="/vector5.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.212rem] font-sans text-[.7rem] font-bold">
          H E R B A L
          {/* <img
            className="w-[0.231rem] relative h-[0.294rem]"
            alt=""
            src="/vector6.svg"
          />
          <img
            className="w-[0.181rem] relative h-[0.294rem]"
            alt=""
            src="/vector7.svg"
          />
          <img
            className="w-[0.219rem] relative h-[0.294rem]"
            alt=""
            src="/vector8.svg"
          />
          <img
            className="w-[0.219rem] relative h-[0.294rem]"
            alt=""
            src="/vector9.svg"
          />
          <img
            className="w-[0.275rem] relative h-[0.294rem]"
            alt=""
            src="/vector10.svg"
          />
          <img
            className="w-[0.181rem] relative h-[0.294rem]"
            alt=""
            src="/vector11.svg"
          />
          <img
            className="w-[0.225rem] relative h-[0.306rem]"
            alt=""
            src="/vector12.svg"
          /> */}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[2.5rem]">
        <div className=" flex flex-row items-start justify-start gap-[3.625rem]">
        <Link  to="Home" spy={true} smooth={true} className="cursor-pointer border border-yellow-500 text-decoration-none text-black hover:bg-black hover:text-white px-4 py-2 rounded">Home</Link>
          <Link  to="About" spy={true} smooth={true} className="cursor-pointer border border-yellow-500 text-decoration-none text-black hover:bg-black hover:text-white px-4 py-2 rounded">About Us</Link>
          <Link  to="Product" spy={true} smooth={true} className="cursor-pointer border border-yellow-500 text-decoration-none text-black hover:bg-black hover:text-white px-4 py-2 rounded">Products</Link>
          <Link  to="ContactUs" spy={true} smooth={true} className="cursor-pointer border border-yellow-500 text-decoration-none text-black hover:bg-black hover:text-white px-4 py-2 rounded">Contact Us</Link>

        </div>

      </div>
    </div>
  );
};

export default HomeSection;