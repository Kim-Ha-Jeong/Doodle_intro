import React, { useState, useEffect } from "react";

import MainSlide from '../src/components/organisms/mainSlide.js';
import Product from '../src/components/molecules/product.js';
import Header from '../src/components/organisms/header.js';

export default function Home() {

  return (
    <>
      <Header />
      <MainSlide />
      <Product />
    </>
  );
}