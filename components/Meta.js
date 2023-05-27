import Head from 'next/head';
import { siteMeta } from 'lib/Constants';

export const Meta = (props) => {
  const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;
  const title = props.pageTitle ? `${props.pageTitle} | ${siteTitle}` : siteTitle;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Head>
  );
}
