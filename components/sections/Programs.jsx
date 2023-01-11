import Image from "next/image";
import chev from "../../public/assets/right-chev.svg";

const Programs = () => {
  return (
    <div>
      <div className="max-w-[1170px] mx-auto mt-[25px]">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(() => {
            return (
              <div className="flex flex-col justify-center gap-4">
                <img
                  className="max-w-[293px]"
                  src="https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335"
                  alt="program"
                />
                <p className="text-lg text-gray">Digital services</p>
                <ul className="flex flex-col items-center space-y-4">
                  {[1, 2, 3, 4, 5].map(() => {
                    return (
                      <li className="flex items-center gap-1">
                        <Image src={chev} alt="chevron" />
                        <p>C@MPUS - campus management and lectures</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-20">
          <button className="uppercase bg-blue font-semibold mb-[15px] text-white py-[16px] px-[35px]">
            study programs'webpages for students
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;