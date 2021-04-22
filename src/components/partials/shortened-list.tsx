import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import ShortenedListItem from './shortened-list-item';
import Button from './button';

type ListProps = {
  shortLink: string;
  original: string;
};

type ShortenedListProps = {
  list: Array<ListProps>;
  clearList: () => void;
};

const ShortenedList: FC<ShortenedListProps> = ({ list, clearList }): ReactElement => {
  return (
    <>
      <ul>
        {list.map((listItem) => (
          <ShortenedListItem key={listItem.shortLink} original={listItem.original} shortLink={listItem.shortLink} />
        ))}
      </ul>
      {list.length > 0 && (
        <div className="mt-6 text-right">
          <Button text="Clear list" size="sm" onClick={clearList} mode="secondary" />
        </div>
      )}
    </>
  );
};

ShortenedList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  clearList: PropTypes.func.isRequired,
};

export default ShortenedList;
