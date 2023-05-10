import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

export type CategoryProps = VariantProps<typeof categoryStyles>;
export const categoryStyles = cva("flex flex-col items-center ", {
  variants: {
    size: {
      default: "w-107 h-107",
    },
  },
});

interface Category {
  name: string;
  icon: StaticImageData;
}

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className=" mx-4 grid grid-cols-4 gap-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className="bg-zinc-300"
        >
          <div className="flex items-center justify-center">
            <div className= "w-45 h-45 py-2" >
              <Image src={category.icon} alt={category.name} width={45} height={45} />
            </div>
          </div>
          <p className="text-sm mt-2 text-sky-800">{category.name}</p>
        </button>
      ))}
    </div>
  );
}
