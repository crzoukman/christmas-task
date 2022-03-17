import { useContext, useRef, useEffect } from "react";
import html2canvas from "html2canvas";

// Context
import { ContextX } from "../App";

// Styled Components
import { SavedTreesWrapper, SavedTreesContainer } from "./styled/SavedTrees.style"


const SavedTrees = (props: any) => {
  const container = useRef<any>(null)

  const {

    canvas,
    canvasTrees,
    setCanvasTrees,
    lastSavedTree,
    loadCanvasState,
  } = useContext(ContextX);





  return (
    <SavedTreesWrapper>
      <h2 className="header">Вы нарядили</h2>

      <SavedTreesContainer ref={container}>
        <div className="imgC" data-id="1" onClick={() => loadCanvasState('1')} style={{ backgroundColor: lastSavedTree === '1' ? 'rgba(255,255,51, 0.1)' : 'inherit' }}>
          {canvasTrees['1'] !== null && <img src={
            canvasTrees['1'] !== null ? canvasTrees['1'] : ''
          } alt="saved-tree" className="img" />}
        </div>
        <div className="imgC" data-id="2" onClick={() => loadCanvasState('2')} style={{ backgroundColor: lastSavedTree === '2' ? 'rgba(255,255,51, 0.1)' : 'inherit' }}>
          {canvasTrees['2'] !== null && <img src={
            canvasTrees['2'] !== null ? canvasTrees['2'] : ''
          } alt="saved-tree" className="img" />}
        </div>
        <div className="imgC" data-id="3" onClick={() => loadCanvasState('3')} style={{ backgroundColor: lastSavedTree === '3' ? 'rgba(255,255,51, 0.1)' : 'inherit' }}>
          {canvasTrees['3'] !== null && <img src={
            canvasTrees['3'] !== null ? canvasTrees['3'] : ''
          } alt="saved-tree" className="img" />}
        </div>
        <div className="imgC" data-id="4" onClick={() => loadCanvasState('4')} style={{ backgroundColor: lastSavedTree === '4' ? 'rgba(255,255,51, 0.1)' : 'inherit' }}>
          {canvasTrees['4'] !== null && <img src={
            canvasTrees['4'] !== null ? canvasTrees['4'] : ''
          } alt="saved-tree" className="img" />}
        </div>
      </SavedTreesContainer>

      <button className='btn' onClick={() => canvas(canvasTrees, setCanvasTrees)}>Сохранить</button>
    </SavedTreesWrapper>
  )
}

export default SavedTrees
