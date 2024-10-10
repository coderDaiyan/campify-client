import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import BestSelling from "../components/ui/home/BestSelling";
import Categories from "../components/ui/home/Categories";
import Faq from "../components/ui/home/Faq";
import Featured from "../components/ui/home/Featured";
import Hero from "../components/ui/home/Hero";
import Testimonial from "../components/ui/home/Testimonial";

const Home = () => {
  return (
    <>
      <Fade>
        <Hero />
      </Fade>
      <Zoom>
        <BestSelling />
      </Zoom>
      <JackInTheBox>
        <Categories />
      </JackInTheBox>
      <Zoom>
        <Featured />
      </Zoom>
      <Slide>
        <Testimonial />
      </Slide>
      <Zoom>
        <Faq />
      </Zoom>
    </>
  );
};

export default Home;
