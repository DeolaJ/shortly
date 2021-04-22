import React, { ReactElement } from 'react';
import Button from '../partials/button';
import styled from '@emotion/styled';

const MessageWrapper = styled.section`
  background-image: url('/bg-boost-mobile.svg');
  background-position: right center;

  @media (min-width: 640px) {
    background-image: url('/bg-boost-desktop.svg');
    background-position: center;
  }
`;

function Message(): ReactElement {
  return (
    <MessageWrapper className="py-16 text-center bg-no-repeat sm:px-6 bg-primary-darkViolet">
      <h2 className="mb-6 text-2xl font-bold text-white sm:text-4xl">Boost your links today</h2>
      <Button size="lg" text="Get Started" mode="primary" rounded />
    </MessageWrapper>
  );
}

export default Message;
