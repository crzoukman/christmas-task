import { useContext } from "react";

// Styled Components
import { LeftWrapper, ResetBTN } from "./styled/Left.style";

// Context
import { ContextX } from "../App";


// Components
import ChooseTree from "./ChooseTree";
import ChooseBg from "./ChooseBg";
import SS from "./SS";
import ChooseLights from "./ChooseLights";

const Left = () => {
  const { resetSettingTree, leftRef } = useContext(ContextX);

  return (
    <LeftWrapper ref={leftRef}>
      <SS />
      <ChooseTree />
      <ChooseBg />
      <ChooseLights />

      <ResetBTN onClick={resetSettingTree}>Сбросить настройки</ResetBTN>
    </LeftWrapper>
  )
}

export default Left
