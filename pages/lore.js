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
        <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Full Contact Crypto</div>
        <div className='text-grey-darker text-base'>
        In ancient times, a great beast walked the Earth with men. Some late remnant of an even more ancient planet, these hulking beast were surprisingly friendly and devoted to anyone who fed them.</div>
        <div className='text-grey-darker text-base'>
        And fed them they did for they were always hungry. The bottomless pits that they were even inspired some to worship the beast as the God of Hunger and named him Sobek.</div>
        <div className='text-grey-darker text-base'>
        The Sobeki, or trainers, learned early on that the beast would gladly compete for gold, gems and baubles. Thus the Great Sobek Battles were born. Tournaments of epic proportions for gold and glory were held all through out the ancient lands.</div>
        <div className='text-grey-darker text-base'>
        Until one day, the Sobek disappeared. They entered a long, deep hibernation to sleep off their excesses in thousand year long food comma.</div>
        <div className='text-grey-darker text-base'>
        There are new rumblings and grumblings. Some can hear it and know what opportunities await for those who learn the ways of the Sobeki and prepare for The Great Sobek Battles.</div>
        </div>
    </div>
    </div>
    <Footer />
  </div>
    
);

export default Lore;