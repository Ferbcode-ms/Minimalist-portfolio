import { arrowdown, profile } from "../assets";
import { MagneticButton, MagneticRoundedbtn } from "../components";
import MagBluehoverbtn from "../components/MagBluehoverbtn";
import { footerData } from "../content/content";

const Footer = () => {
  return (
    <>
      <div className="footer-wrap footer-footer-wrap theme-dark h-full bg-dark">
        <footer className="section footer h-full w-full bg-dark pt-32 max-sm:pt-16">
          <div className="medium container flex w-full flex-col px-60 max-sm:px-6">
            <div className="row text-white">
              <div className="flex items-center justify-between">
                <h1 className="flex max-w-[700px] gap-10 text-wrap max-sm:text-[35px]">
                  <span>
                    <div className="profile-picture w-[100px] overflow-hidden rounded-full max-sm:w-[50px]">
                      <img src={profile} width={100} />
                    </div>
                  </span>
                  {footerData.sections[0].title}
                </h1>
                <img src={arrowdown} className="rotate-90" />
              </div>
            </div>
            <div className="row text-white max-sm:mt-16">
              <div className="relative flex-col">
                <div className="stripe h-[1px] w-full bg-border-solid-light"></div>

                <MagneticRoundedbtn
                  href="#"
                  text="Get in touch"
                  strength={60}
                  className="-top-20 right-20 bg-blue max-sm:right-5 max-sm:h-[150px] max-sm:w-[150px]"
                ></MagneticRoundedbtn>

                <div className="btn-fixed mt-20 flex gap-6 max-sm:mt-24 max-sm:flex-col">
                  {footerData.sections[0].links.map((link, index) => (
                    <MagBluehoverbtn
                      key={index}
                      href={link.href}
                      buttonText={link.text}
                    ></MagBluehoverbtn>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="no-padding container w-full px-4">
            <div className="row bottom-footer mt-20 flex items-end justify-between text-white max-sm:flex-col-reverse max-sm:items-start max-sm:gap-10">
              <div className="flex gap-5 max-sm:w-full max-sm:justify-between">
                <div className="credits">
                  <h5>Version</h5>
                  <MagneticButton
                    strength={10}
                    className="text-[15px] text-white"
                  >
                    {footerData.credits.version}
                  </MagneticButton>
                </div>
                <div className="time">
                  <h5>Local time</h5>
                  <MagneticButton strength={10}>
                    <p className="text-[15px] text-white">
                      {footerData.credits.localTime}
                    </p>
                  </MagneticButton>
                </div>
              </div>
              <div className="flex-col">
                <div className="socials flex flex-col">
                  <h5>Socials</h5>
                  <ul className="flex gap-4">
                    {footerData.sections[1].links.map((link, index) => (
                      <MagneticButton strength={10} key={index} className="">
                        <a
                          href={link.href}
                          target="_blank"
                          className="btn-click magnetic"
                          data-strength="20"
                          data-strength-text="10"
                        >
                          <span className="btn-text">
                            <span className="btn-text-inner">{link.text}</span>
                          </span>
                        </a>
                      </MagneticButton>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
