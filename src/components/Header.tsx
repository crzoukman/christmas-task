import { Link } from 'react-router-dom';

// Components
import SearchBar from './SearchBar';
import Picked from './Picked';

// Styled Components
import { HeaderIcon, HeaderNav, HeaderC } from './styled/Header.style';

const Header = ({
  search,
  setSearch,
  bookmarks,
}: {
  search: string,
  setSearch: (arg: string) => void,
  bookmarks: { [k: string]: boolean } | {},
}) => {
  return (
    <HeaderC>
      <HeaderNav>
        <Link to='/'>
          <HeaderIcon>
            <img src="./images/tree.svg" alt="christmas tree" />
          </HeaderIcon>
        </Link>

        <Link to='/toys'>
          <h2>Игрушки</h2>
        </Link>

        <Link to='/tree'>
          <h2>Ёлка</h2>
        </Link>
      </HeaderNav>

      <div className='searchBarC'>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <Picked
          bookmarks={bookmarks}
        />
      </div>
    </HeaderC>
  )
};

export default Header;
