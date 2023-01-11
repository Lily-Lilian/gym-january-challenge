import Image from "next/image";
import chevron from "../../public/assets/chevron.svg";
import logos from "../../public/assets/Logo_ Universität Stuttgart - zur Startseite.svg";
import search from "../../public/assets/search.svg";
import menu from "../../public/assets/menu.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="">
        <div className="bg-blue sm:px-4 px-20 sm:justify-start md:justify-start flex gap-2 justify-end pr-[30px] py-2">
          <p className="text-white text-sm">University of Stuttgart</p>
          <Image
            className="border border-white rounded-full"
            src={chevron}
            alt=""
          />
        </div>
      </nav>
      <nav className="f">
        <div className="flex sm:px-4 px-20 bg-white justify-between items-center py-5">
          <Image src={logos} alt="logo-one" />
          <div className="flex gap-4">
            <Image className="sm:hidden" src={search} alt="search" />
            <Image src={menu} alt="menu" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
