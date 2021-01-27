import Head from 'next/head';
import { MY_SEO } from '../../config/config';

const Meta = () => (
    <Head>
      <title key="title">{MY_SEO.title}</title>  
      <meta
        key="og:type"
        name="og:type"
        content={MY_SEO.openGraph.type}
      />
      <meta
        key="description"
        name="description"
        content={MY_SEO.description}
      />
      <meta
        key="keywords"
        name="keywords"
        content={MY_SEO.keywords}
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
        content={MY_SEO.openGraph.image}
      />
    </Head>
);

export default Meta;