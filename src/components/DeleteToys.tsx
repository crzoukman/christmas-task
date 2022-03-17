import { useContext } from "react"

// Styled Component
import { DeleteToysWrapper } from "./styled/DeleteToys.style"

// Context 
import { ContextX } from "../App"

const DeleteToys = () => {
  const { setBookmarks, setSavedToys, setBookmarksX, bookmarksX, data } = useContext(ContextX);

  function clickHandler() {
    setSavedToys([]);

    const restore = [];

    for (let b of bookmarksX) {
      if (b.count !== null) {
        for (let d of data) {
          if (d.num === b.num) {
            restore.push({
              num: d.num,
              count: +d.count,
            })
          }
        }

      } else {
        restore.push(b);
      }
    }



    setBookmarksX(restore);
  }

  return (
    <DeleteToysWrapper onClick={clickHandler}>
      Удалить игрушки
    </DeleteToysWrapper>
  )
}

export default DeleteToys
