import SectionContainer from "../layout/SectionContainer";
import siteData from "../../data/site.json";

const About = () => {
  const aboutData = siteData?.about || {};

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                {aboutData.title || "About Me"}
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left mt-[55px]">
              <div className="left w-full">
                {(aboutData.bio || []).map((paragraph, idx) => (
                  <p key={idx} className={idx !== (aboutData.bio || []).length - 1 ? "mb-[15px]" : ""}>
                    {paragraph}
                  </p>
                ))}
                {aboutData.motto && (
                  <p className="mt-[20px] italic">
                    "{aboutData.motto}"
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
