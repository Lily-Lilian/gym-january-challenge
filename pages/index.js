import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Form from "../components/sections/Form";
import Hero from "../components/sections/Hero";
import Informations from "../components/sections/Informations";
import News from "../components/sections/News";
import Programs from "../components/sections/Programs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Form />
      <Programs />
      <News />
      <Informations />
      <Footer />
    </div>
  );
};

export default Home;
