import useFormField from "../utils/useFormField";
import { appsApi } from "../utils/api";
import { useState } from "react";
// import { toast } from "react-hot-toast";

export default function useContactForm(hide) {
  const [nameField, nameProps] = useFormField("");
  const [emailField, emailProps] = useFormField("");
  const [companyField, companyProps] = useFormField("");
  //   const [geoInterestedField, geoInterestedProps] = useFormField("");
  const [interestedInField, interestedInProps] = useFormField("");
  //   const [trafficTypesField, trafficTypesProps] = useFormField("");
  //   const [productsInterestedField, productInterestedProps] = useFormField("");
  const [contactField, contactProps] = useFormField("");
  const [messageField, messageProps] = useFormField("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [captchaToken, setCapthaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const validate = () => {
    let error = false;
    if (nameField.value.trim() == "") {
      error = true;
      nameField.setError("Name is required");
    }
    if (companyField.value.trim() == "") {
      error = true;
      companyField.setError("Company is required");
    }
    // if (geoInterestedField.value.trim() == "") {
    //   error = true;
    //   geoInterestedField.setError("GEO is required");
    // }
    if (interestedInField.value.trim() == "") {
      error = true;
      interestedInField.setError("This field is required");
    }
    // if (trafficTypesField.value.trim() == "") {
    //   error = true;
    //   trafficTypesField.setError("Traffic types are required");
    // }
    // if (productsInterestedField.value.trim() == "") {
    //   error = true;
    //   productsInterestedField.setError("This field is required");
    // }
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailField.value,
      )
    ) {
      error = true;
      emailField.setError("You have entered an invalid email address!");
    }
    if (emailField.value.trim() == "") {
      error = true;
      emailField.setError("Email is required");
    }
    if (contactField.value.trim() == "") {
      error = true;
      contactField.setError("Contact number is required");
    }
    if (messageField.value.trim() == "") {
      error = true;
      messageField.setError("Message is required");
    }
    if (!captchaToken) {
      error = true;
      setCaptchaError("captcha is required");
    }
    if (!error) handleSubmit();
  };

  const resetEveryError = () => {
    // firstNameField.setValue("");
    // emailField.setValue("");
    // contactField.setValue("");
    // messageField.setValue("");
    // companyField.setValue("");
    // trafficTypesField.setValue("");
    // geoInterestedField.setValue("");
    // productsInterestedField.setValue("");
    // interestedInField.setValue("");
    nameField.setError("");
    emailField.setError("");
    contactField.setError("");
    messageField.setError("");
    companyField.setError("");
    // trafficTypesField.setError("");
    // geoInterestedField.setError("");
    // productsInterestedField.setError("");
    interestedInField.setError("");
    setCaptchaError("");
  };

  const resetAllFields = () => {
    nameField.setValue("");
    emailField.setValue("");
    contactField.setValue("");
    messageField.setValue("");
    companyField.setValue("");
    // trafficTypesField.setValue("");
    // geoInterestedField.setValue("");
    // productsInterestedField.setValue("");
    interestedInField.setValue("");
    // setCapthaToken("");
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const data = {
        name: nameField.value,
        email: emailField.value,
        contactNumber: contactField.value,
        message: messageField.value,
        company: companyField.value,
        //   trafficTypes: trafficTypesField.value,
        //   geosInterested: geoInterestedField.value,
        //   productsInterested: productsInterestedField.value,
        service: interestedInField.value,
        recaptchaResponse: captchaToken,
      };
      // console.log(data);
      const res = await appsApi.post("contactus/create", data);
      if (res.status == 201) {
        if (typeof hide === "function") hide();
        resetEveryError();
        // toast.success("Request submitted!");
        resetAllFields();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // toast.error(error.response.data.message);
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
      resetEveryError();
      // toast.success("Request submitted!");
      resetAllFields();
    }
  };

  const handleCaptchaToken = (token) => {
    setCapthaToken(token);
    setCaptchaError("");
  };

  return {
    nameProps,
    emailProps,
    companyProps,
    // geoInterestedProps,
    interestedInProps,
    // trafficTypesProps,
    // productInterestedProps,
    contactProps,
    messageProps,
    isSubmitting,
    validate,
    resetEveryError,
    handleCaptchaToken,
    captchaError,
  };
}
