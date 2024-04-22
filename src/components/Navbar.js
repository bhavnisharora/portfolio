import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block  bg-dark absolute
      left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/bhavnisharora/"
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="h-8 w-8" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/bhavnish-arora-b6398a198"
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedinIn className="h-8 w-8" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/bhaviarora786/?utm_medium=copy_link"
          target={"_blank"}
          className="w-6 ml-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GrInstagram className="h-8 w-8" />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
