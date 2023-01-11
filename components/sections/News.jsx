const News = () => {
  return (
    <div className=" bg-gray px-20">
      <h1 className="text-white text-[26px] font-bold py-5">
        News and events for students
      </h1>

      {/* Desktop Version */}
      <div className="grid grid-cols-3 md:hidden sm:hidden">
        <div className="flex flex-col sm:flex-wrap gap-6 py-10 px-[30px]">
          <div className=" bg-white py-5 px-[30px] hover:bg-blue_sky">
            <h1 className="text-[17px]">
              Newsticker: Information on the coronavirus
            </h1>
            <span className="text-[10px]">11/10/22</span>
          </div>
          <div className="bg-white py-5 px-[30px] hover:bg-blue_sky">
            <h1 className="text-[17px]">
              Impressive research in the field of business administration
            </h1>
            <p className="text-[10px]">12/21/22</p>
          </div>
          <div className="bg-white py-5 px-[30px] hover:bg-blue_sky">
            <img
              className="rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"
              alt="woman"
            />
            <h1 className="text-[22px]">
              The University of Stuttgarts five most beautiful Instagram
              pictures
            </h1>
            <span className="text-[10px]">12/21/22</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-wrap gap-6 py-10 px-[30px] ">
          <div className="">
            <img
              className=""
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
              alt="woman"
            />
            <div className="bg-white flex flex-col space-y-4 hover:bg-blue_sky py-5 px-[30px]">
              <h1 className="text-[22px]">
                Latest episode:Intelligent systems will help us in crises and in
                the future
              </h1>
              <span className="text-[10px]">12/21/22</span>
            </div>
          </div>
          <div className="bg-white flex flex-col  gap-2 py-5 px-[30px] hover:bg-blue_sky">
            <img
              className="rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
              alt="woman"
            />
            <h1 className="text-[22px]">Energy Saving in November</h1>
            <span className="text-[10px]">12/21/22</span>
          </div>
          <div className="bg-white flex flex-col  gap-2 py-5 px-[30px] hover:bg-blue_sky">
            <img
              className="rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"
              alt="woman"
            />
            <h1 className="text-[22px]">
              Diversity Calendar makes Dirversity Visible
            </h1>
            <span className="text-[15px]">12/21/22</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-10 px-[30px]">
          <div className="">
            <img
              className=""
              src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
              alt="woman"
            />
            <div className="bg-white py-5 px-[30px] flex flex-col space-y-8 hover:bg-blue_sky">
              <h1 className="text-base">
                Everyone feels sometimes stressed during their studies. But what
                can you do against it? Constanza has a few tips.
              </h1>
              <span className="text-[15px]">12/21/22</span>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-2 py-5 px-[30px] hover:bg-blue_sky">
            <img
              className=" rounded-full"
              src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
              alt="woman"
            />
            <h1 className="text-[22px]">sim & Tech solve their 3rd case</h1>
            <span className="text-[15px]">12/21/22</span>
          </div>
          <div className="bg-white py-5 px-[30px] hover:bg-blue_sky">
            <h1 className="text-[22px]">
              General questions: Limited office hours December 22, 2022 -
              January 6, 2023
            </h1>
            <p className="text-[15px]">12/21/22</p>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 hidden">
        <div className="flex flex-col gap-6 py-10 px-4">
          <div className=" bg-white py-5 px-[30px] hover:bg-blue_sky">
            <h1 className="text-[22px]">
              Newsticker: Information on the coronavirus
            </h1>
            <span className="text-[15px]">11/10/22</span>
          </div>
          <div className="bg-white py-5 px-[30px] hover:bg-blue_sky">
            <h1 className="text-[22px]">
              Impressive research in the field of business administration
            </h1>
            <p className="text-[15px]">12/21/22</p>
          </div>
          <div className="bg-white py-5 px-[30px] hover:bg-blue_sky">
            <img
              className="rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"
              alt="woman"
            />
            <h1 className="text-[22px]">
              The University of Stuttgarts five most beautiful Instagram
              pictures
            </h1>
            <span className="text-[15px]">12/21/22</span>
          </div>
          <div className="">
            <img
              className=""
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
              alt="woman"
            />
            <div className="bg-white flex flex-col space-y-4 hover:bg-blue_sky py-5 px-[30px]">
              <h1 className="text-[22px]">
                Latest episode:Intelligent systems will help us in crises and in
                the future
              </h1>
              <span className="text-[15px]">12/21/22</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-10 px-4">
          <div className="">
            <img
              className=""
              src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
              alt="woman"
            />
            <div className="bg-white py-2 px-4 flex flex-col space-y-8 hover:bg-blue_sky">
              <h1 className="text-base">
                Everyone feels sometimes stressed during their studies. But what
                can you do against it? Constanza has a few tips.
              </h1>
              <span className="text-[15px]">12/21/22</span>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-2 py-2 px-4 hover:bg-blue_sky">
            <img
              className="rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
              alt="woman"
            />
            <h1 className="text-[22px]">Energy Saving in November</h1>
            <span className="text-[15px]">12/21/22</span>
          </div>
          <div className="bg-white flex flex-col  gap-2 py-2 px-4 hover:bg-blue_sky">
            <img
              className="rounded-full"
              src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"
              alt="woman"
            />
            <h1 className="text-[22px]">
              Diversity Calendar makes Dirversity Visible
            </h1>
            <span className="text-[15px]">12/21/22</span>
          </div>
          <div className="bg-white flex flex-col gap-2 py-2 px-4 hover:bg-blue_sky">
            <img
              className=" rounded-full"
              src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
              alt="woman"
            />
            <h1 className="text-[17px]">sim & Tech solve their 3rd case</h1>
            <span className="text-[10px]">12/21/22</span>
          </div>
          <div className="bg-white py-2 px-4 hover:bg-blue_sky">
            <h1 className="text-[17px]">
              General questions: Limited office hours December 22, 2022 -
              January 6, 2023
            </h1>
            <p className="text-[10px]">12/21/22</p>
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
