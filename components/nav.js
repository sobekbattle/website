// components/nav.js
import React from "react";
import Link from "next/link";

const links = [
  { href: "/lore", label: "Lore" },
  { href: "https://drive.google.com/file/d/16qlL0UV0H5omf3aVaz4zHF-XlIh-EGvN/view?usp=sharing", label: "Deck" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="max-w-7xl mx-auto px-4 sm:px-6">
    <ul className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-end md:space-x-10">
      <li className="flex px-2 py-1">
        <Link href="/">
          <a className="text-blue-500 no-underline text-sm">Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} className="flex px-2 py-1">
          <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;