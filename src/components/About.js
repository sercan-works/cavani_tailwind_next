import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";

const About = () => {
  const circleProgressData = [
    { language: "English", progress: 95 },
    { language: "Russian", progress: 80 },
    { language: "Arabic", progress: 90 },
  ];

  const progressBarData = [
    { bgcolor: "#7d7789", completed: 60, title: "HTML & CSS" },
    { bgcolor: "#7d7789", completed: 85, title: "Javascript" },
    { bgcolor: "#7d7789", completed: 90, title: "WordPress" },
  ];

  const services = [
    {
      desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
      img: "img/testimonials/1.jpg",
      info1: "Alexander Walker",
      info2: "Graphics Designer",
    },
    {
      desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
      img: "img/testimonials/2.jpg",
      info1: "Baraka Clinton",
      info2: "Construction Engineering",
    },
    {
      desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
      img: "img/testimonials/3.jpg",
      info1: "Armin Van Buuren",
      info2: "Content Manager",
    },
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                About Me
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%]">
                <p className="mb-[15px]">
                  Hello there! My name is <strong>Alan Walker.</strong> I am a
                  graphic designer, and I'm very passionate and dedicated to my
                  work.
                </p>
                <p>
                  With 20 years experience as a professional a graphic designer,
                  I have acquired the skills and knowledge necessary to make
                  your project a success.
                </p>
              </div>
              <div className="right w-[50%]">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">Alan Walker</span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Address:
                    </span>
                    <span className="second inline-block">
                      Ave Street, New York, USA
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Study:
                    </span>
                    <span className="second inline-block">
                      Univercity of Oxford
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Degree:
                    </span>
                    <span className="second inline-block">
                      Master of Science
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Mail:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="#"
                      >
                        hello@cavani.com
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Phone:
                    </span>
                    <span className="second inline-block">
                      +77 022 444 05 05
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Services
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Web Development
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Graphic Design
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Landing Page
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      On-Page SEO
                    </li>
                    <li className="w-full float-left relative pl-[25px]">
                      Web Hosting
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service_list w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Interests
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Painting &amp; Drawing
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Reading &amp; Writing
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Music &amp; Cinema
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      Travel &amp; Picnik
                    </li>
                    <li className="w-full float-left relative pl-[25px]">
                      Rain &amp; Snow
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="skills w-full h-auto clear-both float-left mb-[65px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="programming w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Programming
                  </span>
                </div>
                <div className="cavani_progress w-full h-auto clear-both float-left mt-[55px]">
                  {progressBarData.map((item, idx) => (
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
              <div className="language w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Language
                  </span>
                </div>
                <div className="circular_progress_bar w-full h-auto clear-both float-left mt-[62px]">
                  <ul>
                    {circleProgressData.map((item, idx) => (
                      <li key={idx}>
                        <div className="list_inner">
                          <div
                            className="myCircle"
                            style={{ width: 120, height: 120 }}
                          >
                            <CircularProgressbar
                              width={120}
                              value={item.progress}
                              strokeWidth={3}
                              styles={buildStyles({
                                pathColor: "#7d7789",
                                trailColor: "rgba(0,0,0,0)",
                              })}
                            />
                            <span className="number">{item.progress}%</span>
                            <div className="title">
                              <span>{item.language}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume w-full h-auto clear-both float-left mb-[75px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="education w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Education
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2014 - 2016
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Oxford Univercity
                            </h3>
                            <span className="text-[14px]">Master Degree</span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2010 - 2014
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Texas Univercity
                            </h3>
                            <span className="text-[14px]">Bachelor Degree</span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2008 - 2010
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Simone College
                            </h3>
                            <span className="text-[14px]">
                              Associate Degree
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="experience w-1/2">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Experience
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left">
                  <div className="univ w-full h-auto clear-both float-left mt-[55px]">
                    <ul className="relative inline-block pt-[10px]">
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2018 - running
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Envato Elements
                            </h3>
                            <span className="text-[14px]">
                              Exclusive Author
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px] pb-[45px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2015 - 2018
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              Avo Corporation
                            </h3>
                            <span className="text-[14px]">Content Manager</span>
                          </div>
                        </div>
                      </li>
                      <li className="w-full float-left relative pl-[20px]">
                        <div className="list_inner w-full h-auto clear-both flex relative">
                          <div className="time w-1/2 pr-[20px]">
                            <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                              2012 - 2015
                            </span>
                          </div>
                          <div className="place w-1/2 pl-[20px]">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              FC Barcelona
                            </h3>
                            <span className="text-[14px]">Football Player</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="partners w-full h-auto clear-both float-left mb-[92px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Partners
              </span>
            </div>
            <div className="list w-full clear-both float-left overflow-hidden border-solid border-[#E5EDF4] border-2 mt-[62px]">
              <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] pt-[2px] float-left pl-[2px]">
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/1.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/2.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/3.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/4.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/5.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/1.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/2.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
                <li className="float-left w-1/4 border-solid border-[#E5EDF4] border-2 text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                    <img
                      className="inline-block max-w-[65%] max-h-[65px]"
                      src="assets/img/partners/3.png"
                      alt="image"
                    />
                    <a className="cavani_tm_full_link" href="#" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="testimonials w-full h-auto clear-both float-left mb-[90px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Testimonials
              </span>
            </div>
            <div className="list w-full h-auto clear-both float-left mt-[75px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="cursor-e-resize custom-class"
              >
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        Beautiful minimalist design and great, fast response
                        with support. Highly recommend. Thanks Marketify!
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/1.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alexander Walker
                        </h3>
                        <span className="text-[14px]">Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        These people really know what they are doing! Great
                        customer support availability and supperb kindness.
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/2.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Armin Van Buuren
                        </h3>
                        <span className="text-[14px]">Content Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        I had a little problem and the support was just awesome
                        to quickly solve the situation. And keep going on.
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/3.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Baraka Clinton
                        </h3>
                        <span className="text-[14px]">English Teacher</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
