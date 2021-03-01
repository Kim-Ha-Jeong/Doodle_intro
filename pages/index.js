import React, { useState, useEffect } from "react";

import MainSlide from '../src/components/organisms/mainSlide.js';
import MainProduct from '../src/components/molecules/mainProduct.js';
import Header from '../src/components/organisms/header.js';
import InstaPost from '../src/components/molecules/instaPost.js';

export default function Home() {

  return (
    <>
      <Header />
      <MainSlide />
      <MainProduct />
      <InstaPost />
    </>
  );
}