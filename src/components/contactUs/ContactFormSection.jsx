import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import Loader from "../common/Loader";
import {
  ContactUsValidationSchema,
  getContactUsValidationSchema,
  isArabicText,
} from "../utils/Validations";

import Title from "../common/Title";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const ContactFormSection = () => {
  const { t } = useTranslation();
  const [countryCodes, setCountryCodes] = useState([]);
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,idd");
        const data = await res.json();

        const codes = data
          .map((country) => {
            const root = country.idd?.root || "";
            const suffixes = country.idd?.suffixes || [];

            if (root && suffixes.length > 0) {
              return suffixes.map((suffix) => ({
                code: `${root}${suffix}`,
                name: country.name.common,
              }));
            }
            return [];
          })
          .flat()
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort by country name

        setCountryCodes(codes);
      } catch (error) {
        console.error("Failed to fetch country codes", error);
      }
    };

    fetchCountryCodes();
  }, []);


  const router = useRouter();
  const { service } = router.query;

  const initialValues = {
    name: "",
    email: "",
    code: "+966",
    mobile: "",
    message: "",
  };

  const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL;
  const AUTH_TOKEN = process.env.NEXT_PUBLIC_CONTACT_API_TOKEN;

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    const payload = {
      ...values,
      type: service || "",
    };
    try {
      const response = await fetch(`${API_URL}/api/v1/common/contactUs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      Swal.fire({
        title: t("Thank You! We'll get back to you soon."),
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
      resetForm();
    } catch (error) {
      Swal.fire({
        title: error.message || t("Failed to send message. Please try again."),
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
      // toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact_form">
      <Title title={t("Want work with us")} />
      <p>
        {t(
          "Have a project in mind or need expert guidance? Our team is here to help you move forward."
        )}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={getContactUsValidationSchema(t)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty, values }) => (
          <Form className="common_form">
            <div className="form_field">
              <Field
                name="name"
                type="text"
                placeholder={t("Name")}
                className={isArabicText(values.name) ? "rtl" : ""}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form_field">
              <Field
                type="email"
                name="email"
                placeholder={t("Email Address")}
                className="input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form_field">
              <div className="phone_div">
                <Field as="select" name="code" className="input mw-80">
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>({country.code})</option>
                  ))}
                </Field>

                <Field
                  name="mobile"
                  type="tel"
                  placeholder={t("Mobile Number")}
                  className={isArabicText(values.mobile) ? "rtl" : ""}
                />
              </div>
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form_field">
              <Field
                as="textarea"
                name="message"
                placeholder={t("Describe Your Project")}
                className={isArabicText(values.message) ? "rtl" : ""}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="btn_div">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isValid && dirty ? "active" : ""}`}
              >
                {t("Submit")}
                {isSubmitting && <Loader />}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactFormSection;
