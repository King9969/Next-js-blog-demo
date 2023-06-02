import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Josefin Sans', sans-serif;
          }
        `}</style>
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default IndexPage;
