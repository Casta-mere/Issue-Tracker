"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="flex border-b mb-5 px-5 h-14">
      <NavLinks />
    </nav>
  );
};

const links = [
  { label: <AiFillBug />, href: "/" },
  { label: "DashBoard", href: "/dashboard" },
  { label: "Issues", href: "/issues" },
];

const NavLinks = () => {
  const currentPath = usePathname();

  return (
    <ul className="flex gap-6 items-center">
      {links.map((link) => (
        <Link
          className={classNames({
            "text-zinc-900": link.href === currentPath,
            "text-zinc-500": link.href !== currentPath,
            "hover:text-zinc-800 transaition-colors": true,
          })}
          key={link.href}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}{" "}
    </ul>
  );
};

export default NavBar;
