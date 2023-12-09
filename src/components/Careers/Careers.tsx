import nextButtonDesktop from "../../assets/next-button/next-desktop.png";
import nextButtonMobile from "../../assets/next-button/next-mobile.png";
import starTealDesktop from "../../assets/stars/star-teal-desktop.png";
import starTealMobile from "../../assets/stars/star-teal-mobile.png";
import officeImage from "../../assets/office.jpg";

const Careers = () => {
  return (
    <div
      id="careers"
      className="flex h-fit scroll-m-[76px] justify-center bg-primary-green px-5 py-8 lg:scroll-m-[95.2px] lg:p-0"
    >
      <div className="lg:bg-gradient-unmaze-1 flex items-center rounded-[1.25rem] bg-white px-9 py-12 text-primary-green lg:rounded-none lg:bg-transparent lg:px-[5.625rem] lg:py-16">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-[0.375rem] font-clash-display lg:gap-3 lg:px-4">
            <p className="text-sm font-medium tracking-[0.105rem] lg:text-2xl">
              Work with us
            </p>
            <div>
              <div className="flex items-center gap-[0.375rem]">
                <p className="text-2xl font-semibold leading-6 tracking-[0.06rem] lg:text-5xl">
                  <span className="inline-block">
                    <img
                      src={starTealMobile}
                      alt="star-icon-mobile"
                      className="lg:hidden"
                    />
                    <img
                      src={starTealDesktop}
                      alt="star-icon-desktop"
                      className="hidden lg:block"
                    />
                  </span>{" "}
                  Careers
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-0 lg:gap-8">
            <p className="font-avenir-next text-lg leading-6 tracking-[0.045rem] lg:pr-[8rem] lg:text-[1.75rem] lg:leading-10 lg:tracking-[0.07rem]">
              Be part of the change in the way we think about personal finance!
            </p>
            <button className="flex shrink-0 items-center">
              <img
                src={nextButtonMobile}
                alt="arrow-icon"
                className="lg:hidden"
              />
              <img
                src={nextButtonDesktop}
                alt="arrow-icon"
                className="mt-4 hidden self-start lg:block"
              />
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block lg:w-full lg:overflow-hidden">
        <img
          src={officeImage}
          alt="office"
          className="h-full w-full -translate-x-[10rem] -translate-y-[3rem] scale-[1.5] object-cover"
        />
      </div>
    </div>
  );
};

export default Careers;
