import Isotope from "isotope-layout";
import { useContext, useEffect, useRef } from "react";
import { CavaniContext } from "../Context";
import SectionContainer from "../layout/SectionContainer";
import TypingAnimation from "./AnimationText";

const Home = () => {
  const { navChange } = useContext(CavaniContext);
  const isotope = useRef();
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    var imgLoad = imagesLoaded(".portfolio_list");
    imgLoad.on("done", function (instance) {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".item__",
        percentPosition: true,
        masonry: {
          columnWidth: ".item__",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });
  });
  return (
    <SectionContainer navName="home">
      <div className="cavani_tm_home relative w-full h-full flex items-center">
        <div className="content pl-[100px] w-full">
          <div className="hidden middle:block relative w-full h-[260px] mb-[30px]">
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: "url(assets/img/about/1.jpg)" }}
            />
          </div>
          <h3 className="name text-[72px] font-bold uppercase mb-[30px]">
           GÂRÎBÎ
          </h3>
          <span className="line inline-block w-[70px] h-[5px] bg-[#333] mb-[30px]" />
          <TypingAnimation />
          <div className="cavani_tm_button transition_link">
            <a href="#contact" onClick={() => navChange("portfolio")}>
              Eserlerimiz
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
