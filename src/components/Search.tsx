import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineSearch } from "react-icons/ai";
import { ChangeEvent } from "react";

export type SearchProps = VariantProps<typeof searchStyles>;

export const searchStyles = cva(
  "w-96 xs:w-64 relative flex items-center",
  {
    variants: {
      inputVariant: {
        default:
          "bg-zinc-300 border border-gray-300 rounded-2xl pl-10 pr-4 py-2",
        another:
          "bg-zinc-300 border border-gray-300 rounded-2xl pl-10 pr-4 py-2",
      },
    },
  }
);

interface SearchExtendedProps extends SearchProps {
  placeholder: string;
  inputVariant?: "default" | "another";
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function Search({
  placeholder,
  inputVariant = "default",
  value,
  onChange,
  onSearch,
  ...props
}: SearchExtendedProps) {
  return (
    <div className={searchStyles()}>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className={searchStyles({ inputVariant })}
          value={value}
          onChange={onChange}
          {...props}
        />
        {inputVariant === "default" && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <AiOutlineSearch className="text-gray-600" onClick={onSearch} />
          </div>
        )}
      </div>
    </div>
  );
}
