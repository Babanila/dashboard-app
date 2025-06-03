import { ReactNode } from 'react';

type TileProps = {
  title: ReactNode;
  description: ReactNode;
};

const Tile = ({ title, description }: TileProps) => {
  return (
    <div className="p-8 bg-secondary text-primary">
      <div className="text-xl font-semibold mb-2">{title}</div>
      <div className="flex justify-center leading-relaxed">{description}</div>
    </div>
  );
};

export default Tile;
