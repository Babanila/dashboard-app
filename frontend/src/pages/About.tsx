import React, { FC } from 'react';
import Tile from '@/components/Tile';

const About: FC = () => {
  return (
    <div className="h-full flex flex-col bg-secondary text-primary-one px-4 sm:px-6 md:px-20 md:space-y-8 py-4">
      <section className="max-w-5xl mx-auto">
        <Tile
          title={<h1 className="text-3xl font-bold mb-6 text-primary sm:text-4xl">About Dash</h1>}
          description={
            <p className="sm:text-lg">
              Welcome to <span className="font-bold">Dash</span> — your one-stop destination for
              premium eCommerce experiences. We provide a seamless and intuitive platform where
              customers can discover, explore, and purchase quality products with ease.
            </p>
          }
        />

        <div className="grid gap-8 sm:grid-cols-2">
          <Tile
            title="Our Mission"
            description="At Dash, our mission is to simplify online shopping while delivering unbeatable value,
              reliable service, and a rich product selection. We’re dedicated to innovation,
              efficiency, and customer satisfaction."
          />
          <Tile
            title="Our Vision"
            description="To become the most trusted and customer-centric eCommerce brand, inspiring the world
              through innovation, transparency, and exceptional digital experiences."
          />
        </div>

        <div className="flex justify-center">
          <Tile
            title="What We Offer"
            description={
              <ul className="w-fit list-disc list-inside space-y-1 text-left">
                <li>Curated product collections across beauty, electronics, fashion, and more</li>
                <li>Secure and fast checkout with multiple payment options</li>
                <li>Responsive customer support and flexible return policies</li>
                <li>Regular discounts and promotions to help you save more</li>
              </ul>
            }
          />
        </div>

        <div className="w-fit">
          <Tile
            title="Get In Touch"
            description={
              <div className="w-content">
                We’d love to hear from you. If you have questions, feedback, or partnership
                inquiries, feel free to reach out to us at{' '}
                <a
                  href="mailto:hello@dashstore.com"
                  className="text-bblue hover:text-bgreen hover:underline"
                >
                  hello@dashstore.com
                </a>
                .
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default About;
