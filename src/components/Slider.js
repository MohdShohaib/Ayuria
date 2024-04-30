import { Link } from "react-router-dom/dist";

const Slider = ({Selected}) => {
  return (
    <div
    id="Detail"
    style={{
      width:"100%",
      height:'100vh'
    }}
     className=" [background:linear-gradient(#fff,_#fff),_#fff] h-[46.313rem] flex flex-row items-center justify-start gap-[5.812rem] text-left text-[1rem] text-gray-200 font-poppins">
      <div style={{backgroundColor:Selected.propBackgroundColor}} className="self-stretch w-[42.125rem] bg-pink flex flex-row items-start justify-start">
        <img
        style={{
          padding:"10rem"
        }}
          className="flex-1 relative max-w-full overflow-hidden  object-cover"
          alt=""
          src={Selected?.jivaRasaElixir1}
        />
      </div>
      <div className="w-[42.063rem] flex flex-col items-start justify-start gap-[1.312rem]">
        <div className="flex flex-row items-center justify-center">
          <div className="relative">AYURJA</div>
        </div>
        <div className="flex flex-row items-center justify-center text-[2.875rem]">
          <b className="relative">{Selected?.jivaRasa}</b>
        </div>
        <div className="flex flex-row items-center justify-center font-roboto">
          <div className="relative [text-decoration:underline] tracking-[0.05em]">
            {Selected?.rabbitBloodHairOil}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center font-belleza">
          <div className="w-[32.188rem] relative leading-[1.438rem] inline-block shrink-0">
            Elevate your haircare routine with our exclusive hair elixir,
            featuring a powerful fusion of Pure Rabbit Blood and potent
            botanicals like Hibiscus, Bhringraj, and Neem. Crafted with a
            nourishing blend of Coconut, Castor, and Almond oils, our formula
            stimulates hair growth, reduces split ends, and reveals your hair's
            natural shine. Experience the magic of nature for vibrant,
            healthy-looking hair.
          </div>
        </div>
        <div className="relative text-[1.75rem] font-medium">Rs. 600.00</div>
        <div className="flex flex-row items-center justify-start gap-[1.625rem]">
          <div className="relative">Quantity</div>
          <div className="w-[2.75rem] rounded-3xs bg-gray-200 flex flex-col items-center justify-center p-[0.625rem] box-border text-white">
            <div className="relative leading-[100%]">-</div>
          </div>
          <div>1</div>
          <div className="w-[2.75rem] rounded-3xs bg-gray-200 flex flex-col items-center justify-center p-[0.625rem] box-border text-white">
            <div className="relative leading-[100%]">+</div>
          </div>
        </div>
        <div className="flex gap-[0.5rem]" >
        <Link to='/'
        style={{
         border:' 2px solid #3D2219',
         textDecoration:"none"
        }}
         className="w-[13.188rem] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.15)] rounded-3xs  h-[3.5rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-center ">
          <p className="relative leading-[100%]  text-gray-200">Back</p>
        </Link>
        <Link to='https://www.amazon.in/' target="_blank" style={{textDecoration:"none"}} className="w-[13.188rem] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-gray-200 h-[3.5rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-center text-white">
          <p  style={{textDecoration:"none"}}  className="relative leading-[100%] text-white">Buy Now</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
