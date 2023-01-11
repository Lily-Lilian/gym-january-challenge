import chevron from "../../public/assets/chevron.svg";
import Image from "next/image";

const Informations = () => {
  return (
    <div className="bg-blue text-white max-w-[1170px] mx-auto mt-12">
      <div className="grid grid-cols-2 px-[40px] py-20 ">
        <div className="flex flex-col space-y-8 max-w-[466px]">
          {[1, 2, 3, 4, 5, 6, 7].map(() => {
            return (
              <ul>
                <li className="flex items-center gap-4">
                  <Image
                    className="border hover:bg-white w-[80px] h-[80px] p-6 border-white rounded-full"
                    src={chevron}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p>All study programs</p>
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
          {[1, 2, 3, 4, 5, 6, 7].map(() => {
            return (
              <div>
                <ul>
                  <li className="flex items-center gap-2">
                    <Image
                      className="border hover:bg-white w-[80px] h-[80px] p-6 border-white rounded-full"
                      src={chevron}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p>All study programs</p>
                      <p>
                        On the webpages of your degree program you will find
                        information on the study program structure, …
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
