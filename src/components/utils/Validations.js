import * as Yup from "yup";
import i18next from "i18next";

export const getContactUsValidationSchema = (t) =>
  Yup.object({
    name: Yup.string()
      .matches(
        /^[\u0621-\u064A\u0660-\u0669a-zA-Z\s]+$/,
        t("Only Arabic, English letters, and spaces are allowed")
      )
      .required(t("Please enter your name")),

    email: Yup.string()
      .email(t("A valid work email is required"))
      .matches(
        /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
        t("Email must have a valid top-level domain")
      )
      .required(t("Please enter your email address")),

    mobile: Yup.string()
      .required(t("Enter your 9-digit mobile number"))
      .matches(/^[0-9\u0660-\u0669]+$/, t("Only numbers are allowed")),

    message: Yup.string()
      .required(t("Briefly describe your project needs"))
      .min(5, t("Message must be at least 5 characters"))
      .max(1000, t("Message must be at most 1000 characters")),
  });

export const isArabicText = (text) => {
  const arabicRegex = /^[\u0600-\u06FF\s]+$/;
  return arabicRegex.test(text.trim());
};
