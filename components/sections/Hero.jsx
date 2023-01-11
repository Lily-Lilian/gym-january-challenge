import Image from "next/image";
import chevron from "../../public/assets/chevron.svg";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[1170px] mx-auto flex sm:flex-col sm:px-4 relative px-20 gap-24 bg-blue_sky">
        <div className="px-[30px] sm:px-4 sm:py-5 py-20 space-y-6  sm:space-y-2 flex flex-col">
          <h1 className="text-[32px] sm:text-xl text-dark_gray font-bold">
            Students
          </h1>
          <p className="text-dark_gray sm:text-base text-[17px] font-normal max-w-[660px]">
            Important news, links, documents, and tips for students of the
            University of Stuttgart: This page offers information on your
            studies
          </p>
        </div>
        <div className="sm:hidden uppercase group hover:bg-white absolute top-10 right-12 w-[270px] h-[270px] rounded-full bg-gray">
          <div className="flex flex-col items-center  space-y-20">
            <p className="text-white group-hover:text-black hover:font-semibold font-bold max-w-[210px] text-left pt-28 text-sm">
              information for prospective students
            </p>
            <Image
              className="text-center text-white group-hover:text-black"
              src={chevron}
              alt="chev"
            />
          </div>
        </div>
        <div className="hidden sm:flex gap-4">
          <p className="underline pb-8">information for prospective students</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
