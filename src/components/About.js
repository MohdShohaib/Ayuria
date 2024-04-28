import React from 'react'

const About = () => {
  return (
    <div id="About" style={{
        width:"100%"
      }} className="bg-oldlace flex flex-col items-start justify-start">
        <div
        style={{
          width:"100%"
        }} className=" h-[63.5rem] flex flex-col items-center justify-end pt-[0rem] px-[0rem] pb-[7.562rem] box-border gap-[1.875rem] bg-[url('/public/about-us@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="w-[89.938rem] flex flex-row items-center justify-center">
            <b className="relative tracking-[0.05em]">About Ayurja</b>
          </div>
          <div className="flex flex-col items-end justify-start gap-[2.937rem] text-center text-[1.25rem] font-roboto">
            <div className="w-[58.625rem] relative leading-[2.125rem] inline-block font-poppins">
              <b>Ayurja</b>
              <span className="font-roboto">{` proudly carries forward the esteemed legacy of `}</span>
              <b>Kerala Naturals</b>
              <span className="font-roboto">
                , a brand synonymous with excellence in natural skincare and
                haircare. With a heritage deeply rooted in Ayurveda, Ayurja
                continues to uphold the tradition of harnessing the potent
                benefits of herbal ingredients to enhance beauty and wellness.
              </span>
            </div>
            <div className="w-[58.625rem] relative leading-[2.125rem] inline-block">
              Formerly known as Kerala Naturals, Ayurja underwent a
              transformation to better align with its commitment to holistic
              Ayurvedic principles while embracing modern advancements. Despite
              the name change, Ayurja remains steadfast in its mission to
              provide premium skincare and haircare solutions that nurture and
              nourish from within.
            </div>
            <div className="w-[58.625rem] relative leading-[2.125rem] inline-block">
              At Ayurja, we believe in the power of nature to restore balance
              and vitality to the skin and hair. Our products are meticulously
              crafted using time-tested Ayurvedic formulations combined with the
              latest scientific innovations. Each product is designed to promote
              radiant skin, vibrant hair, and overall well-being.
            </div>
            <div className="w-[58.625rem] relative leading-[2.125rem] inline-block">
              With Ayurja, you can trust that you are receiving the highest
              quality products, backed by decades of expertise and a deep
              reverence for nature. Experience the transformative magic of
              Ayurveda with Ayurja, your partner in embracing natural beauty and
              wellness.
            </div>
          </div>
        </div>
      </div>
  )
}

export default About