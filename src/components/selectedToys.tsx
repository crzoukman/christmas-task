import { useContext, useEffect, useRef } from "react"

// Styled Components
import { SelectedToysList, SelectedToysItem } from "./styled/SelectedToys.style";

// Context
import { ContextX } from "../App";

const SelectedToys = () => {
  const { bookmarksX, setSavedToys, savedToys } = useContext(ContextX);




  function dragStartHandler(e: any, id: string) {
    e.dataTransfer.setData("application/toy", [id, false]);

  }



  return (
    <SelectedToysList>
      {bookmarksX.map((toy: any) => {
        if (toy.num !== null) {
          return (


            <SelectedToysItem className="selectedItem" key={toy.num} id={toy.num} countX={1}>

              <img
                src={`./assets/toys/${toy.num}.png`}
                alt="toy"
                draggable={toy.count > 0 ? true : false}
                onDragStart={(e) => dragStartHandler(e, toy.num)}
                style={{ display: toy.count > 0 ? 'inherit' : 'none' }}
              />
              <div
                className="toyCount"
                style={{ display: toy.count > 0 ? 'inherit' : 'none' }}
              >{toy.count}</div>
            </SelectedToysItem>
          )
        } else {
          return (
            <li className="selectedItem" key={Math.random() * 1000}></li>
          )
        }
      })}
    </SelectedToysList>
  )
}

export default SelectedToys;
