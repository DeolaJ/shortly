import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import useShortener from '../../hooks/useShortener';
import useLocalList from '../../hooks/useLocalList';

import ShortenAction from '../partials/shorten-action';
import ShortenButton from '../partials/shorten-button';
import ShortenInput from '../partials/shorten-input';
import ShortenedList from '../partials/shortened-list';

const ShortenerWrapper = styled.section``;

function Shortener(): ReactElement {
  const { localList, updateLocalList, clearList } = useLocalList();
  const { url, status, setUrl, doShortenApi, error } = useShortener(updateLocalList);

  return (
    <ShortenerWrapper className="bg-neutral-lightGrey shorten-wrapper">
      <article className="max-w-6xl px-6 py-12 mx-auto">
        <ShortenAction>
          <ShortenInput url={url} setUrl={setUrl} errorStatus={error.error} errorText={error.errorText} />
          <ShortenButton status={status} doShortenApi={doShortenApi} />
        </ShortenAction>
        <ShortenedList list={localList} clearList={clearList} />
      </article>
    </ShortenerWrapper>
  );
}

export default Shortener;
