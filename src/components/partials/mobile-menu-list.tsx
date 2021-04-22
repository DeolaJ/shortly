import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import Button from './button';

type NavItemProps = {
  id: number;
  text: string;
  link: string;
};

type MobileMenuListProps = {
  navItems: Array<NavItemProps>;
  navButtons: Array<NavItemProps>;
};

const MobileMenuListWrapper = styled.ul`
  box-shadow: 0 0 11px 3px rgba(0, 0, 0, 0.1);
`;

const MobileMenuList: FC<MobileMenuListProps> = ({ navItems, navButtons }) => {
  return (
    <MobileMenuListWrapper className="p-6 m-0">
      {navItems.map((navItem) => (
        <li className="block p-2 mx-0 my-2" key={navItem.id}>
          <Link href={navItem.link}>
            <a className="p-0 text-base font-bold no-underline cursor-pointer">
              <span>{navItem.text}</span>
            </a>
          </Link>
        </li>
      ))}
      <hr className="my-5 border-neutral-lightGrey opacity-10" />
      {navButtons.map((navButton) => (
        <li className="block py-1 mx-0 my-2" key={navButton.id}>
          <Link href={navButton.link}>
            <a className="p-0 cursor-pointer">
              <Button
                mode={navButton.text === 'Login' ? 'default' : 'primary'}
                size="sm"
                text={navButton.text}
                rounded
                className={navButton.text === 'Login' ? 'hover:text-neutral-gray text-white' : 'w-full'}
              />
            </a>
          </Link>
        </li>
      ))}
    </MobileMenuListWrapper>
  );
};

MobileMenuList.propTypes = {
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

export default MobileMenuList;
