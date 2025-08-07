import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Loader from "../common/Loader";
import {
  ContactUsValidationSchema,
  getContactUsValidationSchema,
  isArabicText,
} from "../utils/Validations";
import Title from "../common/Title";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  email: "",
  code: "+966",
  mobile: "",
  message: "",
};

const ConsultOurExperts = () => {
  const { t } = useTranslation();

  const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL;
  const AUTH_TOKEN = process.env.NEXT_PUBLIC_CONTACT_API_TOKEN;

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/common/contactUs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      // toast.success(t("Thank You! We'll get back to you soon."));
      Swal.fire({
        title: t("Thank You! We'll get back to you soon."),
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
      resetForm();
    } catch (error) {
      Swal.fire({
        title: t("Failed to send message. Please try again."),
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="common_section consult_our_experts">
      <Container>
        <div className="mx-0 row">
          <div className="inner_row">
            <div className="left_section">
              <div className="content">
                <h2>
                  {t("Let's Connect and Bring Your Ideas to Life!")}
                </h2>
                <p>
                  {t(
                    "Tell us about your requirements, and our team will get in touch with you within 24 hours."
                  )}
                </p>
              <Image
                src={"/images/home/contactOurExportVector.webp"}
                width={576}
                height={294}
                alt={t("Consult with our experts illustration")}
                className="vector_bg"
              />
              </div>
            </div>

            <div className="right_section">
              <Formik
                initialValues={initialValues}
                validationSchema={getContactUsValidationSchema(t)}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, isValid, dirty, values }) => (
                  <Form className="common_form">
                    <Title title={t("Want work with us")} />
                    <p className="para">
                      {t(
                        "Have a project in mind or need expert guidance? Our team is here to help you move forward."
                      )}
                    </p>
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
                        <Field
                          as="select"
                          name="code"
                          className="input mw-80 ltr"
                          placeholder={t("Select County code")}
                        >
                          <option value="+966">+966</option>
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
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
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`submit-btn ${isValid && dirty ? "active" : ""}`}
                    >
                      {t("Submit")}
                      {isSubmitting && <Loader />}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConsultOurExperts;
