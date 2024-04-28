import { useMemo } from "react";

const FrameComponent2 = ({
  jivaRasaElixir1,
  jivaRasa,
  rabbitBloodHairOil,
  propBackgroundColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="w-[24.438rem] shadow-[0px_40px_90px_rgba(0,_0,_0,_0.06)] rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.625rem] px-[0rem] pb-[0.937rem] box-border gap-[1.375rem] text-left text-[1.25rem] text-gray-200 font-poppins">
      <div
        className="w-[22.875rem] relative rounded-3xs bg-pink h-[19.188rem]"
        style={frameDivStyle}
      >
        <img
          className="absolute top-[1.25rem] left-[8.531rem] w-[14.375rem] h-[16.75rem] object-cover"
          alt=""
          src={jivaRasaElixir1}
        />
      </div>
      <div className="w-[22.375rem] flex flex-col items-start justify-start gap-[2.562rem]">
        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="flex flex-row items-center justify-center">
            <b className="relative">{jivaRasa}</b>
          </div>
          <div className="flex flex-row items-center justify-center text-[0.75rem] text-gray-100 font-belleza">
            <div className="relative leading-[0.75rem]">
              {rabbitBloodHairOil}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[11.937rem] text-[1.5rem]">
          <div className="relative tracking-[-0.01em] leading-[1.25rem] font-medium">
            $95.50
          </div>
          <div className="relative text-[0.75rem] tracking-[-0.01em] leading-[1.25rem] text-tomato text-right">
            Order Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
