import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { PiHandWavingLight } from "react-icons/pi";
const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium
    text-lg dark:text-light dark:border-light"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build by <span className="text-primary dark:text-primaryDark text-2xl px-1"> &#9825; </span>
          <Link href="/">Bhavnish Arora</Link>
        </div>

        <Link href="https://wa.me/916284274857" target="_blank">
          <div className="flex items-center justify-center gap-2">Say hello <PiHandWavingLight size={25} /></div>
        </Link>
      </Layout>
    </footer >
  );
};

export default Footer;
