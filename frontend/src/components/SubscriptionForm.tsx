import React, { FC, ChangeEvent, useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';

const SubscriptionForm: FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16 px-6 text-center bg-primary text-secondary">
      <h2 className="text-3xl font-bold mb-4">Join the DASH Community</h2>
      <p className="mb-6">Subscribe to our newsletter for the latest deals and trends.</p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center md:items-start max-w-xl mx-auto">
        <TextInput
          className="w-70 sm:w-100 px-4 py-3 rounded text-primary bg-secondary focus:outline-2"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          className="bg-secondary text-primary px-6 py-3 rounded font-semibold hover:bg-bgreen"
          type="submit"
          onClick={() => {}}
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default SubscriptionForm;
