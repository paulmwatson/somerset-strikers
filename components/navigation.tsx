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
          <Link href="/">
            <a className="navbar-item">
              <Image
                src="/logo-wide-new.webp"
                alt="Logo"
                width="603"
                height="128"
              />
            </a>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link href="/join">
              <a className="navbar-item">{t("navigation.join")}</a>
            </Link>
            <Link href="/practice">
              <a className="navbar-item">{t("navigation.practice")}</a>
            </Link>
            <Link href="/">
              <a className="navbar-item is-hidden">{t("navigation.play")}</a>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/contact-us">
                  <a className="button is-outlined">
                    <strong>{t("navigation.contact-us")}</strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
