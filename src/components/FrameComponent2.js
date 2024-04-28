import FrameComponent2 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent5";

const FrameComponent1 = () => {
  const CardArray = [
    {
      jivaRasaElixir1: "/jiva-rasa-elixir-1@2x.png",
      jivaRasa: "Jiva Rasa ",
      rabbitBloodHairOil: "Rabbit Blood Hair Oil",
    },
    {
      jivaRasaElixir1: "/veda-rasa-elixir-1@2x.png",
      jivaRasa: "Veda Rasa ",
      rabbitBloodHairOil: "Herbal Hair Oil",
      propBackgroundColor: "#d8f1b7",
    },
    {
      jivaRasaElixir1: "/glow-dazzle-1@2x.png",
      jivaRasa: "Glow Dazzle",
      rabbitBloodHairOil: " Skin Radiance Powder",
      propBackgroundColor: "#FFFDCF",
    },
    {
      jivaRasaElixir1: "/veda-rasa-elixir-1@2x.png",
      jivaRasa: "Glow Dazzle",
      rabbitBloodHairOil: " Skin Radiance Powder",
      propBackgroundColor: "#FFFDCF",
    },
  ];

  return (
    <div className=" bg-whitesmoke h-[85.938rem] flex flex-col items-center justify-center gap-[4.187rem] text-center text-[2.875rem] text-gray-200 font-poppins"
    style={{
      width:"100%"
    }}>
      <div className=" flex flex-col items-center justify-start gap-[1.25rem]">
        <b className="relative tracking-[0.08em] uppercase">Our PRODUCTS</b>
        <div className="w-[55.625rem] relative text-[1.5rem] leading-[2.125rem] font-belleza inline-block">
          Experience the transformative power of Ayurja's premium skincare and
          haircare products, crafted with natural ingredients to rejuvenate and
          revitalize your beauty routine.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[5.25rem] text-left text-[1.25rem]">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
          className=" gap-[2.5rem]"
        >
          {CardArray.map((el) => {
            return (
              <FrameComponent2
                jivaRasaElixir1={el.jivaRasaElixir1}
                jivaRasa={el.jivaRasa}
                rabbitBloodHairOil={el.rabbitBloodHairOil}
                propBackgroundColor={el.propBackgroundColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
