// Interfaces
import { IToys } from "../interfaces/common"

// Styled Components
import { LI, Bookmarks } from './styled/ToyItem.style'

// Import images from assets
// const importAll = (require: | any) =>
//   require.keys().reduce((acc: | any, next: | any) => {
//     acc[next.replace("./", "")] = require(next);
//     return acc;
//   }, {});

// const images = importAll(
//   require.context("../assets/toys/", false, /\.(png|jpe?g|svg)$/)
// );


const ToyItem = ({
  toy,
  bookmarks,
  setBookmarks,
  setFullFav,
}: {
  toy: IToys,
  bookmarks: {} | { [k: string]: string } | any,
  setBookmarks: (arg: {} | { [k: string]: string }) => void,
  setFullFav: (arg: boolean) => void,
}) => {

  function countPicked() {
    let counter = 0;
    for (const t in bookmarks) {
      if (bookmarks[t]) counter++;
    }

    return counter;
  }

  function handleBookmark(e: React.SyntheticEvent | any) {
    const res = bookmarks[e.target.dataset.id];
    const quantity = countPicked() + 1;

    if (!res && quantity >= 21) {
      setFullFav(true);
      setBookmarks({ ...bookmarks, [e.target.dataset.id]: res ? false : false });
      return;
    }


    setBookmarks({ ...bookmarks, [e.target.dataset.id]: res ? false : true });
  }

  return (
    <LI>
      <h2 className="toy-header">{toy.name}</h2>
      <div className="li-body">
        <div className="li-img">
          {/* <img src={images[`${toy.num}.png`]} alt='ball'></img> */}
          <img src={`./assets/toys/${toy.num}.png`} alt='ball'></img>
        </div>

        <div className="li-data">
          <p className="toy-p">Количество: {toy.count}</p>
          <p className="toy-p">Год: {toy.year}</p>
          <p className="toy-p">Форма: {toy.shape}</p>
          <p className="toy-p">Цвет: {toy.color}</p>
          <p className="toy-p">Размер: {toy.size}</p>
          <p className="toy-p">Любимая: {toy.favorite ? 'Да' : 'Нет'}</p>
        </div>
      </div>
      <Bookmarks onClick={handleBookmark} data-id={toy.num} clicked={bookmarks[`${toy.num}`] ? true : false} />
    </LI>
  )
}

export default ToyItem;
