import React, { ReactElement } from 'react';
import StatisticsGrid from '../partials/statistics-grid';

function Statistics(): ReactElement {
  return (
    <section className="bg-neutral-lightGrey">
      <article className="max-w-6xl px-6 py-12 mx-auto">
        <h2 className="mb-4 text-3xl font-bold leading-10 text-center sm:text-4xl text-neutral-darkBlue">
          Advanced Statistics
        </h2>
        <p className="max-w-lg mx-auto leading-7 text-center text-neutral-grayishViolet">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>

        <StatisticsGrid />
      </article>
    </section>
  );
}

export default Statistics;
