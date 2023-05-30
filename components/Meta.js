import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteMeta } from 'lib/Constants';

export const Meta = (props) => {
  const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;
  const title = props.pageTitle ? `${props.pageTitle} | ${siteTitle}` : siteTitle;
  const desc = props.pageDesc ?? siteDesc;
  const router = useRouter();
  const url = `${url}${router.asPath}`;
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width;
  const imgH = pageImgH || siteImg.height;
  const imgUrl = img.startsWith('http') ? img : `${siteUrl}${img}`;

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
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />

    </Head>
  );
}
