import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import CopyButton from './copy-button';

type ShortenedListItemProps = {
  shortLink: string;
  original: string;
};

const ShortenedListItemWrapper = styled.li`
  + li {
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    .original {
      width: calc(100% + 2.5rem);
    }
  }
`;

const ShortenedListItem: FC<ShortenedListItemProps> = ({ shortLink, original }): ReactElement => {
  return (
    <ShortenedListItemWrapper className="flex flex-col items-start p-5 bg-white rounded sm:items-center sm:px-6 sm:py-3 sm:flex-row list-item">
      <div className="flex-grow w-full px-5 pb-3 -ml-5 -mr-10 text-sm border-b sm:p-0 sm:text-base text-neutral-darkBlue sm:border-none border-neutral-lightGrey sm:m-0 original">
        {original}
      </div>
      <div className="my-3 text-sm sm:text-base sm:m-0 sm:mr-6 text-primary-cyan">{shortLink}</div>
      <CopyButton shortLink={shortLink} />
    </ShortenedListItemWrapper>
  );
};

ShortenedListItem.propTypes = {
  shortLink: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
};

export default ShortenedListItem;
