import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import useCopy from '../../hooks/useCopy';
import Button from './button';

type CopyButtonProps = {
  shortLink: string;
};

const CopyButton: FC<CopyButtonProps> = ({ shortLink }): ReactElement => {
  const { status, statusText, copyLink } = useCopy(shortLink);

  return (
    <Button
      text={statusText}
      disabled={status}
      onClick={copyLink}
      mode={status ? 'secondary' : 'primary'}
      size="sm"
      className="w-full text-xs sm:w-auto"
    />
  );
};

CopyButton.propTypes = {
  shortLink: PropTypes.string.isRequired,
};

export default CopyButton;
