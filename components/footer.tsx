import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <footer className="footer is-border-top-grey-lighter is-size-7 has-text-grey-light has-text-centered pt-6 mt-6">
      <div className="columns is-mobile has-text-centered is-max-width-480">
        <div className="column">
          <a href="mailto:hello@somersetstrikers.co.za">
            <span className="icon-text">
              <span className="icon">
                <i className="fa-regular fa-envelope fa-2xl"></i>
              </span>
              <span className="sr-only">{t("email")}</span>
            </span>
          </a>
        </div>
        <div className="column">
          <a href="https://twitter.com/SomersetSCC/" target="noopener">
            <span className="icon-text">
              <span className="icon">
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </span>
              <span className="sr-only">{t("twitter")}</span>
            </span>
          </a>
        </div>
        <div className="column has-text-centered">
          <a
            href="https://www.instagram.com/somersetstrikers/"
            target="noopener"
          >
            <span className="icon-text">
              <span className="icon">
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </span>
              <span className="sr-only">{t("instagram")}</span>
            </span>
          </a>
        </div>
        <div className="column has-text-centered">
          <a href="https://facebook.com/somersetstrikers" target="noopener">
            <span className="icon-text">
              <span className="icon">
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </span>
              <span className="sr-only">{t("facebook")}</span>
            </span>
          </a>
        </div>
      </div>
      <div className="columns is-mobile has-text-centered is-max-width-480">
        <div className="column">
          <Link href="/join">
            <a>{t("navigation.join")}</a>
          </Link>
        </div>
        <div className="column">
          <Link href="/practice">
            <a>{t("navigation.practice")}</a>
          </Link>
        </div>
        <div className="column">
        <Link href="/contact-us">
            <a>{t("navigation.contact-us")}</a>
          </Link>
        </div>
      </div>
      <div className="section">
        <a href="https://newlandscricket.com/youth-cricket/" target="noopener">
          <figure className="image is-128x128">
            <Image
              src="/images/wcpa-logo.webp"
              alt={t("wpca-logo.alt")}
              width="128"
              height="92"
            />
          </figure>
        </a>
      </div>
      <span title={t("copyright.entity")}>
        &copy;{t("copyright.entity")} {new Date().getFullYear()}
      </span>
    </footer>
  );
}
