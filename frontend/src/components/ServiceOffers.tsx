import React, { FC } from 'react';

const serviceOffers = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'On all orders over €50',
  },
  {
    id: 2,
    title: '24/7 Support',
    description: 'We’re here whenever you need us',
  },
  {
    id: 3,
    title: 'Secure Payments',
    description: 'Your data is safe with us',
  },
];

type ServiceOffersProps = {
  id: number;
  title: string;
  description: string;
};

const ServiceOffers: FC = () => {
  return (
    <section className="w-full bg-primary py-16 px-6 mx-auto grid md:grid-cols-3 gap-8 text-center">
      {serviceOffers.map(({ id, title, description }: ServiceOffersProps) => (
        <div key={id}>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
};

export default ServiceOffers;
