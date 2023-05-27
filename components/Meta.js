import Head from 'next/head';

export const Meta = (props) => {
  return (
    <Head>
      <title>{props.pageTitle}</title>
      <meta property="og:title" content={props.pageTitle} />
    </Head>
  );
}
