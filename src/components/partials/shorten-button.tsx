import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styled from '@emotion/styled';

type ShortenButtonProps = {
  status: boolean;
  doShortenApi: () => void;
};

const ShortenButtonWrapper = styled.div`
  @media (max-width: 640px) {
    img {
      top: 47%;
    }
  }
`;

const ShortenButton: FC<ShortenButtonProps> = ({ status, doShortenApi }): ReactElement => {
  return (
    <ShortenButtonWrapper className="relative">
      <Button
        text={status ? '...In Progress' : 'Shorten It!'}
        disabled={status}
        onClick={doShortenApi}
        mode="default"
        size="lg"
        className="w-full h-full mt-6 text-white sm:w-auto sm:ml-6 sm:mt-0 bg-primary-cyan hover:bg-primary-cyanHover shorten-button"
      />
      {status && (
        <img width={30} height={30} className="absolute right-4 sm:top-1/4" src="/loading.gif" alt="loading gif" />
      )}
    </ShortenButtonWrapper>
  );
};

ShortenButton.propTypes = {
  status: PropTypes.bool.isRequired,
  doShortenApi: PropTypes.func.isRequired,
};

export default ShortenButton;
