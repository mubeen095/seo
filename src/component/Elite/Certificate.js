import React from "react";

const Certificate = () => {
  return (
    <>
      <div className="p-[40px] max-[1024px]:flex-col flex justify-between items-center max-[1024px]:items-start max-[1300px]:px-[50px] max-[550px]:p-[20px] max-[1300px]:w-full max-w-[1300px] mx-auto bg-[#101630] text-white">
        <div className="max-w-[60%] max-[1024px]:max-w-full text-white">
          <h2 className="text-[28px] font-[600] mb-[20px]">
            Earn a certificate of completion
          </h2>
          <p className="text-[16px] mb-[30px]">
            Show your network you've done the work by earning a certificate of
            completion for each course or path you finish.
          </p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-4">
              <img src="/image/hand22.svg" />
              <div>
                <h3 className="text-lg mb-[5px] font-[500]">Show Proof</h3>
                <p className="text-sm">
                  Receive a certificate that demonstrates you’ve completed a
                  course or path.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src="/image/buildConnection.svg" />
              <div>
                <h3 className="text-lg mb-[5px] font-[500]">
                  Build a collection
                </h3>
                <p className="text-sm">
                  The more courses and paths you complete, the more certificates
                  you collect.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src="/image/shareNetwork.svg" />
              <div>
                <h3 className="text-lg mb-[5px] font-[500]">
                  Share with your network
                </h3>
                <p className="text-sm">
                  Easily add certificates of completion to your LinkedIn profile
                  to share your accomplishments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[35%] max-[1024px]:max-w-full flex justify-center max-[1024px]:mt-[50px]">
          <img
            src="/image/Cource-cmp.png"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Certificate;
