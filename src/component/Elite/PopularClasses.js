import Link from "next/link";
import React from "react";

const PopularClasses = () => {
  const courseCard = [
    {
      img: "/image/course/dsaPython1.jpg",
      title: "Data Structures and Algorithms in Python",
      desc: "Learn the essential data structures and algorithms in Python, a versatile language. This course covers core concepts, equipping you with the skills to solve technical problems and prepare for interviews.",
      link: "/ep/DSAPython",
    },
    {
      img: "/image/course/DSAJava.webp",
      title: "Data Structures and Algorithms in Java",
      desc: "Explore data structures and algorithms in Java, a leading language. This course builds your foundation, crucial for backend development, ensuring you can handle large-scale.",
      link: "/ep/DSAJava",
    },
    {
      img: "/image/course/dasC++.webp",
      title: "Data Structures and Algorithms in C++",
      desc: "Delve into data structures and algorithms using C++, a powerful language. This course provides a thorough understanding of core principles, essential for efficient problem-solving.",
      link: "/ep/DSACPP",
    },
    {
      img: "/image/course/UIUX.webp",
      title: "UI/UX",
      desc: "Explore the essentials of UI/UX design, where you'll learn to create intuitive and user-friendly interfaces. This course covers user behavior, wireframing, prototyping, and the tools needed to design impactful digital experiences.",
      link: "/ep/uiux",
    },
    {
      img: "/image/course/DigiMrkt.webp",
      title: "Digital Marketing",
      desc: "Master the art of digital marketing with a focus on effective strategies. This course covers SEO, social media, and more, equipping you with the knowledge to engage audiences and drive results.",
      link: "/ep/digitalmarketing",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="max-w-[1300px] max-[1300px]:px-[50px] max-[1300px]:w-full px-5 py-10 text-center max-[550px]:p-[20px] bg-[#f4f8fb]">
          <div>
            <h2 className="text-[28px] font-semibold mb-[10px]">
              Our Most Popular Class
            </h2>
            <p className="text-[16px] mb-[40px] text-[#666]">
              Let's join our famous class, the knowledge provided will
              definitely be useful for you.
            </p>
          </div>

          <div className="relative flex items-center">
            <div className="flex overflow-x-scroll py-[20px] gap-[20px] scroll-smooth">
              {courseCard.map((data, index) => (
                <>
                  <div
                    key={index}
                    className="bg-white rounded-lg min-w-[300px] p-[15px] flex flex-col justify-between text-left "
                    style={{
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={data?.img}
                      className="w-full rounded-lg mb-[15px] object-contain"
                    />

                    <div className="px-[10px] text-center flex flex-col justify-between grow">
                      <h3 className="text-lg font-semibold mb-[10px]">
                        {data?.title}
                      </h3>

                      <div className="grow mb-[15px]">
                        <p className="text-sm text-[#666] mb-[15px]">
                          {data?.desc}
                        </p>
                      </div>
                      <div>
                        <Link href={data?.link}>
                          <button className="px-5 py-[10px] bg-[rgb(0,149,255)] text-white rounded-md cursor-pointer">
                            View Program
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className=" text-center mt-[20px]">
            <Link
              href="/"
              className="bg-[#3498db] text-white px-5 py-[10px] rounded-[50px] font-semibold"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularClasses;
