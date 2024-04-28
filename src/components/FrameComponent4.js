import FrameComponent4 from "./FrameComponent5";

const FrameComponent3 = () => {
  return (
    <div className="w-[90rem] relative bg-pink h-[48.688rem] text-left text-[2.25rem] text-gray-200 font-poppins" 
    style={{
      width:"100%"
    }}>
      <img
        className="absolute h-[20.83%] w-[21.94%] top-[-5.52%] right-[-0.42%] bottom-[84.69%] left-[78.47%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <img
        className="absolute h-[38%] w-[21.47%] top-[-10.01%] right-[82.01%] bottom-[72.02%] left-[-3.47%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/group1@2x.png"
      />
      <div className="absolute top-[3.25rem] left-[0rem] w-[90rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
        <b className="relative tracking-[0.15em] uppercase">Befits of Ayurja</b>
      </div>
      <div className="absolute top-[10.875rem] left-[4.813rem] flex flex-row items-center justify-start gap-[6.062rem] text-[1.25rem] font-roboto">
        <div className="w-[32.5rem] relative rounded-3xs h-[32.5rem] bg-[url('/public/frame-166962@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[4.688rem] left-[11.938rem] w-[17.919rem] h-[20.625rem] object-cover"
            alt=""
            src="/group-1000002118@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[6.812rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
              <div className="w-[35.813rem] relative text-[2.25rem] tracking-[0.23em] uppercase inline-block [text-shadow:1px_0_0_#3d2219,_0_1px_0_#3d2219,_-1px_0_0_#3d2219,_0_-1px_0_#3d2219]">
                Jiva Rasa Elixir
              </div>
              <div className="relative tracking-[0.09em] font-baskervville [text-shadow:0.5px_0_0_#3d2219,_0_0.5px_0_#3d2219,_-0.5px_0_0_#3d2219,_0_-0.5px_0_#3d2219]">
                Ayurja's Rabbit Blood hair Oil for Intense Hair Growth
              </div>
              <FrameComponent4
                promotesBloodCirculationI="Promotes blood circulation in the scalp."
                providesEssentialNutrient="Provides essential nutrients for healthier hair."
                revitalizesDullAndDamaged="Revitalizes dull and damaged hair."
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[1.25rem]">
            <img
              className="w-[1.688rem] relative h-[1.688rem]"
              alt=""
              src="/active.svg"
            />
            <div className="w-[0.688rem] relative rounded-[50%] bg-gray-200 h-[0.688rem]" />
            <div className="w-[0.688rem] relative rounded-[50%] bg-gray-200 h-[0.688rem]" />
            <div className="w-[0.688rem] relative rounded-[50%] bg-gray-200 h-[0.688rem]" />
          </div>
        </div>
      </div>
      <img
        className="absolute h-[22.95%] w-[13.58%] top-[77.02%] right-[0.1%] bottom-[0.03%] left-[86.32%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group2.svg"
      />
    </div>
  );
};

export default FrameComponent3;
