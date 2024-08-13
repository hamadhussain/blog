import Image from "next/image";
import React from "react";
import F from '../Footer/page'
import N from '../Nav/page'
const page = () => {
  return (
    <>
    <N/>
    <div className=" flex flex-col justify-center items-center px-12 gap-5">
      <Image
      
      data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2500"
        src="/Assets/About2.jpg"
        className=" rounded-sm imageBox "
        width={500}
        height={300}
      />
      <div      data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1500"><h3 className=" uppercase text-2xl text-center">
        I am a man of many colors
      </h3><br />
      <p className=" text-center px-auto">
        In this way, with ten warriors, I built a series of three steps from the
        ground to the shoulders of the topmost man. Then starting from a short
        distance behind them I ran swiftly up from one tier to the next, and
        with a final bound from the broad shoulders of the highest I clutched
        the top of the great wall and quietly drew myself to its broad expanse.
        After me I dragged six lengths of leather from an equal number of my
        warriors. These lengths we had previously fastened together, and passing
        one end to the topmost warrior I lowered the other end cautiously over
        the opposite side of the wall toward the avenue below. No one was in
        sight, so, lowering myself to the end of my leather strap, I dropped the
        remaining thirty feet to the pavement below.
      </p></div>
    </div>
    <F/>
    </>
  );
};

export default page;
