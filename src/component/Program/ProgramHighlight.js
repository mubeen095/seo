import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border border-[rgba(211,211,211,1)] rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
      <div>
        <p className="text-sm font-bold tracking-[3px]">LEARN ONLINE</p>
        <h6 className="text-[25px] leading-[27px] text-black mt-[30px] font-bold">
          At your own Schedule
        </h6>
      </div>

      <img src="/image/program/calender_yellow.svg" className="" />

      <img
        src="/image/program/yellow_circle.svg"
        className="absolute -top-[10px] right-[66px]"
      />

      <img
        src="/image/program/yellow_circle.svg"
        className="absolute -bottom-[10px] right-[0px]"
      />
    </div>
  );
};

const ProgramHighlight = () => {
  return (
    <>
      <div className="px-[140px] mt-[97px] m-auto  max-[1439px]:px-[120px] max-[1278px]:px-[100px] max-[1024px]:px-[20px]">
        <p className="text-sm font-bold leading-[3px] text-black ">
          ABOUT PROGRAM
        </p>

        <h6 className="text-[55px] font-bold leading-[60px] -tracking-[1px] w-[257px] mt-[50px] max-[1439px]:text-[49px] max-[1439px]:leading-mt-[54px] max-[1024px]:text-[36px] max-[1024px]:w-full max-[1024px]:leading-[40px]">
          Program Highlights
        </h6>   

        <div className="mt-[75px] flex gap-[14px] flex-wrap ">
          <div className="border border-[rgba(211,211,211,1)] rounded-[20px] bg-white w-[377px] max-[1024px]:w-full p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">LEARN ONLINE</p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                At your own Schedule
              </h6>
            </div>

            <img src="/image/program/calender_yellow.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] max-[1024px]:w-full rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">LEARN ONLINE</p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                No laptop? <br />
                No problem
              </h6>
            </div>

            <img src="/image/program/mobile_green.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] max-[1024px]:w-full rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">
                PLACEMENT ASSISTANCE
              </p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                To build your <br />
                Career
              </h6>
            </div>

            <img src="/image/program/bag_blue.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] max-[1024px]:w-full rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">
                CERTIFICATE OF TRAINING
              </p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                From IT Nova <br />
                trinings
              </h6>
            </div>

            <img src="/image/program/medal_purple.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] max-[1024px]:w-full rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">
                1 PROJECT & 4 ASSIGNMENTS
              </p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                For hands <br />
                on Practice
              </h6>
            </div>

            <img src="/image/program/dumbell_orange.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] max-[1024px]:w-full rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">DOUBT CLEARING</p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                Through <br />
                Q&A Forum
              </h6>
            </div>

            <img src="/image/program/question_green.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] max-[1024px]:w-full rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">
                LEARN IN HINDI OR ENG
              </p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                As per your <br />
                choice
              </h6>
            </div>

            <img src="/image/program/medal_green.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] max-[1024px]:w-full rounded-[20px] bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">
                BEGINNER FRIENDLY
              </p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                NO prior <br />
                knowledge required
              </h6>
            </div>

            <img src="/image/program/star_yellow.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>

          <div className="border border-[rgba(211,211,211,1)] rounded-[20px] max-[1024px]:w-full bg-white w-[377px] p-[30px] flex justify-between items-center relative overflow-hidden">
            <div>
              <p className="text-sm font-bold tracking-[3px]">
                8 WEEKS DURATION
              </p>
              <h6 className="text-[25px] max-[550px]:text-lg  leading-[27px] text-black mt-[30px] font-bold">
                1Hr/ day. <br />
                Flexible Schedule
              </h6>
            </div>

            <img src="/image/program/calendar_green.svg" className="" />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -top-[10px] right-[66px]"
            />

            <img
              src="/image/program/yellow_circle.svg"
              className="absolute -bottom-[10px] right-[0px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramHighlight;
