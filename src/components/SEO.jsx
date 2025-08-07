import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

const SEO = ({ title = "", description = "", keywords = "" }) => {
  const { t } = useTranslation();
  return (
    <Head>
      <title>{t(title)} | Surkh</title>
      <meta name="description" content={t(description) || ""} />
      <meta name="keywords" content={t(keywords) || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SEO;
