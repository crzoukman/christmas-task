import { useContext, useState } from 'react'

// Context
import { ContextX } from '../App'



// Styled Components
import { ChooseLightsWrapper, LightsItem } from "./styled/ChooseLights.style"

const ChooseLights = () => {
  const { lights, setLights } = useContext(ContextX);
  const [count, setCount] = useState(0);

  function clickHandler(id: string) {
    setLights({
      ...{
        mix: false,
        blue: false,
        red: false,
        green: false,
        orange: false,
      }, [id]: !lights[id]
    })

    setCount(count + 1);

    if (count >= 1) window.location.reload();
  }

  return (
    <ChooseLightsWrapper>
      <h2 className="lights-header">Выбери гирлянды</h2>

      <ul className="lights-list">
        <LightsItem className="lights-item lights-mix"
          activeX={lights.mix}
          colorX='unset'
          onClick={() => clickHandler('mix')}
        >
          <div className="l1"></div>
          <div className="l2"></div>
          <div className="l3"></div>
          <div className="l4"></div>
        </LightsItem>
        <LightsItem className="lights-item lights-blue"
          activeX={lights.blue}
          colorX='blue'
          onClick={() => clickHandler('blue')}
        ></LightsItem>
        <LightsItem className="lights-item lights-red"
          activeX={lights.red}
          colorX='red'
          onClick={() => clickHandler('red')}
        ></LightsItem>
        <LightsItem className="lights-item lights-green"
          activeX={lights.green}
          colorX='green'
          onClick={() => clickHandler('green')}
        ></LightsItem>
        <LightsItem className="lights-item lights-orange"
          activeX={lights.orange}
          colorX='orange'
          onClick={() => clickHandler('orange')}
        ></LightsItem>

      </ul>
    </ChooseLightsWrapper>
  )
}

export default ChooseLights
