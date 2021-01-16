import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import React from "react";



const NavLink = ({ href, as, onClick, children }) => {
  return (
    <Link href={href} as={as} passHref onClick={onClick}>
      {children}
    </Link >
  );
}

export default NavLink;
