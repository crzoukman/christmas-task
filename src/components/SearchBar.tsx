// Styled Components
import { InputC } from "./styled/SearchBar.style";

const SearchBar = ({
  search,
  setSearch
}: {
  search: string,
  setSearch: (arg: string) => void,
}) => {
  function handleImg() {
    setSearch('');
  }

  return (
    <InputC>
      <input
        type='text'
        placeholder='Введите строку для поиска...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />
      <div className="search-cross">
        <img src="./images/cross.svg" alt="cross" onClick={handleImg} />
      </div>
    </InputC>
  )
};

export default SearchBar;
