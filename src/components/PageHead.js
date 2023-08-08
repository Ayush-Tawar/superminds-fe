// import { SITE_DOMAIN } from "@/utils/config";
import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_DOMAIN } from "../utils/api";

export default function PageHead({ seo, structuredData, noIndex = false }) {
  const router = useRouter();
  const canonicalURL = `${SITE_DOMAIN}${
    router?.asPath !== "/" ? router?.asPath : ""
  }`;
  return (
    <Head>
      <link rel="canonical" href={canonicalURL} />
      <title>{seo?.pageTitle || "SuperMinds IT"}</title>
      <link rel="icon" href="/images/favicon.svg" />
      {noIndex && <meta name="robots" content="noindex"></meta>}
      <meta name="title" content={seo?.seoTitle || "SuperMinds IT"} />
      <meta
        name="description"
        content={seo?.seoDescription || "SuperMinds IT"}
      />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}></script>
      )}
    </Head>
  );
}
