import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="bg-white w-full flex items-center border-gray-300 px-4 py-3 relative rounded-lg border shadow-md">
      <SearchIcon className="text-gray-400" />
      <input
        type="text"
        placeholder="Buscar en tu actividad..."
        className="flex-grow pl-6 p-1 text-base border-none focus:border-none focus-visible:outline-none text-dark-01"
      />
    </div>
  );
};
