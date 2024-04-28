const Slider = () => {
  return (
    <div className="w-[90rem] [background:linear-gradient(#fff,_#fff),_#fff] h-[46.313rem] flex flex-row items-center justify-start gap-[5.812rem] text-left text-[1rem] text-gray-200 font-poppins">
      <div className="self-stretch w-[42.125rem] bg-pink flex flex-row items-start justify-start">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[46.313rem] object-cover"
          alt=""
          src="/product-box-mockup-1@2x.png"
        />
      </div>
      <div className="w-[42.063rem] flex flex-col items-start justify-start gap-[1.312rem]">
        <div className="flex flex-row items-center justify-center">
          <div className="relative">AYURJA</div>
        </div>
        <div className="flex flex-row items-center justify-center text-[2.875rem]">
          <b className="relative">Jiva Rasa Elixir</b>
        </div>
        <div className="flex flex-row items-center justify-center font-roboto">
          <div className="relative [text-decoration:underline] tracking-[0.05em]">
            DESCRIPTION
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
            <div className="relative leading-[100%]">1</div>
          </div>
        </div>
        <div className="w-[13.188rem] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-gray-200 h-[3.5rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-center text-white">
          <div className="relative leading-[100%]">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
