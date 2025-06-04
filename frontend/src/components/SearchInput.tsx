import { ChangeEvent } from 'react';
import TextInput from './TextInput';
import Button from './Button';

export type SearchInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSearch: () => void;
};

const SearchInput = ({ value, onChange, onSearch }: SearchInputProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-4">
      <TextInput
        className="w-70 max-h-fit px-4 py-3 rounded text-primary bg-secondary border-1 border-primary md:w-100"
        value={value}
        type="text"
        placeholder="Search with product name"
        onChange={onChange}
      />

      <Button
        className="w-30 max-h-fit bg-secondary text-primary font-semibold px-6 py-3 border-1 border-primary rounded-lg hover:bg-bgreen hover:border-bgreen transition cursor-pointer"
        children="Search"
        onClick={onSearch}
      />
    </div>
  );
};

export default SearchInput;
