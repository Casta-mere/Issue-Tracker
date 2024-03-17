"use client";
import { Box } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
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
  const { status, data: session } = useSession();

  return (
    <nav className="flex gap-6 items-center">
      <ul className="flex gap-6 items-center">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transaition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Sign Out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
