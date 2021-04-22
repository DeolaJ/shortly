import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import FooterGrid from '../partials/footer-grid';
import FooterSocial from '../partials/footer-social';

const FooterWrapper = styled.section`
  > article {
    grid-template-columns: 2fr 3fr 1fr;
    gap: 2rem;
  }
`;

function Footer(): ReactElement {
  return (
    <FooterWrapper className="text-white bg-neutral-darkViolet">
      <article className="max-w-6xl px-6 py-16 mx-auto text-center md:py-20 md:text-left md:grid">
        <article>
          <Image src="/logo-white.svg" width={121} height={33} alt="Shortly Logo" />
        </article>
        <FooterGrid />
        <FooterSocial />
      </article>
    </FooterWrapper>
  );
}

export default Footer;
