import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineSearch } from "react-icons/ai";

export type SearchProps = VariantProps<typeof searchStyles>;

export const searchStyles = cva("relative", {
  variants: {
    inputVariant: {
      default: "bg-gray-100 border border-gray-300 w-1672 h-100 rounded-2xl pl-10 pr-4 py-2",
      another: "bg-gray-100 border border-gray-300 w-1672 h-100 rounded-2xl pl-10 pr-4 py-2",
    },
  },
});

interface SearchExtendedProps extends SearchProps {
  placeholder: string;
  inputVariant?: "default" | "another";
}

export default function Search({ placeholder, inputVariant = "default", ...props }: SearchExtendedProps) {
  return (
    <div className={searchStyles()}>
      <input
        type="text"
        placeholder={placeholder}
        className={searchStyles({ inputVariant })}
        {...props}
      />
      {inputVariant === "default" && (
        <AiOutlineSearch className="text-gray-600 absolute right-4 top-1/2 transform -translate-y-1/2" />
      )}
    </div>
  );
}
