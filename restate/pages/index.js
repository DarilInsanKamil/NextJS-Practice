import Layout from "../components/layout";
import Head from "next/head";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>0home Real Estate</title>
        <meta name="description" content="cari real estate murah dan terpercaya" />
        <meta name="keywords" content="real estate, rumah, apartment" />
        <meta name="author" content="Daril Insan Kamil" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Layout>
  )
}
