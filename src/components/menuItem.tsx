import { MenuItemProps } from "@/types/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const MenuItem = ({ href, name, closeMenu }: MenuItemProps) => {
  const pathname = usePathname();
  const active = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        onClick={closeMenu}
        className={`block px-5 py-3  ${
          active
            ? "font-extrabold text-dark-01 hover:font-extrabold"
            : "hover:font-bold"
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuItem;
