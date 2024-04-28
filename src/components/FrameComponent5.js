const FrameComponent4 = ({
  promotesBloodCirculationI,
  providesEssentialNutrient,
  revitalizesDullAndDamaged,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[1.187rem] text-left text-[1.25rem] text-gray-200 font-belleza">
      <div className="flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/checkcircle.svg"
        />
        <div className="w-[36.25rem] relative leading-[1.875rem] inline-block shrink-0">
          {promotesBloodCirculationI}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/checkcircle.svg"
        />
        <div className="w-[36.25rem] relative leading-[1.875rem] inline-block shrink-0">
          {providesEssentialNutrient}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/checkcircle.svg"
        />
        <div className="w-[36.25rem] relative leading-[1.875rem] inline-block shrink-0">
          {revitalizesDullAndDamaged}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/checkcircle.svg"
        />
        <div className="w-[36.25rem] relative leading-[1.875rem] inline-block shrink-0">
          Restores natural color and vibrancy, reducing white or grey hues.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
