import { CAPTCHA_SECRET_KEY } from "../utils/config";
import ReCAPTCHA from "react-google-recaptcha";

export default function GCaptcha({ onChange, errorText }) {
  return (
    <div className="">
      <ReCAPTCHA sitekey={CAPTCHA_SECRET_KEY} onChange={onChange} />
      {errorText && (
        <div
          className="text-xs md:text-base font-medium mt-[1px] text-red-400 min-h-[10px]"
          dangerouslySetInnerHTML={{
            __html: typeof errorText === "string" ? errorText : "",
          }}></div>
      )}
    </div>
  );
}
