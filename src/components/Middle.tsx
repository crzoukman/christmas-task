import React, { useContext, useRef, useEffect, useState, useLayoutEffect } from "react"
import Snowfall from 'react-snowfall'

// Components
import Lights from "./Lights";

// Styled Components
import { MiddleWrapper, BigMiddleWrapper } from "./styled/Middle.style"

// Context
import { ContextX } from "../App"

const Middle = () => {

  const [clicked, setClicked] = useState<| any>('');


  const { leftRef, chosedTree, setTreeSize, treeSize, setSavedToys, savedToys, imgWrapperRef, setBookmarksX, bookmarksX, chosedBg, snowfall, sound } = useContext(ContextX);
  const currentTree = chosedTree.filter((tree: { id: number, active: boolean }) => tree.active);

  const imgRef = useRef<null | any>(null);

  useEffect(() => {
    function resizeHandler(e: any) {
      setTreeSize({ x: e[0].target.offsetWidth, y: e[0].target.offsetHeight })
    }

    const observer: any = new ResizeObserver(resizeHandler).observe(imgRef.current);

    return () => observer ? observer.disconnect() : null;

  }, [])

  useEffect(() => {
    localStorage.setItem('savedToys', JSON.stringify(savedToys));

    const imgs = document.querySelectorAll('.dnd-image');

    imgs.forEach(i => i.remove());


    for (const s of savedToys) {
      const img = new Image();

      img.style.width = `15%`;
      img.style.transform = 'translate(-50%, -50%)';
      img.className = 'dnd-image';

      img.src = s.src;
      img.style.top = s.top;
      img.style.left = s.left;
      img.draggable = true;
      img.dataset.id = s.uq;

      const dragStartHandler = (e: any) => {
        e.dataTransfer.setData("application/toy", [s.id, true]);
        e.dataTransfer.dropEffect = "move"

        setClicked(e.target.dataset.id)
      }


      img.addEventListener('dragstart', dragStartHandler)


      imgWrapperRef.current.append(img);
    }


  }, [savedToys])

  // Удаление иконки при дропе за пределами
  useEffect(() => {
    const dragEndHandler = (e: any) => {
      e.preventDefault();

      const num = (e.target.src).split('/').reverse()[0].split('.')[0];

      if (e.dataTransfer.dropEffect === 'none') {
        const imgsX = document.querySelectorAll('.dnd-image');

        imgsX.forEach((i: any) => {
          i.remove()
        });

        const filtred = savedToys.filter((toy: any) => {
          return toy.uq !== clicked;
        })

        setSavedToys([...filtred])

        setClicked('');

        setBookmarksX(bookmarksX.map(
          (i: any) => {
            if (i.num !== num) return i;
            else return { num: i.num, count: i.count + 1 }
          }
        ))
      }
    }

    const imgs = document.querySelectorAll('.dnd-image');
    imgs.forEach(img => {
      img.addEventListener('dragend', dragEndHandler)
    });
  })


  function dragOverHandler(e: any) {
    e.preventDefault();
  }

  function dropHandler(e: any) {
    e.preventDefault();

    const data: | any = e.dataTransfer.getData("application/toy").split(',');

    if (data[1] === 'false') {
      const img = new Image();


      img.src = `./assets/toys/${data[0]}.png`;
      img.style.left = `${(e.pageX - imgWrapperRef.current.getBoundingClientRect().left - window.scrollX) / treeSize.x * 100}%`;
      img.style.top = `${(e.pageY - imgWrapperRef.current.getBoundingClientRect().top - window.scrollY) / treeSize.y * 100}%`;



      setSavedToys([...savedToys, {
        src: img.src,
        left: img.style.left,
        top: img.style.top,
        id: data[0],
        uq: String(Math.random() * 100000)
      }])

      setBookmarksX(
        bookmarksX.map((i: { num: string, count: number }) => {
          if (i.num !== data[0]) return i;
          else {
            return { num: i.num, count: i.count - 1 }
          }
        })
      )
    }

    if (data[1] === 'true') {
      const img = new Image();


      img.src = `./assets/toys/${data[0]}.png`;
      img.style.left = `${(e.pageX - imgWrapperRef.current.getBoundingClientRect().left - window.scrollX) / treeSize.x * 100}%`;
      img.style.top = `${(e.pageY - imgWrapperRef.current.getBoundingClientRect().top - window.scrollY) / treeSize.y * 100}%`;

      const filtred = savedToys.filter((toy: any) => {
        return toy.uq !== clicked;
      })

      setSavedToys([...filtred, {
        src: img.src,
        left: img.style.left,
        top: img.style.top,
        id: data[0],
        uq: clicked,
      }])


      setClicked('');

    }
  }


  function loadBg() {
    const filtred = chosedBg.filter((bg: any) => bg.active)
    return filtred[0].id;
  }

  function getIdTree() {
    if (!currentTree[0]) {
      console.log('### chosedTree', chosedTree);
      console.log('###', currentTree);

    }
    return currentTree[0] ? currentTree[0].id : '1';
  }

  function settingsHandler() {
    leftRef.current.style = 'transform: translateX(0%); display: flex';

  }

  function giveChosedTree(id: number): boolean {
    return chosedTree.filter((t: any) => t.id == id)[0].active;
  }




  return (
    <BigMiddleWrapper srcX={`./assets/bg/${loadBg()}.jpg`}>
      {snowfall && <Snowfall color={sound ? 'red' : 'lightblue'} />}

      <div className="settings-w">
        <img src="./assets/icon-settings/settings.svg" alt="settings" className="settings-i" onClick={settingsHandler} />
      </div>

      <MiddleWrapper ref={imgWrapperRef} id='treeID' srcX={`./assets/bg/${loadBg()}.jpg`}>
        <img ref={imgRef} src={`./assets/tree/${getIdTree()}.png`} alt="tree" useMap="#image-map" id='chTree' />
        <map name="image-map">
          {
            giveChosedTree(1) && <area onClick={(e) => e.preventDefault()} target="" alt="" title="" href="" coords="9,558,5,537,80,531,87,511,63,495,37,484,32,461,10,437,48,429,94,428,107,398,102,375,77,355,87,345,133,348,125,327,123,304,152,298,156,281,123,274,122,254,106,230,118,213,156,215,169,171,161,145,172,123,199,131,195,0,303,0,304,68,295,103,304,114,332,155,345,197,357,222,384,234,379,253,350,280,361,282,369,299,359,322,362,344,376,364,368,382,339,416,345,424,374,450,395,454,409,480,417,508,429,533,444,542,426,569,76,569,44,567,54,575,69,574" shape="poly"
              onDragOver={dragOverHandler}
              onDrop={dropHandler}
            />
          }

          {
            giveChosedTree(2) && <area onClick={(e) => e.preventDefault()} target="" alt="" title="" href="" coords="23,553,67,438,95,417,81,373,110,357,97,325,111,290,135,285,135,245,145,224,157,187,196,89,204,0,303,0,305,61,309,87,319,116,333,166,346,196,359,214,336,223,340,235,369,226,381,239,361,262,362,286,384,278,394,317,401,344,412,386,429,410,411,434,451,439,448,486,462,501,481,519,481,536,477,547,460,563,464,571,452,581,432,588,409,596,94,584" shape="poly"
              onDragOver={dragOverHandler}
              onDrop={dropHandler}
            />
          }

          {
            giveChosedTree(3) && <area onClick={(e) => e.preventDefault()} target="" alt="" title="" href="" coords="17,602,199,91,202,1,285,1,305,95,342,192,355,240,424,406,428,448,459,500,480,559,463,628,20,637" shape="poly"
              onDragOver={dragOverHandler}
              onDrop={dropHandler}
            />
          }

          {
            giveChosedTree(5) && <area onClick={(e) => e.preventDefault()} target="" alt="" title="" href="" coords="15,610,204,101,205,0,281,3,287,101,309,149,332,220,347,287,365,326,385,354,374,398,400,417,417,427,395,450,444,527,452,561,477,579,472,589,467,603,489,616,493,626,491,631" shape="poly"
              onDragOver={dragOverHandler}
              onDrop={dropHandler}
            />
          }
        </map>


        <Lights />
      </MiddleWrapper>
    </BigMiddleWrapper>
  )
}

export default Middle
