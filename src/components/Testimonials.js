import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = ({ Data }) => {
  // console.log("tetstimonials");
  // console.log("testimonials", Data);
  return (
    <div className="flex bg-black justify-center h-screen lg:h-[165vh] items-center px-8 sm:px-4">
      <div className="flex flex-col justify-center items-center h-auto py-4 max-w-full">
        <h3 className="hidden sm:block font-benzgrotesk text-greenBg font76-16 font-extrabold uppercase">
          straight outta
        </h3>
        <h3 className="hidden sm:block font-benzgrotesk text-transparent text-[140px] font-extrabold uppercase greenstroke-heading z-10">
          streets
        </h3>

        <div className="flex flex-col sm:flex-row justify-center sm:gap-4 xl:gap-10 reltive sm:-mt-[7%] w-full">
          <Image
            src={"/images/invertedCommas.svg"}
            width={111}
            height={98}
            className="object-cover w-[40px] lg:w-[111px] h-[35px] lg:h-[98px]"
            alt="commas"
          />
          <div className="flex flex-col items-center">
            <h3 className="sm:hidden font-benzgrotesk text-greenBg font76-16 font-extrabold uppercase">
              straight outta
            </h3>
            <h3 className="sm:hidden font-benzgrotesk text-transparent text-[70px] font-extrabold uppercase greenstroke-heading">
              streets
            </h3>
          </div>
          <div className="text-white opacity-70 sm:w-2/4 font14-32 font-poppins font-light relative pt-[15%] sm:pt-[10%] xl:pt-[15%] testimonial">
            <Carousel infiniteLoop autoPlay showThumbs={false}>
              {Data && Data.length ? (
                Data.map((testimonial, index) => (
                  <h2 key={index} className="text-white mb-16">
                    {testimonial.clientTestimonial}
                  </h2>
                ))
              ) : (
                <div>Loading</div>
              )}
            </Carousel>
          </div>
          <div className="w-[380px] lg:w-[480px] h-[395px] lg:h-[595px] hidden sm:block">
            <Image
              src={"/images/personShouting.svg"}
              width={480}
              height={495}
              className="object-cover"
              alt="from streets"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
