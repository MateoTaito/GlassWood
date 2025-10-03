import AboutUs from "../components/AboutUs";
import Clients from "../components/Clients";
import CourseSection from "../components/CourseSection";
import Header from "../components/Header";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <WhyUs />
      <CourseSection />
      <Clients />
    </>
  );
};

export default Home;
