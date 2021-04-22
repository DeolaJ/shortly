import React, { ReactElement } from 'react';
import Button from '../partials/button';
import styled from '@emotion/styled';

const HeaderWrapper = styled.section`
  background-image: url('/illustration-working.svg');
  background-size: 125%;
  background-position: 1.5rem top;

  article {
    margin-top: 50%;
  }

  @media (min-width: 375px) and (max-width: 640px) {
    background-position: 3rem top;
    background-size: 100%;
  }

  @media (min-width: 640px) and (max-width: 768px) {
    background-position: 3rem top;
    background-size: 75%;

    article {
      margin-top: 35%;
    }
  }

  @media (min-width: 768px) {
    background-position: 140% center;
    background-size: 64%;

    article {
      margin-top: 0;
    }
  }

  @media (min-width: 1360px) {
    background-size: contain;
  }
`;

function Header(): ReactElement {
  return (
    <HeaderWrapper className="pt-16 pb-24 mb-8 bg-no-repeat md:mb-44">
      <article className="max-w-6xl px-6 py-12 mx-auto text-center xs:px-10 sm:text-left">
        <h1 className="mb-6 text-4xl font-bold leading-10 sm:text-6xl lg:text-7xl text-neutral-darkBlue sm:leading-16 lg:mb-2 lg:leading-20">
          More than just
          <br />
          shorter links
        </h1>
        <p className="my-6 text-base leading-7 sm:leading-8 sm:text-lg sm:max-w-md text-neutral-grayishViolet">{`Build your brand's recognition and get detailed insights on how your links are performing`}</p>
        <Button mode="primary" size="lg" text="Get Started" rounded />
      </article>
    </HeaderWrapper>
  );
}

export default Header;
