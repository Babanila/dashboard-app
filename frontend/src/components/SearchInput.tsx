import React, { ChangeEvent } from 'react';
import TextInput from './TextInput';
import Button from './Button';

type SearchInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const SearchInput = ({ value, onChange, onSearch }: SearchInputProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 h-full">
      <TextInput
        className="w-70 px-4 py-3 rounded text-primary bg-secondary border-1 border-primary outline-bgreen focus:outline-2 md:w-100"
        value={value}
        type="text"
        placeholder="Search with product name"
        onChange={onChange}
      />

      <Button
        className="w-30 bg-secondary text-primary font-semibold px-6 py-3 border-1 border-primary rounded-lg hover:bg-bgreen hover:border-bgreen transition cursor-pointer"
        children="Search"
        onClick={onSearch}
      />
    </div>
  );
};

export default SearchInput;
