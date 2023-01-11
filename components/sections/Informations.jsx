import chevron from "../../public/assets/chevron.svg";
import Image from "next/image";

const Informations = () => {
  return (
    <div className="bg-blue text-white mt-12 px-20 sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 px-[40px] py-20 ">
        <div className="flex flex-col space-y-8 max-w-[466px]">
          {[1, 2, 3, 4, 5, 6, 7].map((key) => {
            return (
              <ul key={key}>
                <li className="flex items-center gap-4">
                  <Image
                    className="border hover:bg-white sm:w-[60px] sm:h-[60px] sm:p-4 w-[130px] h-[130px] p-12 border-white rounded-full"
                    src={chevron}
                    alt="chev"
                  />
                  <div className="flex flex-col">
                    <p className="text-[22px] sm:text-lg font-bold">
                      All study programs
                    </p>
                    <p>
                      On the webpages of your degree program you will find
                      information on the study program structure, …
                    </p>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="flex flex-col space-y-8">
          {[1, 2, 3, 4, 5, 6, 7].map((key) => {
            return (
              <div key={key}>
                <ul>
                  <li className="flex items-center gap-2">
                    <Image
                      className="border hover:bg-white sm:w-[60px] sm:h-[60px] sm:p-4 w-[130px] h-[130px] p-12 border-white rounded-full"
                      src={chevron}
                      alt="c"
                    />
                    <div className="flex flex-col">
                      <p className="text-[22px] sm:text-lg font-bold text-left">
                        Exam Organization
                      </p>
                      <p>
                        Enrollment formalities, orientation events and dates:
                        you will be faced with many new impressions …
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Informations;
