import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div className='flex min-h-screen justify-center items-center'>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <main>
    <div className='max-w-xs rounded overflow-hidden shadow-lg my-2'>
        <img
          className='w-full'
          src="/sobek.png"
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>Next + Tailwind ❤️</div>
          <p className='text-grey-darker text-base'>
            Next and Tailwind CSS are a match made in heaven, check out this
            article on how you can combine these two for your next app.
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </div>
    
);

export default Home;