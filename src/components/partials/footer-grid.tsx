import React, { FC } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const featuresLinks = [
  {
    id: 1,
    text: 'Link Shortening',
    link: '/',
  },
  {
    id: 2,
    text: 'Branded Links',
    link: '/',
  },
  {
    id: 3,
    text: 'Analytics',
    link: '/',
  },
];

const resourcesLinks = [
  {
    id: 1,
    text: 'Blog',
    link: '/',
  },
  {
    id: 2,
    text: 'Developers',
    link: '/',
  },
  {
    id: 3,
    text: 'Support',
    link: '/',
  },
];

const companyLinks = [
  {
    id: 1,
    text: 'About',
    link: '/',
  },
  {
    id: 2,
    text: 'Our Team',
    link: '/',
  },
  {
    id: 3,
    text: 'Careers',
    link: '/',
  },
  {
    id: 4,
    text: 'Contact',
    link: '/',
  },
];

const FooterGridWrapper = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 640px) {
    > article + article {
      margin-top: 2.5rem;
    }
  }
`;

const FooterGrid: FC = () => {
  return (
    <FooterGridWrapper className="mt-8 md:mt-0 md:grid">
      <article>
        <h4 className="m-0 mb-5 text-base font-bold md:text-sm text-custom-violet">Features</h4>
        <ul>
          {featuresLinks.map((link) => (
            <li className="mb-2" key={link.id}>
              <Link href={link.link}>
                <a className="text-sm leading-4 text-neutral-gray hover:text-primary-cyan">{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h4 className="m-0 mb-5 text-base font-bold md:text-sm text-custom-violet">Resources</h4>
        <ul>
          {resourcesLinks.map((link) => (
            <li className="mb-2" key={link.id}>
              <Link href={link.link}>
                <a className="text-sm leading-4 text-neutral-gray hover:text-primary-cyan">{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h4 className="m-0 mb-5 text-base font-bold md:text-sm text-custom-violet">Company</h4>
        <ul>
          {companyLinks.map((link) => (
            <li className="mb-2" key={link.id}>
              <Link href={link.link}>
                <a className="text-sm leading-4 text-neutral-gray hover:text-primary-cyan">{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </FooterGridWrapper>
  );
};

export default FooterGrid;
