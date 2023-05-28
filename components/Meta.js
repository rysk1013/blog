import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteMeta } from 'lib/Constants';

export const Meta = (props) => {
  const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;
  const title = props.pageTitle ? `${props.pageTitle} | ${siteTitle}` : siteTitle;
  const desc = props.pageDesc ?? siteDesc;
  const router = useRouter();
  const url = `${url}${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:local" content={siteLocal} />
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  );
}
