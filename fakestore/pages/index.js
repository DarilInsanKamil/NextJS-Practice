import Head from 'next/head'
import Banner from '../components/banner'
import Layout from '../components/Layout'
import Image from 'next/image';
import { useState } from 'react';
import Tracker from '../components/tracker';
import SliceZero from '../logic/convert';
import FakePay from '../components/fakepay';
import useDeviceSize from '../logic/width-height';
import { data } from 'autoprefixer';
export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const Data = await res.json()
  return {
    props: {
      datas: Data
    }
  }
}

function Diskon(hargaAwal) {
  let diskon
  diskon = 0.2 * hargaAwal;
  let hargaDiskon = hargaAwal - diskon;
  let Slicing = hargaDiskon.toString().substr(0, 4);
  return Slicing
}


const Home = ({ datas }) => {
  const [width] = useDeviceSize()
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(6)


  const handleNext = () => {
    if (n2 < datas.length) {
      setN1(n1 + 6) % datas.length
      setN2(n2 + 6) % datas.length
    }
  }

  const handlePrev = () => {
    const prevIndex = n1 - 6
    const prevIndex1 = n2 - 6
    if (n1 > 0) {
      setN1(prevIndex)
      setN2(prevIndex1)
    }
  }

  return (
    <>
      <Head>
        <title>List Product</title>
        <meta name='description' content="portofolio e-commerce daril insan kamil"></meta>
        <meta data-rh="true" name="twitter:description" content="Situs jual beli online terlengkap dengan berbagai pilihan toko online terpercaya. Belanja online mudah dan menyenangkan di FakeStore. Pengiriman cepat."></meta>
      </Head>
      <Layout>
        <div>
          <Banner />
          <div className='flex w-full my-8 justify-center '>
            <FakePay />
            <Tracker />
          </div>
          {/* Flash Sale */}
          <div className='flex mx-auto overflow-hidden sm:overflow-x-scroll bg-sky-600'>
            {
              datas.slice(n1, width > 768 ? n2 : datas.length).map((data => (
                <div key={data.id} className="rounded-xl flex-col max-w-[160px] p-2 flex m-2 bg-white">
                  <Image draggable="false" src={data.image} width={140} height={175} alt={data.title} />
                  <p className='text-[16px] text-ellipsis w-[150px] whitespace-nowrap overflow-hidden'>{data.title}</p>
                  <p className='line-through text-sm text-slate-400'>${data.price}</p>
                  <p className='text-[16px] font-semibold'>${Diskon(data.price)}</p>
                  <section className='flex justify-between'>
                    <p>terjual {data.rating.count - 65}</p>
                    <section className='flex'>
                      <p>{data.rating.rate}</p>
                      <Image src="/star.svg" alt="rate" width={18} height={18} />
                    </section>
                  </section>
                </div>
              )))
            }
            <p>Lihat semua</p>
          </div>
          <button className='h-fit px-3 rounded-[100px] pb-2 bg-white z-10' onClick={handlePrev}>
            <p className='text-2xl font-bold'>{'<'}</p>
          </button>
          <button className='h-fit px-3 rounded-[100px] pb-2 bg-white z-10' onClick={handleNext}>
            <p className='text-2xl font-bold'>{'>'}</p>
          </button>
        </div>
      </Layout>
    </>
  )
}
export default Home;