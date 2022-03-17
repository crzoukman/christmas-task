// Components
import Filters from "./Filters";
import ToyList from "./ToyList";

// Interfaces
import { IToys, ISelect, filterIcons } from "../interfaces/common";


const Toys = ({
  toys,
  select,
  setSelect,
  quantity,
  setQuantity,
  year,
  setYear,
  iconFilter,
  setIconFilter,
  colorFilter,
  setColorFilter,
  sizeFilter,
  setSizeFilter,
  bookmarks,
  setBookmarks,
  favCheckbox,
  setFavCheckbox,
  setReset,
  reset,
  setFullFav,
  setSearch,

}: {
  toys: IToys[],
  select: ISelect,
  setSelect: (arg: ISelect) => void,
  quantity: number[],
  setQuantity: (arg: number[]) => void,
  year: number[],
  setYear: (arg: number[]) => void,
  iconFilter: filterIcons,
  setIconFilter: (arg: filterIcons) => void,
  colorFilter: filterIcons,
  setColorFilter: (arg: filterIcons) => void,
  sizeFilter: filterIcons,
  setSizeFilter: (arg: filterIcons) => void,
  bookmarks: {} | { [k: string]: string },
  setBookmarks: (arg: {} | { [k: string]: string }) => void
  favCheckbox: boolean,
  setFavCheckbox: (arg: boolean) => void,
  setReset: (arg: boolean) => void,
  reset: boolean,
  setFullFav: (arg: boolean) => void,
  setSearch: (arg: string) => void,

}) => {
  return (
    <div className="toys-g">
      <Filters
        select={select}
        setSelect={setSelect}
        quantity={quantity}
        setQuantity={setQuantity}
        year={year}
        setYear={setYear}
        iconFilter={iconFilter}
        setIconFilter={setIconFilter}
        colorFilter={colorFilter}
        setColorFilter={setColorFilter}
        sizeFilter={sizeFilter}
        setSizeFilter={setSizeFilter}
        favCheckbox={favCheckbox}
        setFavCheckbox={setFavCheckbox}
        setReset={setReset}
        reset={reset}
        setSearch={setSearch}
        setBookmarks={setBookmarks}
      />
      <ToyList
        toys={toys}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        setFullFav={setFullFav}
      />
    </div>
  )
};

export default Toys;
