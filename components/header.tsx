import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <Head>
      <title>{t("site.title")}</title>
      <meta name="description" content={t("site.description")} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta
        property="og:image"
        content="https://www.somersetstrikers.co.za/profile.webp"
      />
      <meta property="og:url" content="https://www.somersetstrikers.co.za/" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={t("site.title")} />
      <meta property="og:description" content={t("site.description")} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="somersetstrikers.co.za" />
      <meta
        property="twitter:url"
        content="https://www.somersetstrikers.co.za/"
      />
      <meta name="twitter:title" content={t("site.title")} />
      <meta name="twitter:description" content={t("site.description")} />
      <meta
        name="twitter:image"
        content="https://www.somersetstrikers.co.za/profile.webp"
      />
    </Head>
  );
}
