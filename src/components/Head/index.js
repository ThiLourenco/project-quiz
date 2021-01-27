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

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Quiz Nodejs"/>
      <meta name="twitter:site" content="@thilourenco"/>
      <meta name="twitter:creator" content="@thilourenco"/>
      <meta name="twitter:image" content={MY_SEO.openGraph.image} />
      <meta name="twitter:image:src" content={MY_SEO.openGraph.image} />
      <meta name="twitter:image:alt" content="NodeJS"/>    

      <meta property="og:image" content={MY_SEO.openGraph.image} />
      <meta property="og:image:secure_url" content={MY_SEO.openGraph.image} />
      <meta property="og:image:alt" content="NodeJS"/>
      <meta property="og:image:type" content="image/png"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>

    </Head>
);

export default Meta;