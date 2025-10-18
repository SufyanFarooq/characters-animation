import React from 'react';
import Head from 'next/head';
import AnimatedCharacters from '../components/AnimatedCharacters';

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Characters</title>
        <meta name="description" content="Animated characters with Framer Motion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Animated Characters
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Watch the apple, rabbit, and hen breathe with smooth scaling animations
          </p>
          <AnimatedCharacters />
        </div>
      </main>
    </>
  );
}
