import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from './button';

type NavItemProps = {
  id: number;
  text: string;
  link: string;
};

type NavMenuProps = {
  navItems: Array<NavItemProps>;
  navButtons: Array<NavItemProps>;
};

const DesktopMenu: FC<NavMenuProps> = ({ navItems, navButtons }) => (
  <ul className="items-center justify-between flex-grow hidden p-0 m-0 mb-2 ml-8 bg-white md:flex">
    <ul>
      {navItems.map((navItem) => (
        <li className="inline-block p-2 mx-2 my-0" key={navItem.id}>
          <Link href={navItem.link}>
            <a className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:text-neutral-darkViolet text-neutral-grayishViolet">
              <span>{navItem.text}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <ul>
      {navButtons.map((navButton) => (
        <li className="inline-block" key={navButton.id}>
          <Link href={navButton.link}>
            <a className="p-1 cursor-pointer">
              <Button
                mode={navButton.text === 'Login' ? 'default' : 'primary'}
                size="sm"
                text={navButton.text}
                rounded
                className={
                  navButton.text === 'Login' ? 'hover:text-neutral-darkViolet text-neutral-grayishViolet ' : null
                }
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </ul>
);

DesktopMenu.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  navButtons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default DesktopMenu;
