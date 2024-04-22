import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium
    text-lg"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build by <span className="text-primary text-2xl px-1"> &#9825; </span>
          <Link href="/">Bhavnish Arora</Link>
        </div>

        <Link href="https://wa.me/916284274857" target="_blank">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
