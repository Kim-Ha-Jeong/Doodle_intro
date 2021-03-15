import React from "react";
import App from "next/app";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@brainhubeu/react-carousel/lib/style.css';
import theme from '../src/style/theme.js';

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@media (max-width: 262px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 263px) and (max-width: 300px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 301px) and (max-width: 337px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 338px) and (max-width: 375px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 376px) and (max-width: 412px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 413px) and (max-width: 450px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 451px){
  html {
    font-size: 13px;
  }
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.1rem;
  background-color:#ccc;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
          html,
body {
  margin: 0;
}

#header {
  font-family: sans-serif;
  position: fixed;
  z-index: 1;
  top: 0;

}

#page-wrap {
  text-align: center;
  overflow: auto;
  top: 45%;
  position: relative;
}

.bm-item {
  display: inline-block;

  /* Our sidebar item styling */
  text-decoration: none;
  margin-bottom: 10px;
  color: #d1d1d1;
  transition: color 0.2s;
}

.bm-item:hover {
  color: white;
}

.bm-burger-button {
    position: fixed;
    width: 24px;
    height: 20px;
    right: 5%;
    top: 21.3px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: black;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 30px;
  width: 30px;
  right : 10%!important;
  top : 8%!important;
}

/* Color/shape of close button cross */
.bm-cross {
  background: black;
  height: 30px!important;
}

/* General sidebar styles */
.bm-menu {
  background: white;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

.bm-menu-wrap {
  width: 250px!important;
  background: white;
  box-shadow: 0px -5px 20px 0px rgb(0 0 0 / 11%);
  top: 0px;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: black;
  margin-top: 45%;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  top: 0px;
}

.ant-carousel{
  width: 100%;
}

.ant-carousel .slick-dots{
  z-index : 0!important;
}
.Feed{
  width: 100%;
  margin-bottom: 10%;
}
.Feed > a > img{
  width: 33.3%;
}
.col-6{
  padding: 0 2%!important;
}
.container{
  padding: 0 7%!important;
}
a{
  color: black!important;
}
a:hover, a:visited, a:link{
  text-decoration: none!important;
}

.BrainhubCarousel__track {
  display: flex;
  width: 100%;
}

.BrainhubCarouselItem{
  flex: 1 1 0px;
  transition: transform 300ms ease 100ms;
}

.BrainhubCarouselItem:after {
  content: "";
  display: block;
  padding-top: 70%;
}

.BrainhubCarousel__track:hover .BrainhubCarouselItem{
  transform: translateX(-25%);
}

.BrainhubCarouselItem:hover ~ .BrainhubCarouselItem {
  transform: translateX(25%);
}

.BrainhubCarousel__track .BrainhubCarouselItem:hover {
  transform: scale(1.2);
}
#deskRow:focus-within #item,
#deskRow:hover #item {
  transform: translateX(-12.5%);
}

#item:focus ~ #item,
#item:hover ~ #item {
  transform: translateX(12.5%);
}

#deskRow #item:focus,
#deskRow #item:hover {
  transform: scale(1.25);
  z-index: 1;
}
`;

export default class Timeline extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Head>
          <title>Doodle</title>
        </Head>
          <Wrapper>
            <Component {...pageProps}/>
          </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: white;
  position: relative;
`;
