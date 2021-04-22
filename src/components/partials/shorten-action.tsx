import React, { FC, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

type ShortenActionProps = {
  children: ReactNode;
};

const ShortenActionWrapper = styled.article`
  background-image: url('/bg-shorten-mobile.svg');
  background-position: top right;

  @media (min-width: 640px) {
    background-image: url('/bg-shorten-desktop.svg');
    background-position: auto;
  }
`;

const ShortenAction: FC<ShortenActionProps> = ({ children }): ReactElement => {
  return (
    <ShortenActionWrapper className="relative flex flex-col p-6 mb-6 -mt-32 bg-no-repeat rounded-md sm:flex-row sm:px-16 sm:py-12 bg-primary-darkViolet">
      {children}
    </ShortenActionWrapper>
  );
};

ShortenAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShortenAction;
