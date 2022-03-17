// Interfaces
import { IToys } from "../interfaces/common";


// Components
import ToyItem from "./ToyItem";

// Styled Components
import { UL } from "./styled/ToyList.style";

const ToyList = ({
  toys,
  bookmarks,
  setBookmarks,
  setFullFav,
}: {
  toys: IToys[],
  bookmarks: {} | { [k: string]: string },
  setBookmarks: (arg: {} | { [k: string]: string }) => void,
  setFullFav: (arg: boolean) => void,
}) => {
  return (

    toys.length > 0
      ? <UL>
        {toys.map(toy => (
          <ToyItem
            toy={toy}
            key={+toy.num}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
            setFullFav={setFullFav}
          />
        ))}
      </UL>
      : <div className="not-found">Извините, совпадений не обнаружено!</div>



  )
};

export default ToyList;
