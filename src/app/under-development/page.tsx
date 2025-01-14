import React from 'react';
import UnderDevelopment from '../components/UnderDevelopment';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExampleUnderDevelopmentPage() {
  return (
    <>
    <Header />
    <UnderDevelopment message="We're fine-tuning our new feature. It'll be worth the wait!" />
    <Footer />
    </>
  );
}

