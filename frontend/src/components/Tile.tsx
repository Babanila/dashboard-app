import React, { ReactNode } from 'react';

type TileProps = {
  title: string;
  description: ReactNode;
};

const Tile = ({ title, description }: TileProps) => {
  return (
    <div className="p-8 bg-secondary text-primary">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="flex justify-center leading-relaxed">{description}</p>
    </div>
  );
};

export default Tile;
