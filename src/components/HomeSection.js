const HomeSection = () => {
  return (
    <div className="absolute top-[1.813rem] left-[0rem] w-[100%] flex flex-row items-center justify-between py-[0rem] px-[4.375rem] box-border text-left text-[1rem] text-black font-poppins">
      <div className="flex flex-col items-center justify-start gap-[0.6rem]">
        <img
          className="w-[4.569rem] relative h-[4.569rem]"
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
        <div className="flex flex-row items-start justify-start gap-[0.212rem]">
          <img
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
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[2.5rem]">
        {/* <div className="flex flex-row items-start justify-start gap-[3.625rem]">
          <div className="relative">Home</div>
          <div className="relative">About Us</div>
          <div className="relative">Products</div>
        </div> */}
        <button className="btn btn-outline-black w-[9.5rem] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.15)] rounded-3xs h-[2.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-center text-white">
          <div className="relative leading-[100%]">Home</div>
        </button>
        <button className="w-[9.5rem] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.15)] rounded-3xs  h-[2.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-center text-white">
          <div className="relative leading-[100%]">About</div>
        </button>
        <button className="w-[9.5rem] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.15)] rounded-3xs h-[2.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-center text-white">
          <div className="relative leading-[100%]">Products</div>
        </button>
        <button className="w-[9.5rem] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.15)] rounded-3xs h-[2.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-center text-white">
          <div className="relative leading-[100%]">Contact Us</div>
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
