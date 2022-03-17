import { useEffect } from 'react';
import lottie from 'lottie-web';

// Interfaces
interface ILottie {
  data: string;
  name: string;
}

const Lottie = ({ data, name }: ILottie) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#id${name}`) as HTMLElement,
      path: data,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      rendererSettings: {
        progressiveLoad: true,
      },
    });
  }, [data, name]);

  return (
    <div id={`id${name}`} />
  );
};

export default Lottie;