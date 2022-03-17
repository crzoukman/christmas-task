import { useContext } from "react";

// Context
import { ContextX } from "../App";

// Styled Components
import { ChooseBgWrapper, BigChooseBgWrapper, ChooseBgItem } from "./styled/ChooseBg.style"

const ChooseBg = () => {
  const { chosedBg, setChosedBg } = useContext(ContextX);

  function handleClick(e: | any, active: boolean) {

    if (!active && e.target.dataset.id) {


      const list = chosedBg.map((item: | any) => {
        if (item.id === +e.target.dataset.id) {
          return { id: item.id, active: !active }
        } else {
          return { id: item.id, active: false };
        }

      });

      setChosedBg(list);
    }

  }

  return (
    <BigChooseBgWrapper>
      <h2 className="bg-header">Выберите фон</h2>

      <ChooseBgWrapper>
        {
          chosedBg.map((bg: any) => {
            return (
              <ChooseBgItem key={bg.id} className="choose-bg-item"
                active={bg.active} onClick={(e) => handleClick(e, bg.active)}
              >
                <img className='choose-bg-img' src={`./assets/bg/${bg.id}.jpg`} alt="bg" data-id={bg.id} />
              </ChooseBgItem>
            );
          })
        }
      </ChooseBgWrapper>
    </BigChooseBgWrapper>
  )
}

export default ChooseBg
