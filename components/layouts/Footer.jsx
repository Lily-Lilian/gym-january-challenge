import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import faceb from "../../public/assets/facebook.svg";
import twitter from "../../public/assets/twitter.svg";
import insta from "../../public/assets/instagram.svg";
import utube from "../../public/assets/youtube.svg";
import mastodo from "../../public/assets/mastodon.svg";
import linke from "../../public/assets/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray text-white pt-[50px]  pb-[15px] px-28 md:px-4 sm:px-4">
        <div className="flex md:flex-col sm:flex-col gap-10 sm:items-start md:items-start items-center pb-[60px]">
          <Image src={logo} alt="logo" />
          <ul className="flex md:flex-col sm:flex-col gap-6 mt-4">
            <li>
              <Image className="max-w-[30px] " src={faceb} alt="faceb" />
              <p>Facebook</p>
            </li>
            <li>
              <Image className="max-w-[30px]" src={insta} alt="insta" />
              <p>Instagram</p>
            </li>
            <li>
              <Image className="max-w-[30px]" src={twitter} alt="twitter" />
              <p>Twitter</p>
            </li>
            <li>
              <Image className="max-w-[30px]" src={utube} alt="utube" />
              <p>YouTube</p>
            </li>
            <li>
              <Image className="max-w-[30px]" src={linke} alt="linke" />
              <p>linkedin</p>
            </li>
            <li>
              <Image className="max-w-[30px]" src={mastodo} alt="mastodo" />
              <p>Mastodon</p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-4 max-w-[990px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Audience</h1>
            <ul>
              {[
                "Students",
                "Employees",
                "Alumni and supporters",
                "Industry",
              ].map((item, key) => {
                return (
                  <li key={key} className="underline">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Formalities</h1>
            <ul>
              {[
                "Legal notice",
                "Privacy notice",
                "Accessibility",
                "Certificates",
              ].map((item, key) => {
                return (
                  <li key={key} className="underline">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Services</h1>
            <ul>
              {[
                "Contact",
                "Press",
                "Jobs",
                "Apply for a Doctorate or Postdoc",
                "Uni-Shop",
              ].map((item, key) => {
                return (
                  <li key={key} className="underline">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Organization</h1>
            <ul>
              {[
                "Faculties and Institutes",
                "Facilities",
                "Central Administration",
              ].map((item, key) => {
                return (
                  <li key={key} className="underline">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
