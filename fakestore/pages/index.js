import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Layout from '../components/Layout'

// export async function getStaticProps() {
//   const res = await fetch('https://fakestoreapi.com/products')
//   const Data = await res.json()
//   return {
//     props: {
//       Data
//     }
//   }
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>List Product</title>
      </Head>
      <Layout>
        <Banner />
      </Layout>
    </>
  )
}
