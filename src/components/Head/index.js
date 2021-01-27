import Head from 'next/head';
import MY_SEO from '../../config/config';

const Meta = ({ image, url, description, title, keywords, type  }) => (
    <Head>
      <title key="title">{MY_SEO.title}</title>  

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_br" />

      <meta property="og:title" content={MY_SEO.openGraph.title} />
      <meta property="og:site_name" content="NodeQuiz" />

      <meta key="og:type" name="og:type" content={MY_SEO.openGraph.type} />
      <meta key="description" name="description" content={MY_SEO.description} />
      <meta key="keywords" name="keywords" content={MY_SEO.keywords} />
      <meta key="og:title" name="og:title" content={MY_SEO.openGraph.title} />
      <meta key="og:description" name="og:description" content={MY_SEO.openGraph.description} />
      <meta key="og:url" name="og:url" content={MY_SEO.openGraph.url} />
      <meta key="og:image" property="og:image" content={MY_SEO.openGraph.image} />
      <meta key="og:image:secure_url" property="og:image:secure_url" content={MY_SEO.openGraph.image} />
      <meta key="og:image:alt" property="og:image:alt" content="NodeJS"/>
      <meta key="og:image:type" property="og:image:type" content="image/jpg"/>
      <meta key="og:image:width" property="og:image:width" content="1200"/>
      <meta key="og:image:height" property="og:image:height" content="630"/>
      <meta key="twitter:card" name="twitter:card" content="summary_large_image"/>
      <meta key="twitter:title" name="twitter:title" content="Quiz Nodejs"/>
      <meta Key="twitter:site" name="twitter:site" content="@thilourenco"/>
      <meta Key="twitter:creator" name="twitter:creator" content="@thilourenco"/>
      <meta Key="twitter:image" name="twitter:image" content={MY_SEO.openGraph.image} />
      <meta Key="twitter:image:src" name="twitter:image:src" content={MY_SEO.openGraph.image} />
      <meta Key="twitter:image:alt" name="twitter:image:alt" content="NodeJS"/>    
    </Head>
);

export default Meta;