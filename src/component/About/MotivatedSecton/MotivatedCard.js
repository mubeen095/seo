import React from "react";

const Card = ({ imgUrl, para, text1, text2, text3 }) => {
  return (
    <div
      className="min-w-[435px] max-[550px]:min-w-[370px] max-[550px]:h-[410px] h-[508px] rounded-[20px]  flex flex-col p-[40px] justify-end"
      style={{
        background: `url(${imgUrl})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
    >
      <p className="text-sm font-bold text-[#FFFFFF6B] tracking-[3px]">
        {para}
      </p>
      <h5 className="text-[40px] font-bold text-white mt-[30px] leading-[43px] -tracking-[1px] max-[550px]:text-[34px] max-[550px]:leading-[37px]">
        {text1} <br /> {text2} <br /> {text3}
      </h5>
    </div>
  );
};

const MotivatedCard = () => {
  return (
    <>
      <div className="mt-[136px] w-full overflow-x-hidden ">
        <div className="flex gap-[45px] animate-customScroll whitespace-nowrap">
          <Card
            imgUrl="/image/slideCard/mcard1.png"
            para="POSITIVITY"
            text1="Dedicated"
            text2="Committed"
            text3=" Success."
          />

          <Card
            imgUrl="/image/slideCard/mcard2.png"
            para="POSITIVITY"
            text1=" Success starts with"
            text2=" learning"
            text3=""
          />

          <Card
            imgUrl="/image/slideCard/mcard3.png"
            para=" not a destination"
            text1="Dedicated"
            text2="journey,"
            text3="not a destination."
          />

          <Card
            imgUrl="/image/slideCard/mcard4.png"
            para="POSITIVITY"
            text1="Learn, adapt"
            text2="  succeed."
            text3=" Success."
          />

<Card
            imgUrl="/image/slideCard/mcard1.png"
            para="POSITIVITY"
            text1="Dedicated"
            text2="Committed"
            text3=" Success."
          />

          <Card
            imgUrl="/image/slideCard/mcard2.png"
            para="POSITIVITY"
            text1=" Success starts with"
            text2=" learning"
            text3=""
          />

          <Card
            imgUrl="/image/slideCard/mcard3.png"
            para=" not a destination"
            text1="Dedicated"
            text2="journey,"
            text3="not a destination."
          />

          <Card
            imgUrl="/image/slideCard/mcard4.png"
            para="POSITIVITY"
            text1="Learn, adapt"
            text2="  succeed."
            text3=" Success."
          />



<Card
            imgUrl="/image/slideCard/mcard1.png"
            para="POSITIVITY"
            text1="Dedicated"
            text2="Committed"
            text3=" Success."
          />

          <Card
            imgUrl="/image/slideCard/mcard2.png"
            para="POSITIVITY"
            text1=" Success starts with"
            text2=" learning"
            text3=""
          />

          <Card
            imgUrl="/image/slideCard/mcard3.png"
            para=" not a destination"
            text1="Dedicated"
            text2="journey,"
            text3="not a destination."
          />

          <Card
            imgUrl="/image/slideCard/mcard4.png"
            para="POSITIVITY"
            text1="Learn, adapt"
            text2="  succeed."
            text3=" Success."
          />
 <Card
            imgUrl="/image/slideCard/mcard1.png"
            para="POSITIVITY"
            text1="Dedicated"
            text2="Committed"
            text3=" Success."
          />

          <Card
            imgUrl="/image/slideCard/mcard2.png"
            para="POSITIVITY"
            text1=" Success starts with"
            text2=" learning"
            text3=""
          />

          <Card
            imgUrl="/image/slideCard/mcard3.png"
            para=" not a destination"
            text1="Dedicated"
            text2="journey,"
            text3="not a destination."
          />

          <Card
            imgUrl="/image/slideCard/mcard4.png"
            para="POSITIVITY"
            text1="Learn, adapt"
            text2="  succeed."
            text3=" Success."
          />
 <Card
            imgUrl="/image/slideCard/mcard1.png"
            para="POSITIVITY"
            text1="Dedicated"
            text2="Committed"
            text3=" Success."
          />

          <Card
            imgUrl="/image/slideCard/mcard2.png"
            para="POSITIVITY"
            text1=" Success starts with"
            text2=" learning"
            text3=""
          />

          <Card
            imgUrl="/image/slideCard/mcard3.png"
            para=" not a destination"
            text1="Dedicated"
            text2="journey,"
            text3="not a destination."
          />

          <Card
            imgUrl="/image/slideCard/mcard4.png"
            para="POSITIVITY"
            text1="Learn, adapt"
            text2="  succeed."
            text3=" Success."
          />

<Card
            imgUrl="/image/slideCard/mcard1.png"
            para="POSITIVITY"
            text1="Dedicated"
            text2="Committed"
            text3=" Success."
          />

          <Card
            imgUrl="/image/slideCard/mcard2.png"
            para="POSITIVITY"
            text1=" Success starts with"
            text2=" learning"
            text3=""
          />

          <Card
            imgUrl="/image/slideCard/mcard3.png"
            para=" not a destination"
            text1="Dedicated"
            text2="journey,"
            text3="not a destination."
          />

          <Card
            imgUrl="/image/slideCard/mcard4.png"
            para="POSITIVITY"
            text1="Learn, adapt"
            text2="  succeed."
            text3=" Success."
          />



        
        </div>
      </div>
    </>
  );
};

export default MotivatedCard;
