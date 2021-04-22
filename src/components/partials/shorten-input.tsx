import React, { FC, ReactElement, SetStateAction, Dispatch } from 'react';
import PropTypes from 'prop-types';

type ShortenInputProps = {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  errorStatus: boolean;
  errorText: string;
};

const ShortenInput: FC<ShortenInputProps> = ({ url, setUrl, errorStatus, errorText }): ReactElement => {
  return (
    <div className="relative flex-grow">
      <input
        value={url}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
        placeholder="Shorten a link here..."
        className={`py-3 text-base px-6 sm:py-4 sm:text-lg rounded-md w-full h-full shorten-input ${
          errorStatus ? 'border-secondary-red border-2 border-solid' : ''
        }`}
      />
      {errorText && (
        <p className="left-0 mt-2 text-xs italic sm:absolute -bottom-6 text-secondary-red error-text">{errorText}</p>
      )}
    </div>
  );
};

ShortenInput.propTypes = {
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

export default ShortenInput;
