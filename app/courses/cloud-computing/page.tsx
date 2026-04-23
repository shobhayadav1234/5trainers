"use client";
import React from 'react';

import HeroSection from '@/components/hero section';
import Write  from '@/components/write';
import Move from '@/components/move';
import Courses from '@/components/courses';
import Book from '@/components/Book';
import Drop from '@/components/drop';
import Tests from '@/components/Tests';

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection />
      <Write/>
      <Move/>
      <Courses/>
      <Book/>
      <Drop/>
      <Tests/>

  
    </main>
  );
}