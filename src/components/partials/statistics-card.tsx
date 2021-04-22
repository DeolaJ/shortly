import React, { FC } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

type StatisticsCardProps = {
  image: string;
  title: string;
  body: string;
  index: number;
};

type StatisticsCardWrapperProps = {
  marginOffset: number;
};

const ImageWrapper = styled.div`
  width: max-content;
`;

const StatisticsCardWrapper = styled.li<StatisticsCardWrapperProps>`
  @media (max-width: 640px) {
    + li {
      margin-top: 6rem;
    }
  }
  @media (min-width: 640px) {
    margin-top: ${(props) => `${props.marginOffset * 3}rem`};
  }
`;

const StatisticsCard: FC<StatisticsCardProps> = ({ image, title, body, index }) => {
  return (
    <StatisticsCardWrapper
      marginOffset={index}
      className="relative py-12 text-center bg-white rounded px-7 sm:px-8 sm:text-left">
      <ImageWrapper className="flex p-6 mx-auto -mt-24 rounded-full mb-9 sm:mx-0 bg-primary-darkViolet">
        <Image src={image} width={42} height={42} alt={title} className="inline-block" />
      </ImageWrapper>
      <h3 className="mb-4 text-xl font-bold text-primary-darkViolet">{title}</h3>
      <p className="text-base leading-7 text-neutral-grayishViolet">{body}</p>
    </StatisticsCardWrapper>
  );
};

StatisticsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default StatisticsCard;
