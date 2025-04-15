import { CavaniContext } from "@/src/Context";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import News from "@/src/components/News";
import Service from "@/src/components/Service";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";

const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});
const Home = dynamic(() => import("@/src/components/Home"), {
  ssr: false,
});

const IndexGlitch = () => {
  const { animationChnage } = useContext(CavaniContext);
  useEffect(() => {
    animationChnage("rollIn");
  }, []);

  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
        <div className="author_image glitch-author-image">
          <div className="glitch_wrap">
            <div className="glitch">
              <div className="glitch__item"></div>
              <div className="glitch__item"></div>
              <div className="glitch__item"></div>
              <div className="glitch__item"></div>
              <div className="glitch__item"></div>
            </div>
          </div>
        </div>
        <div className="main_content absolute top-0 right-0 bottom-0 w-[60%]">
          {/* HOME */}
          <Home />
          {/* HOME */}
          {/* ABOUT */}
          <About />
          {/* ABOUT */}
          {/* PORTFOLIO */}
          <Portfolio />
          {/* /PORTFOLIO */}
          {/* SERVICE */}
          <Service />
          {/* SERVICE */}
          {/* NEWS */}
          <News />
          {/* NEWS */}
          {/* CONTACT */}
          <Contact />
          {/* CONTACT */}
        </div>
      </div>
    </Layout>
  );
};
export default IndexGlitch;
