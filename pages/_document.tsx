import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html lang={"ja"}>
        <Head>
          <title></title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <meta name="description" content="" />
          <meta property="og:url" content="" />
          <meta property="og:title" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="600" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Mulish:100,300,400,500,700,900|Roboto:100,300,400,500,700,900&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
