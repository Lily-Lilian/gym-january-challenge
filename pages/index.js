import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Contact from "../components/sections/Contact";
import Form from "../components/sections/Form";
import Hero from "../components/sections/Hero";
import Informations from "../components/sections/Informations";
import News from "../components/sections/News";
import Programs from "../components/sections/Programs";

const Home = () => {
  return (
    <div className="bg-[#DDDDDD] min-h-screen">
      <div className="max-w-[1170px] bg-white mx-auto relative">
        <Navbar />
        <Hero />
        <Form />
        <Programs />
        <News />
        <Informations />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
