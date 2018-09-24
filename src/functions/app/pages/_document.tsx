import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
  public render() {
    return (
      <html>
        <Head>
          <meta name="author" content="Ravern Koh" />
          <meta name="description" content="Dead simple attendance system" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
