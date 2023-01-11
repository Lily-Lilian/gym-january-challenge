const Contact = () => {
  return (
    <div className="py-20 px-20 sm:px-4">
      <h1 className="text-gray text-[22px] font-bold mt-5 mb-[15px]">
        Contact
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-1 sm:gap-4 sm:grid-cols-1">
        <div className="border-2 border-gr sm:col-span-1 items-center flex flex-col gap-6 max-w-[305px] sm:p-3 p-[30px]">
          <img
            className="rounded-full max-w-[150px]"
            src="https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000"
            alt="name"
          />
          <div className="flex flex-col mt-8 gap-4  text-left">
            <p className="underline">Dezernat Internationales</p>
            <p className="underline">Profile page</p>
            <p className="underline"> +49 711 685 68566</p>
            <p className="underline"> Write e-mail</p>
            <p>
              <span className="underline">Office hours (online):</span> Mon &
              Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to
              4 p.m. , Tue & Thur, 10 a.m. to noon
            </p>
          </div>
        </div>

        <div className="border-2 sm:col-span-1 items-center border-gray flex flex-col gap-6 max-w-[305px] p-[30px]">
          <img
            className="rounded-full max-w-[150px]"
            src="https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620"
            alt="name"
          />
          <div className="flex flex-col mt-8 gap-4 underline text-left">
            <p>Dezernat Internationales</p>
            <p>Profile page</p>
            <p> +49 711 685 68566</p>
          </div>
        </div>

        <div className="border-2 sm:col-span-2 sm:max-w-[695px] items-center border-gray flex flex-col gap-6 max-w-[305px] p-[30px]">
          <img
            className="rounded-full max-w-[150px]"
            src="https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620"
            alt="name"
          />
          <div className="flex flex-col mt-8 gap-4 underline text-left">
            <p>Dezernat Internationales</p>
            <p>Profile page</p>
            <p> +49 711 685 68566</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
