import SectionContainer from "../layout/SectionContainer";
const Contact = () => {
  return (
    <SectionContainer navName="contact">
      <div className="section_inner">
        <div className="cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]">
          <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
            <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
              Iletisim
            </span>
          </div>
          <div className="w-full h-auto clear-both float-left mt-[62px]">
            <div className="max-w-[720px] rounded-[16px] bg-white py-[40px] px-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <ul className="flex flex-col gap-[18px]">
                <li>
                  <div className="w-full rounded-[12px] px-[20px] py-[16px]">
                    <span className="block text-[13px] uppercase tracking-[2px] text-[#7d7789] mb-[4px]">
                      Instagram
                    </span>
                    <a
                      className="font-medium text-[#333] transition-all duration-300 hover:text-[#000]"
                      href="https://instagram.com/garibiresmi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @garibiresmi
                    </a>
                  </div>
                </li>
                <li>
                  <div className="w-full rounded-[12px] px-[20px] py-[16px]">
                    <span className="block text-[13px] uppercase tracking-[2px] text-[#7d7789] mb-[4px]">
                      E-posta
                    </span>
                    <a
                      className="font-medium text-[#333] transition-all duration-300 hover:text-[#000]"
                      href="mailto:garibiden@gmail.com"
                    >
                      garibiden@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
