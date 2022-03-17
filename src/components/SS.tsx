import { useContext } from "react"

// Styled Components
import { SSWrapper } from "./styled/SS.style"

// Context
import { ContextX } from "../App"

const SS = () => {
  const { snowfall, setSnowfall, sound, setSound, leftRef } = useContext(ContextX)

  function clickSoundHandler() {
    setSound(!sound);
  }

  function clickSnowHandler() {
    setSnowfall(!snowfall);
  }

  function clickBackHandler() {
    leftRef.current.style = 'transform: translateX(-200%)';

  }

  return (
    <SSWrapper isSnowOn={snowfall} isSoundOn={sound} >
      <img onClick={clickSoundHandler} src="./assets/icon-settings/sound.svg" alt="sound" className="ss-sound" />
      <img onClick={clickSnowHandler} src="./assets/icon-settings/snowflake.svg" alt="snow" className="ss-snow" />
      <img onClick={clickBackHandler} src="./assets/icon-settings/back.svg" alt="snow" className="ss-back" />
    </SSWrapper>
  )
}

export default SS
