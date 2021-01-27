import Head from 'next/head';
import { MY_SEO } from '../../config/config';

const Meta = () => (
    <Head>
      <title key="title">{MY_SEO.title}</title>

      <meta
        key="description"
        name="description"
        content={MY_SEO.description}
      />
      <meta
        key="og:type"
        name="og:type"
        content={MY_SEO.openGraph.type}
      />
      <meta
        key="og:title"
        name="og:title"
        content={MY_SEO.openGraph.title}
      />
      <meta
        key="og:description"
        name="og:description"
        content={MY_SEO.openGraph.description}
      />
      <meta
        key="og:url"
        name="og:url"
        content={MY_SEO.openGraph.url}
      />
      <meta
        key="og:image"
        name="og:image"
        property="og:image:type" content="image/png"
        property="og:image:width" content="224"
        property="og:image:height" content="256"
        property="og:description" content="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
        content={MY_SEO.openGraph.image}
      />
    </Head>
);

export default Meta;