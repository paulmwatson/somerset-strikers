import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <Image
              src="/logo-wide-new.webp"
              alt="Logo"
              width={130}
              height={28}
            />
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {
              document
                .querySelector(".navbar-menu")
                .classList.toggle("is-active");
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link href="/join" className="navbar-item">
              {t("navigation.join")}
            </Link>
            <Link href="/practice" className="navbar-item">
              {t("navigation.practice")}
            </Link>
            <Link href="/play" className="navbar-item">
              {t("navigation.play")}
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/contact-us" className="button is-outlined">
                  <strong>{t("navigation.contact-us")}</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
