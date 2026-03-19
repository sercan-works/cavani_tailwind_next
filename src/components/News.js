import { Fragment, useState } from "react";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { useSiteData } from "../context/SiteDataContext";

const News = () => {
  const { siteData } = useSiteData();
  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});
  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }
  const newsData = siteData?.timeline || [];

  return (
    <Fragment>
      <SectionContainer navName="news">
        <div className="section_inner">
          <div className="cavani_tm_news w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Kronoloji
              </span>
            </div>
            <div className="news_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="relative z-[2]">
                {newsData.map((news, i) => (
                  <li
                    className="w-full py-[29px] px-0"
                    data-img={news.cover}
                    key={i}
                  >
                    <div className="list_inner w-full clear-both h-auto flex items-center">
                      <span className="number w-[50px] min-w-[50px] h-[50px] text-center leading-[50px] inline-block rounded-full bg-[#b9b8c3] text-[#333] text-[16px] font-semibold font-poppins">
                        {`${i <= 9 ? 0 : ""}${i + 1}`}
                      </span>
                      <div className="details relative pl-[30px] ml-[29px]">
                        <div className="extra_metas">
                          <ul className="flex items-center flex-wrap mb-[2px]">
                            <li className="relative mr-[10px]">
                              <span className="text-[15px] text-[#777]">
                                {news.releaseDate}
                              </span>
                            </li>
                            <li className="relative mr-[10px]">
                              <span className="text-[15px] text-[#777] pl-[10px]">
                                <a
                                  className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleModalFour(news);
                                  }}
                                >
                                  {news.platform}
                                </a>
                              </span>
                            </li>
                            <li className="relative mr-[10px]">
                              <span className="text-[15px] text-[#777] pl-[10px]">
                                <a
                                  className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                  href={news.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Esere git
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="post_title">
                          <h3 className="m-0 p-0 leading-[1] font-semibold">
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                toggleModalFour(news);
                              }}
                            >
                              {news.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModalFour();
                  }}
                >
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={modalContent.cover}
                      style={{ backgroundImage: `url(${modalContent.cover})` }}
                    />
                  </div>
                  <div className="details">
                    <div className="meta">
                      <ul className="flex items-center flex-wrap mb-[2px]">
                        <li className="relative mr-[10px]">
                          <span className="text-[15px] text-[#777]">
                            {modalContent.releaseDate}
                          </span>
                        </li>
                        <li className="relative mr-[10px]">
                          <span className="text-[15px] text-[#777] pl-[10px]">
                            <a
                              className="text-[#777] transition-all duration-300 hover:text-[#000]"
                              href="#"
                            >
                              {modalContent.platform}
                            </a>
                          </span>
                        </li>
                        <li className="relative mr-[10px]">
                          <span className="text-[15px] text-[#777] pl-[10px]">
                            <a
                              className="text-[#777] transition-all duration-300 hover:text-[#000]"
                              href={modalContent.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Esere git
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
                    <p>{modalContent.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default News;
