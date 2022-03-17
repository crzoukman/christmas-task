// Components
import StartButton from './StartButton';
import Lottie from './ChTree';

// Styled Components
import { HomeC } from './styled/Home.style';

const Home = () => {
  return (
    <HomeC>
      <Lottie
        data='./christmas-tree.json'
        name='christmasTree'
      />
      <StartButton />
    </HomeC>
  )
};

export default Home;
