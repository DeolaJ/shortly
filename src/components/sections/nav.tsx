import React, { ReactElement } from 'react';
import Image from 'next/image';
import DesktopMenu from '../partials/desktop-menu';
import MobileMenu from '../partials/mobile-menu';

const navItems = [
  {
    id: 1,
    text: 'Features',
    link: '/',
  },
  {
    id: 2,
    text: 'Pricing',
    link: '/',
  },
  {
    id: 3,
    text: 'Resources',
    link: '/resources',
  },
];
const navButtons = [
  {
    id: 1,
    text: 'Login',
    link: '/',
  },
  {
    id: 2,
    text: 'Sign Up',
    link: '/',
  },
];

function Nav(): ReactElement {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between max-w-6xl px-6 py-10 mx-auto md:px-10">
        <Image src="/logo.svg" width={121} height={33} alt="Shortly Logo" className="block" />
        <DesktopMenu navItems={navItems} navButtons={navButtons} />
        <MobileMenu navItems={navItems} navButtons={navButtons} />
      </nav>
    </header>
  );
}

export default Nav;
