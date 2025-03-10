"use client";
import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "Why should I learn this course from It Nova?",
      answer:
        "It Nova's training will give you hands-on experience in mastering the key concepts and skills required for your chosen field. You will learn both basic and advanced concepts, guided by industry experts. Upon successful completion, you will receive a course completion certificate from It Nova.",
    },
    {
      question: "What other courses does It Nova offer in this field?",
      answer:
        "It Nova offers a wide range of courses in related fields such as data science, big data, machine learning, AI, and more.",
    },
    {
      question: "Does It Nova provide free resources?",
      answer:
        "Yes, It Nova provides a variety of free resources to help you get started in your chosen field.",
    },

    {
      question:
        "Does It Nova provide any practice tests as part of this training program?",
      answer:
        "Yes, we provide practice tests to help you prepare for your exams.",
    },
    {
      question:
        "What job roles can I apply for after the completion of this course?",
      answer:
        "Upon completion, you can apply for various roles related to your course, such as software developer, data analyst, and more.",
    },

    {
      question: "Do you provide live courses or pre-recorded videos?",
      answer: "We provide both live sessions and pre-recorded videos.",
    },
    {
      question:
        "Which are the top companies that hire professionals in this field?",
      answer:
        "UTop companies in the industry hire professionals with expertise in the field you're studying. Specific companies will depend on the course content.",
    },
    {
      question: "How do I enroll in this course?",
      answer:
        "You can enroll by clicking on the enroll button on our website and completing the registration process.",
    },
    {
      question: "What if I miss a session of this course?",
      answer:
        "You can access the recorded session and catch up on what you missed.",
    },

    {
      question:
        "How many 1:1 technical sessions am I allowed to have during a month?",
      answer:
        "You are allowed to have a maximum of 4 1:1 technical sessions per month.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className="py-10 px-5 w-full mx-auto bg-[#f4f8fb]">
        <div className="bg-white p-5 mx-auto max-w-[1300px]">
          <h2 className="text-[28px] font-bold mb-5 text-left text-[#333] ">
            FAQs
          </h2>

          <div className="">
            {faqData.map((faq, index) => (
              <>
                <div
                  key={index}
                  className="mb-[10px] border border-[#ddd] rounded-[15px] overflow-hidden w-full"
                >
                  <div
                    className={`w-full text-left ${
                      openIndex == index ? "bg-[#f0f0f0]" : "bg-[#ceebff]"
                    }  text-[#333] cursor-pointer hover:bg-[#f0f0f0] p-[15px] text-[16px] max-[550px]:text-sm flex justify-between items-center`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq?.question}
                    {openIndex == index ? (
                      <FiMinus className="text-gray" />
                    ) : (
                      <BiSolidDownArrow className="text-gray" />
                    )}
                  </div>
                  <div
                    className={`p-[15px] bg-[#f9f9f9] border-t border-[#ddd] text-sm  ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <p>{faq?.answer}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
