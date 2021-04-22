import React, { FC } from 'react';
import StatisticsCard from './statistics-card';
import styled from '@emotion/styled';

type CardProps = {
  image: string;
  title: string;
  body: string;
};

const statisticsContent: Array<CardProps> = [
  {
    image: '/icon-brand-recognition.svg',
    title: 'Brand Recognition',
    body:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    image: '/icon-detailed-records.svg',
    title: 'Detailed Records',
    body:
      'Gain insights into who is clicking your links. Knowing when and where your people engage with your content helps inform better decisions.',
  },
  {
    image: '/icon-fully-customizable.svg',
    title: 'Fully Customizable',
    body:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

const StatisticsGridWrapper = styled.ul`
  grid-template-columns: repeat(3, 1fr);

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 0;
    background-color: hsl(180, 66%, 49%);
  }

  @media (min-width: 640px) {
    &:before {
      height: 0.5rem;
      width: 100%;
      top: 40%;
    }
  }
`;

const StatisticsGrid: FC = () => {
  return (
    <StatisticsGridWrapper className="relative mt-24 mb-20 sm:grid gap-x-8 place-items-start">
      {statisticsContent.map((content, index) => (
        <StatisticsCard
          key={content.image}
          image={content.image}
          title={content.title}
          body={content.body}
          index={index}
        />
      ))}
    </StatisticsGridWrapper>
  );
};

export default StatisticsGrid;
