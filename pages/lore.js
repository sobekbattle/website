import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Lore = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    
    <div className='flex min-h-screen justify-center items-center'>
    <div className='max-w-lg mx-auto px-4 sm:px-6 lg:px-8" rounded overflow-hidden shadow-lg my-2'>
    <div className='font-bold text-xl justify-center mb-2'>Lore</div>
        <img
          className='w-full'
          src="/sobek.png"
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>Full Contact Crypto</div>
          <p className='text-grey-darker text-base'>
          In ancient times, a great beast walked the Earth with men. Some late remnant of an even more ancient planet, these hulking beast were surprisingly friendly and devoted to anyone who fed them.
          </p>
        </div>
    </div>
    </div>
    <Footer />
  </div>
    
);

export default Lore;