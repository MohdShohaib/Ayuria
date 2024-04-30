import FrameComponent6 from "../components/FrameComponent6";
import HomeSection from "../components/HomeSection";
import FrameComponent3 from "../components/FrameComponent4";
import FrameComponent1 from "../components/Product";
import Slider from "../components/Slider";
import FrameComponent from "../components/FrameComponent1";
import FrameComponent7 from "../components/FrameComponent";
import About from "../components/About";
import Product from "../components/Product";

const Ayurja = ({setSelected}) => {
  return (
    <div id="Home" className="relative bg-white w-full flex flex-col items-start justify-start text-left text-[3rem] text-gray-200 font-poppins">
      <div className="w-[100%] relative bg-white h-[52.5rem] overflow-hidden shrink-0">
        <div className="absolute top-[13.025rem] left-[32.313rem] w-[24.875rem] h-[20.725rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[24.875rem] h-[20.725rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[24.875rem] h-[20.725rem]" />
          </div>
        </div>
        <FrameComponent6 />
        <HomeSection />
      </div>
      <FrameComponent3 />
      <Product setSelected={setSelected}/>
      {/* <Slider /> */}
      <FrameComponent />
      <About/>
      <FrameComponent7 />
    </div>
  );
};

export default Ayurja;
