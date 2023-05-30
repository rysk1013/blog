import { Html, Head, Main, NextScript } from 'next/document';
import { siteMeta } from 'lib/Constants';
const { siteLang } = siteMeta;

export const Document = () => {
  return (
    <Html lang={siteLang} >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
