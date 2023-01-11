import Image from "next/image";
import chevron from "../../public/assets/chevron.svg";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[1170px] mx-auto flex  relative gap-24 bg-blue_sky">
        <div className="px-[30px] py-20 space-y-6 flex flex-col">
          <h1 className="text-[32px] text-dark_gray font-bold">Students</h1>
          <p className="text-dark_gray text-[17px] font-normal max-w-[660px]">
            Important news, links, documents, and tips for students of the
            University of Stuttgart: This page offers information on your
            studies
          </p>
        </div>
        <div className="uppercase absolute top-10 right-12 w-[270px] h-[270px] rounded-full bg-gray">
          <div className="flex flex-col items-center space-y-20">
            <p className="text-white font-bold max-w-[210px] text-left pt-28 text-sm">
              information for prospective students
            </p>
            <Image className="text-center" src={chevron} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
