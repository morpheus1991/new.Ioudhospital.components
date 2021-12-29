import Image from "next/image";
import React from "react";

const QuestionsAnswer = () => {
  return (
    <div className="bg-primary py-12 px-5 lg:px-0">
      {/* wrapper */}
      <div className="flex justify-between max-w-[1240px] mx-auto items-center lg:px-5">
        {/* text area */}
        <div className="flex flex-col text-white w-[670px] text-center lg:text-left ">
          <h3 className="text-2xl md:text-3xl lg:text-40px font-bold ">
            Any questions we can answer?
          </h3>
          <p className="mt-4 lg:mt-7 text-sm lg:text-lg">
            CloudHospital is staffed with experienced, qualified specialists in
            the healthcare industry. We can help you with consultations and
            bookings with the most sought after doctors and hospitals in
            multiple countries. Our service is free and we are open 24/7.
          </p>
          <div>
            <button
              type="button"
              className="lg:text-xl mt-8 lg:mt-12 lg:w-[218px] w-[180px] h-[50px] rounded-full bg-primary text-white border-white border font-bold "
            >
              Ask a question
            </button>
          </div>
        </div>
        {/* image area */}
        <div className="hidden md:flex">
          <div>
            <Image
              width="300px"
              height="481px"
              src="/images/bottom-section02.jpeg"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAnswer;
