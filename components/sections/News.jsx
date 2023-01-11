const News = () => {
  return (
    <div className="max-w-[1170px] mx-auto  bg-gray">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-4 py-10 px-[30px]">
          <div className=" bg-white py-5 px-[30px]">
            <h1>Newsticker: Information on the coronavirus</h1>
            <span>11/10/22</span>
          </div>
          <div className="bg-white py-5 px-[30px]">
            <h1>Impressive research in the field of business administration</h1>
            <p>12/21/22</p>
          </div>
          <div className="bg-white py-5 px-[30px]">
            <img
              className="max-w-[] rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"
              alt="woman"
            />
            <h1>
              The University of Stuttgart's five most beautiful Instagram
              pictures
            </h1>
            <span>12/21/22</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10 px-[30px]">
          <div className=" py-5 px-[30px]">
            <img
              className=""
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
              alt="woman"
            />
            <div className="bg-white ">
              <h1>
                The University of Stuttgart's five most beautiful Instagram
                pictures
              </h1>
              <span>12/21/22</span>
            </div>
          </div>
          <div className="bg-white py-5 px-[30px]">
            <img
              className=" rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
              alt="woman"
            />
            <h1>
              The University of Stuttgart's five most beautiful Instagram
              pictures
            </h1>
            <span>12/21/22</span>
          </div>
          <div className="bg-white py-5 px-[30px]">
            <img
              className=" rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"
              alt="woman"
            />
            <h1>
              The University of Stuttgart's five most beautiful Instagram
              pictures
            </h1>
            <span>12/21/22</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10 px-[30px]">
          <div className=" py-5 px-[30px]">
            <img
              className=""
              src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
              alt="woman"
            />
            <div className="bg-white ">
              <h1>
                The University of Stuttgart's five most beautiful Instagram
                pictures
              </h1>
              <span>12/21/22</span>
            </div>
          </div>
          <div className="bg-white py-5 px-[30px]">
            <img
              className=" rounded-full"
              src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
              alt="woman"
            />
            <h1>
              The University of Stuttgart's five most beautiful Instagram
              pictures
            </h1>
            <span>12/21/22</span>
          </div>
          <div className="bg-white py-5 px-[30px]">
            <h1>
              General questions: Limited office hours December 22, 2022 -
              January 6, 2023
            </h1>
            <p>12/21/22</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center py-6">
        <button className="py-[16px] px-[35px] border border-white text-white">
          ALL NEWS
        </button>
        <button className="py-[16px] px-[35px] border border-white text-white">
          ALL EVENTS
        </button>
      </div>
    </div>
  );
};

export default News;
