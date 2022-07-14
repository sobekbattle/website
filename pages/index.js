import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/Footer";

const Home = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      // <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SSZKDT0PBC"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

        gtag('config', 'G-SSZKDT0PBC');
      </script>
    </Head>

    <Nav />
    
    <div className='flex min-h-screen justify-center items-center'>
    <div className='max-w-lg mx-auto px-4 sm:px-6 lg:px-8" rounded overflow-hidden shadow-lg my-2'>
    <div className='font-bold text-xl justify-center mb-2'>Sobek Battle</div>
        <img
          className='w-full'
          src="/sobek.png"
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>Full Contact Crypto</div>
          <p className='text-grey-darker text-base'>
          NFT based Player vs Player competition for crypto currency rewards.
          </p>
        </div>
    </div>
    </div>
    <Footer />
  </div>
    
);

export default Home;
