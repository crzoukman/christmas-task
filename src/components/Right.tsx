// Components
import SelectedToys from "./selectedToys";
import SavedTrees from "./SavedTrees";
import DeleteToys from "./DeleteToys";

// Styled Component
import { RightWrapper } from "./styled/Right.style";



const Right = () => {



  return (
    <RightWrapper>
      <div className="selectedToysWrapper">
        <h2 className="selectedToysHeader">Игрушки</h2>
        <SelectedToys />
      </div>



      <SavedTrees />

      <DeleteToys />


    </RightWrapper>
  )
}

export default Right
