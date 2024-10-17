import React from 'react';

import LocationCard from './LocationCard';

const HeadquartersGrid = () => {

  return (
    <section className="flex justify-center items-center my-16 max-w-screen mx-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
            <LocationCard variant="ohio" />
            <LocationCard variant="georgia" />
            <LocationCard variant="texas" />
        </div>
    </section>
  );
};

export default HeadquartersGrid;
