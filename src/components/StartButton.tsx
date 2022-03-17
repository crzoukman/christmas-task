// Styled Component
import { Link } from "react-router-dom";
import { Button } from "./styled/StartButton.style";

const StartButton = () => {
  return (
    <Link to='/toys' style={{ width: 'min-content', height: 'min-content', marginTop: '40px' }}>
      <Button>
        Начать
      </Button>
    </Link>
  )
};

export default StartButton;
