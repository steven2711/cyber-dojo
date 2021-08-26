import Head from "next/head";
import Header from "./Header";
import Showcase from "./Showcase";
import Footer from "./Footer";
import { useRouter } from "next/router";

import styles from "../styles/Layout.module.css";

export default function Layout({
  title,
  keywords,
  description,
  imagePath,
  children,
  noIndex,
  url,
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Meta Tags */}

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={imagePath} />

        {/* Facebook Meta Tags */}

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePath} />

        {/* Twitter Meta Tags */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagePath} />

        {/* Google Search Console Verification */}

        <meta
          name="google-site-verification"
          content="SFHRJZgt5auF9RkxEE4oe1z1bu-4YqzftVJGdDeqLAs"
        />

        {/* Google Analytics*/}

        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}

        {/* No Index Tag */}

        {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
      </Head>

      <Header />
      <main className={styles.main}>
        {router.pathname === "/" && <Showcase />}
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Cyber Dojo | Web Design & Digital Marketing Agency",
  description:
    "Cyber Dojo offers website design, development, SEO, and digital marketing services to help small businesses thrive online. Located in Murfreesboro, TN.",
  keywords:
    "websites, digital marketing, SEO, web design, web development, Murfreesboro",
  imagePath: "/images/people-working-on-computers-540.jpg",
  url: "https://www.cyberdojo.io/",
  noIndex: false,
};
