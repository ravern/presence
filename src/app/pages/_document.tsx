import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

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
