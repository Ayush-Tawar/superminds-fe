import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LetsBuildTogether from "./LetsBuildTogether";
import { dummyLinksForSeoPages } from "../utils/staticTypes";
import { FaEnvelope } from "react-icons/fa";

const Footer = ({ setIsOpen }) => {
  const router = useRouter();

  const handlePrivacyPolicyClick = () => {
    router.push("/privacy-policy");
  };

  const handleTermsAndConditionsClick = () => {
    router.push("/terms-and-conditions");
  };
  return (
    <div className="h-auto bg-black">
      <div className="flex justify-center sm:justify-between items-center pt-24 pb-6 sm:pb-16 px-12 sm:px-16 xl:px-32 border-none">
        <div className="flex">
          <Link href={"/#home"}>
            <Image
              src={"/images/SmNewLogo.svg"}
              height={107}
              width={237}
              alt="Superminds Logo"
              className="object-cover w-[102px] sm:w-[237px] h-[30px] sm:h-[67px]"
            />
          </Link>
        </div>
        <div className="hidden sm:block">
          <LetsBuildTogether setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse gap-8 sm:gap-0 sm:flex-row text-white items-center pt-12 pb-6 sm:pb-16 px-12 sm:px-16 xl:px-32 border-none">
        <div className="flex gap-4 order-1 pb-2">
          <Image
            src={"/images/copyright.svg"}
            height={24}
            width={24}
            alt="copyright"
            className="object-cover opacity-70"
          />
          <p className="font-poppins text-[18px] opacity-70">Superminds</p>
        </div>
        <div className="flex flex-col lg:flex-row sm:last:w-2/5 gap-4 xl:gap-8 justify-around items-center font-poppins text-[18px] order-4 sm:order-2">
          <Link href={"/privacy-policy"} target="_blank">
            <p
              className="whitespace-nowrap cursor-pointer ready-for-web3-magic pb-2 opacity-70 hover:opacity-100 hover:text-greenBg"
              onClick={handlePrivacyPolicyClick}>
              Privacy Policy
            </p>
          </Link>
          <Link href={"/terms-and-conditions"} target="_blank">
            <p
              className="whitespace-nowrap cursor-pointer ready-for-web3-magic pb-2 opacity-70 hover:opacity-100 hover:text-greenBg"
              onClick={handleTermsAndConditionsClick}>
              Terms & Conditions
            </p>
          </Link>
        </div>
        <div className="flex gap-6 sm:gap-4 order-3">
          {/* <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            className=" opacity-70 cursor-pointer hover:opacity-100 hover:scale-150 footerSVG transition-all twitter"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.2626 2.55977C20.4977 2.91215 19.6744 3.14984 18.8105 3.25621C19.6925 2.70904 20.3688 1.84233 20.6877 0.808399C19.8628 1.31573 18.9495 1.68387 17.9767 1.8826C17.1977 1.02289 16.088 0.485352 14.8605 0.485352C12.503 0.485352 10.5916 2.4661 10.5916 4.90953C10.5916 5.25578 10.6291 5.59327 10.7022 5.91763C7.15435 5.73291 4.00776 3.9719 1.90201 1.29472C1.53451 1.94782 1.32457 2.70817 1.32457 3.51929C1.32457 5.05442 2.07774 6.40877 3.22333 7.20151C2.52424 7.17831 1.86526 6.97914 1.28993 6.64777C1.28951 6.66616 1.28951 6.68498 1.28951 6.7038C1.28951 8.84695 2.76079 10.6347 4.71404 11.0417C4.35583 11.142 3.97862 11.1967 3.58915 11.1967C3.31415 11.1967 3.04634 11.1691 2.78613 11.117C3.32936 12.8745 4.90624 14.154 6.77375 14.1895C5.31261 15.3762 3.47256 16.0836 1.47157 16.0836C1.1273 16.0836 0.787257 16.0626 0.453125 16.0214C2.34302 17.2773 4.5869 18.0092 6.99763 18.0092C14.8508 18.0092 19.1446 11.2681 19.1446 5.42168C19.1446 5.22995 19.1408 5.03866 19.1328 4.84825C19.9667 4.22666 20.6907 3.44706 21.2626 2.55977Z"
              fill="#A5A5A5"
              className="hover:fill-greenBg transition-all"
            />
          </svg> */}
          <Link href={`mailto: fabio@superminds.dev, ashutosh@superminds.dev `}>
            <FaEnvelope className="h-[22px] w-[22px] opacity-50 hover:opacity-100 hover:fill-greenBg hover:scale-150 transition-all" />
          </Link>
          <Image
            src={"/images/Rectangle.svg"}
            height={18.62}
            width={2}
            className="opacity-70"
            alt="rectangle divider"
          />
          <Link
            href={"https://www.linkedin.com/company/superminds-dev/mycompany/"}
            target="_blank">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className=" opacity-70 cursor-pointer hover:opacity-100 hover:scale-150 footerSVG transition-all linkedIn"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.26376 7.05762H0.882812V19.1052H5.26376V7.05762Z"
                fill="#A5A5A5"
              />
              <path
                d="M3.07329 4.8663C4.28306 4.8663 5.26376 3.88559 5.26376 2.67583C5.26376 1.46606 4.28306 0.485352 3.07329 0.485352C1.86352 0.485352 0.882812 1.46606 0.882812 2.67583C0.882812 3.88559 1.86352 4.8663 3.07329 4.8663Z"
                fill="#A5A5A5"
              />
              <path
                d="M15.6694 6.23535C14.1744 6.23973 12.7626 6.92645 11.836 8.10164V7.05678H7.45508V19.1044H11.836V11.4377C11.836 10.2286 12.8174 9.24726 14.0265 9.24726C15.2357 9.24726 16.217 10.2286 16.217 11.4377V19.1044H20.5979V11.1639C20.5979 8.44226 18.391 6.23535 15.6694 6.23535Z"
                fill="#A5A5A5"
              />
            </svg>
          </Link>
          {/* <Image
            src={"/images/Rectangle.svg"}
            height={18.62}
            width={2}
            className="opacity-70"
            alt="rectangle divider"
          /> */}
          {/* <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            className=" opacity-70 cursor-pointer hover:opacity-100 hover:scale-150 footerSVG transition-all instagram"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.6702 0.485352H1.37853C0.735304 0.485352 0.214844 1.00581 0.214844 1.64904V17.9407C0.214844 18.5839 0.735304 19.1044 1.37853 19.1044H17.6702C18.3134 19.1044 18.8339 18.5839 18.8339 17.9407V1.64904C18.8339 1.00581 18.3134 0.485352 17.6702 0.485352ZM7.19699 9.79488C7.19699 9.79488 7.38107 7.46749 9.52437 7.46749C11.6677 7.46749 11.8517 9.79488 11.8517 9.79488C11.8517 9.79488 11.9188 12.1223 9.52437 12.1223C7.12993 12.1223 7.19699 9.79488 7.19699 9.79488ZM16.5065 16.777H2.54222V8.63118H4.86961H5.03434C4.93779 9.00506 4.86961 9.39031 4.86961 9.79488C4.86961 12.3655 6.95377 14.4496 9.52437 14.4496C12.095 14.4496 14.1791 12.3654 14.1791 9.79488C14.1791 9.39031 14.1109 9.00506 14.0144 8.63118H14.1791H16.5065V16.777ZM16.5065 6.3038H13.0154V2.81273H16.5065V6.3038Z"
              fill="#A5A5A5"
            />
          </svg> */}
        </div>
      </div>
      {dummyLinksForSeoPages.map((link) => (
        <a key={link} href={link} className="hidden">
          {link}
        </a>
      ))}
    </div>
  );
};

export default Footer;
