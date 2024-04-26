import toast, { Toaster } from "react-hot-toast";
import SearchBarProps from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSetSearchBar }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const notify = () => toast.error("Please enter a search query");

    const inputValue = (
      form.elements.namedItem("inputValue") as HTMLInputElement
    ).value.trim();

    if (!inputValue) {
      notify();
      return;
    }
    onSetSearchBar(inputValue);

    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="inputValue"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-center" reverseOrder={true} />
      </form>
    </header>
  );
};

export default SearchBar;
