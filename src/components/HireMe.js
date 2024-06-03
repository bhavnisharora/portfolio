import React from "react";
import Image from "next/image";
import Link from "next/link";
import CircularText from "../../public/images/articles/circulartext.png";
const HireMe = () => {
  return (
    <>
      <img src={CircularText} className="fill-dark animate-spin" alt="" />

      <div
        className="fixed left-4 bottom-4 
  flex items-center justify-center overflow-hidden"
      >
        <div className="w-48 h-auto flex items-center justify-center relative">
          <Image
            src={CircularText}
            className="fill-dark animate-spin-slow dark:fill-light"
            alt=""
          />
          <Link
            href="https://www.upwork.com/freelancers/~0114030dfb3b78b204"
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark
            w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            target="_blank"
          >
            Hire Me
          </Link>
        </div>
      </div >
    </>
  );
};

export default HireMe;
