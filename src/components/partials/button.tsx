import React, { FC, ReactElement, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

type ButtonTextProps = {
  mode: string;
};

type ButtonProps = {
  mode: string;
  text: string;
  size: string;
  rounded?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
};

const ButtonText = styled.button<ButtonTextProps>`
  letter-spacing: 0.02rem;
  border: none;
  pointer-events: ${(props) => props.disabled && 'none'};

  &.md {
    font-size: 1rem;
    padding: 0.75rem 2rem;
  }

  &.sm {
    font-size: 0.875rem;
    padding: 0.425rem 1.75rem;
  }
`;

const Button: FC<ButtonProps> = ({ mode, text, onClick, disabled, className, style, size, rounded }): ReactElement => {
  switch (mode) {
    case 'primary':
      return (
        <ButtonText
          mode={mode}
          onClick={onClick}
          disabled={disabled}
          className={`text-lg cursor-pointer font-bold text-white bg-primary-cyan hover:bg-primary-cyanHover py-4 px-12 ${
            rounded ? 'rounded-full' : 'rounded-md'
          } ${size} ${className} `}
          style={style}>
          {text}
        </ButtonText>
      );

    case 'secondary':
      return (
        <ButtonText
          mode={mode}
          onClick={onClick}
          disabled={disabled}
          className={`text-base px-8 py-3 cursor-pointer font-bold md:text-lg text-white bg-primary-darkViolet ${
            rounded ? 'rounded-full' : 'rounded-md'
          } md:py-4 md:px-12 ${size} ${className}`}
          style={style}>
          {text}
        </ButtonText>
      );

    case 'default':
      return (
        <ButtonText
          mode={mode}
          onClick={onClick}
          disabled={disabled}
          className={`text-base px-8 py-3 md:text-lg cursor-pointer font-bold bg-transparent ${
            rounded ? 'rounded-full' : 'rounded-md'
          } md:py-4 md:px-12 ${size} ${className}`}
          style={style}>
          {text}
        </ButtonText>
      );

    default:
      return null;
  }
};

Button.defaultProps = {
  text: '',
  onClick: () => null,
  disabled: false,
  rounded: false,
  className: '',
  style: {},
};

Button.propTypes = {
  mode: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default Button;
