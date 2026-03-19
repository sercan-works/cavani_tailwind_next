import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useSiteData } from "../context/SiteDataContext";

const TypingAnimation = () => {
  const el = useRef(null);
  const { siteData } = useSiteData();
  const prefix = siteData?.hero?.prefix || "Creative";
  const rotatingStrings =
    siteData?.hero?.rotatingStrings?.length > 0
      ? siteData.hero.rotatingStrings
      : ["Sanatçı", "Müzisyen"];

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: rotatingStrings,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [rotatingStrings]);

  return (
    <h3 className="job text-[25px] mb-[35px] font-light">
      <span className="cd-headline clip">
        <span className="blc">{prefix}</span>{" "}
        <span className="cd-words-wrapper">
          <b className="is-visible" ref={el}></b>
        </span>
      </span>
    </h3>
  );
};
export default TypingAnimation;
