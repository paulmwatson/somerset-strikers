import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Somerset Strikers Cricket Club</title>
        <meta
          name="description"
          content="Somerset West's newest youth and junior cricket club. Join now."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          property="og:image"
          content="https://www.somersetstrikers.co.za/profile.webp"
        />
        <meta property="og:url" content="https://www.somersetstrikers.co.za/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Somerset Strikers Cricket Club" />
        <meta
          property="og:description"
          content="Somerset West's newest youth and junior cricket club."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="somersetstrikers.co.za" />
        <meta
          property="twitter:url"
          content="https://www.somersetstrikers.co.za/"
        />
        <meta name="twitter:title" content="Somerset Strikers Cricket Club" />
        <meta
          name="twitter:description"
          content="Somerset West's newest youth and junior cricket club."
        />
        <meta
          name="twitter:image"
          content="https://www.somersetstrikers.co.za/profile.webp"
        />
      </Head>
      <section className="section">
        <header className="has-text-centered">
          <Image
            src="/logo.webp"
            alt="Somerset Strikers logo"
            height="256"
            width="256"
          />
        </header>
        <main className="content container is-max-width-30em has-text-centered">
          <h1 className="title is-2 has-text-primary is-text-transform-uppercase has-text-weight-bold">
            Somerset Strikers
          </h1>
          <p>
            Somerset Strikers is a new youth and junior cricket club in Somerset
            West, South Africa. Our focus is to provide coaching, game time, and
            Western Province Youth League cricket matches to young cricketers in
            an inclusive, safe, constructive, and competitive environment.
          </p>
          <hr />
          <div className="columns is-mobile has-text-centered">
            <div className="column">
              <a href="mailto:hello@somersetstrikers.co.za">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fa-regular fa-envelope fa-2xl"></i>
                  </span>
                  <span className="sr-only">E-mail</span>
                </span>
              </a>
            </div>
            <div className="column">
              <a href="https://twitter.com/SomersetSCC/" target="noopener">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fa-brands fa-twitter fa-2xl"></i>
                  </span>
                  <span className="sr-only">Twitter</span>
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
                  <span className="sr-only">Instagram</span>
                </span>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="https://facebook.com/somersetstrikers" target="noopener">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </span>
                  <span className="sr-only">Facebook</span>
                </span>
              </a>
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
