import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback, useReducer, createContext } from 'react';
import Snowfall from 'react-snowfall'
import html2canvas from 'html2canvas';

// DB
import data from './db/data';

// Styles
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Toys from './components/Toys';
import Tree from './components/Tree';

// Styled Component
import { Modal, Dark } from './components/styled/App.style';

// Interfaces
import { ISelect, IToys, filterIcons } from './interfaces/common';

// Functions
import { filtering } from './functions/app';

// Context
export const ContextX = createContext<| any>(null);

// Interfaces
interface ISavedToys {
  src: string,
  left: string,
  top: string,
  id: string,
}

function App() {

  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<IToys[]>(data);
  const [bookmarks, setBookmarks] = useState<{ [k: string]: string } | {} | any>(localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks') || '{}') : (() => {
    localStorage.setItem('bookmarks', JSON.stringify({}));
    return {};
  })())
  const [bookmarksX, setBookmarksX] = useState<| any>(
    localStorage.getItem('bookmarksX')
      ? JSON.parse(localStorage.getItem('bookmarksX') || '[]')
      : []
  );
  const [reset, setReset] = useState(false);
  const [fullFav, setFullFav] = useState(false);
  const [chosedTree, setChosedTree] = useState(
    localStorage.getItem('chosedTree')
      ? JSON.parse(localStorage.getItem('chosedTree') || '[]')
      : [
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 5, active: false },
      ]
  );
  const [chosedBg, setChosedBg] = useState(
    localStorage.getItem('chosedBg')
      ? JSON.parse(localStorage.getItem('chosedBg') || '[]')
      : [
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
        { id: 6, active: false },
        { id: 7, active: false },
        { id: 8, active: false },
      ]
  );
  const [snowfall, setSnowfall] = useState(
    localStorage.getItem('isSnowfallOn')
      ? JSON.parse(localStorage.getItem('isSnowfallOn') || '{}')
      : true
  )
  const [sound, setSound] = useState(
    localStorage.getItem('isSoundOn')
      ? JSON.parse(localStorage.getItem('isSoundOn') || '{}')
      : true
  )
  const [lights, setLights] = useState(
    localStorage.getItem('lights')
      ? JSON.parse(localStorage.getItem('lights') || '{}')
      : {
        mix: true,
        blue: false,
        red: false,
        green: false,
        orange: false,
      }
  );
  const [canvasTrees, setCanvasTrees] = useState<any>(
    localStorage.getItem('canvasTrees')
      ? JSON.parse(localStorage.getItem('canvasTrees') || '{}')
      : {
        1: null,
        2: null,
        3: null,
        4: null,
      }
  );
  const [canvasState, setCanvasState] = useState<any>(
    localStorage.getItem('canvasState')
      ? JSON.parse(localStorage.getItem('canvasState') || '{}')
      : {

      }
  );
  const [lastSavedTree, setLastSavedTree] = useState<any>(null);

  // Canvas 
  const canvasTreeRef = useRef<any>(null);

  const canvas = async (state: any, setState: any) => {
    const canvas = await html2canvas(imgWrapperRef.current, {
      //const canvas = await html2canvas(document.querySelector<any>('#chTree'), {
      useCORS: true,
      backgroundColor: null,
    });

    const srcImg = canvas.toDataURL('image/jpg');

    let flag = false;

    for (const s in state) {
      if (state[s] === null) {
        setState({
          ...state, [s]: srcImg
        })

        flag = true;


        setLastSavedTree(String(s));

        setCanvasState({
          ...canvasState, [s]: {
            bookmarksX: JSON.parse(JSON.stringify(bookmarksX)),
            chosedBg: JSON.parse(JSON.stringify(chosedBg)),
            chosedTree: JSON.parse(JSON.stringify(chosedTree)),
            lights: JSON.parse(JSON.stringify(lights)),
            bookmarks: JSON.parse(JSON.stringify(bookmarks)),
            savedToys: JSON.parse(JSON.stringify(savedToys)),
            sound: JSON.parse(JSON.stringify(sound)),
            snowfall: JSON.parse(JSON.stringify(snowfall)),
          }
        })

        return;
      }
    }

    if (!flag) {
      setState({
        ...state, 1: srcImg
      })



      setLastSavedTree('1');

      setCanvasState({
        ...canvasState, 1: {
          bookmarksX: JSON.parse(JSON.stringify(bookmarksX)),
          chosedBg: JSON.parse(JSON.stringify(chosedBg)),
          chosedTree: JSON.parse(JSON.stringify(chosedTree)),
          lights: JSON.parse(JSON.stringify(lights)),
          bookmarks: JSON.parse(JSON.stringify(bookmarks)),
          savedToys: JSON.parse(JSON.stringify(savedToys)),
          sound: JSON.parse(JSON.stringify(sound)),
          snowfall: JSON.parse(JSON.stringify(snowfall)),


        }
      })
    }

  }

  function loadCanvasState(id: string) {
    const state = JSON.parse(localStorage.getItem('canvasState') as any);

    for (let s in state) {
      if (s === id) {


        setBookmarks(
          state[id].bookmarks
        )
        setBookmarksX(
          state[id].bookmarksX
        )
        setChosedBg(
          state[id].chosedBg
        )
        setChosedTree(
          state[id].chosedTree
        )
        setLights(
          state[id].lights
        )
        setSavedToys(
          state[id].savedToys
        )
        setSound(
          state[id].sound
        )
        setSnowfall(
          state[id].snowfall
        )
      }
    }


  }

  // Sound on the page
  const [songFlag, setSongFlag] = useState<boolean>(false)
  const song = useRef<any>(null);

  // Callback for reset setting on Tree page
  function resetSettingTree() {
    setSound(true);
    setSnowfall(true);
    setChosedBg([
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false },
      { id: 8, active: false },
    ]);
    setChosedTree([
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 5, active: false },
    ]);


    setLights({
      mix: true,
      blue: false,
      red: false,
      green: false,
      orange: false,
    });

    setSongFlag(false)


    const clickHandler = () => {
      song.current.play()
      setSongFlag(true)
    }

    setTimeout(() => {
      document.addEventListener('click', clickHandler, { once: true })
    }, 0)

  }

  // Save to LS
  useEffect(() => {
    localStorage.setItem('chosedTree', JSON.stringify(chosedTree))
  }, [chosedTree])

  useEffect(() => {
    localStorage.setItem('chosedBg', JSON.stringify(chosedBg))
  }, [chosedBg])

  useEffect(() => {
    localStorage.setItem('isSnowfallOn', JSON.stringify(snowfall))
  }, [snowfall])
  useEffect(() => {
    localStorage.setItem('isSoundOn', JSON.stringify(sound))
  }, [sound])
  useEffect(() => {
    localStorage.setItem('lights', JSON.stringify(lights))
  }, [lights])
  useEffect(() => {
    localStorage.setItem('canvasTrees', JSON.stringify(canvasTrees))
  }, [canvasTrees])
  useEffect(() => {
    localStorage.setItem('canvasState', JSON.stringify(canvasState))
  }, [canvasState])

  // --------------------- Drag and Drop -----------------------------------
  const imgWrapperRef = useRef<null | any>(null);

  const [treeSize, setTreeSize] = useState<{ x: number, y: number, }>({ x: 0, y: 0, });

  const [savedToys, setSavedToys] = useState<ISavedToys[]>(
    localStorage.getItem('savedToys')
      ? JSON.parse(localStorage.getItem('savedToys') || '[]')
      : []
  );

  useEffect(() => {
    localStorage.setItem('bookmarksX', JSON.stringify(bookmarksX));
  }, [bookmarksX])


  // Filter states
  const [select, setSelect] = useState<ISelect>(localStorage.getItem('select') ? JSON.parse(localStorage.getItem('select') || '{}') : (() => {
    localStorage.setItem('select', JSON.stringify({ value: 'az', label: 'По названию от "А" до "Я"' }));
    return { value: 'az', label: 'По названию от "А" до "Я"' };
  })());
  const [quantity, setQuantity] = useState<number[]>(localStorage.getItem('quantity') ? JSON.parse(localStorage.getItem('quantity') || '{}') : (() => {
    localStorage.setItem('quantity', JSON.stringify([1, 12]));
    return [1, 12];
  })());
  const [year, setYear] = useState<number[]>(localStorage.getItem('year') ? JSON.parse(localStorage.getItem('year') || '{}') : (() => {
    localStorage.setItem('year', JSON.stringify([1940, 2020]));
    return [1940, 2020];
  })());
  const [iconFilter, setIconFilter] = useState<filterIcons>(localStorage.getItem('iconFilter') ? JSON.parse(localStorage.getItem('iconFilter') || '{}') : (() => {
    localStorage.setItem('iconFilter', JSON.stringify({
      ball: false,
      bell: false,
      cone: false,
      snowflake: false,
      statuette: false,
    }));
    return {
      ball: false,
      bell: false,
      cone: false,
      snowflake: false,
      statuette: false,
    };
  })());

  const [colorFilter, setColorFilter] = useState<filterIcons>(localStorage.getItem('colorFilter') ? JSON.parse(localStorage.getItem('colorFilter') || '{}') : (() => {
    localStorage.setItem('colorFilter', JSON.stringify({
      white: false,
      yellow: false,
      red: false,
      blue: false,
      green: false,
    }));
    return {
      white: false,
      yellow: false,
      red: false,
      blue: false,
      green: false,
    };
  })());

  const [sizeFilter, setSizeFilter] = useState<filterIcons>(
    localStorage.getItem('sizeFilter') ? JSON.parse(localStorage.getItem('sizeFilter') || '{}') : (() => {
      localStorage.setItem('sizeFilter', JSON.stringify({
        small: false,
        medium: false,
        large: false,
      }));
      return {
        small: false,
        medium: false,
        large: false,
      };
    })()
  );

  const [favCheckbox, setFavCheckbox] = useState(localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav') || '{}') : (() => {
    localStorage.setItem('fav', JSON.stringify(false));
    return false;
  })());

  // useCallback List
  const setQuantityToLS = useCallback(
    () => {
      return localStorage.setItem('quantity', JSON.stringify(quantity))
    },
    [quantity]
  );

  const setYearToLS = useCallback(
    () => localStorage.setItem('year', JSON.stringify(year)),
    [year]
  );

  const setIconFilterToLS = useCallback(
    () => localStorage.setItem('iconFilter', JSON.stringify(iconFilter)),
    [iconFilter]
  );

  const setColorFilterToLS = useCallback(
    () => localStorage.setItem('colorFilter', JSON.stringify(colorFilter)),
    [colorFilter]
  );

  const setSizeFilterToLS = useCallback(
    () => localStorage.setItem('sizeFilter', JSON.stringify(sizeFilter)),
    [sizeFilter]
  );

  const setFavCheckboxToLS = useCallback(
    () => localStorage.setItem('fav', JSON.stringify(favCheckbox)),
    [favCheckbox]
  );

  const setSelectToLS = useCallback(
    () => localStorage.setItem('select', JSON.stringify(select)),
    [select]
  );

  useEffect(() => {
    const res = filtering(data, search, quantity, year, iconFilter, colorFilter, sizeFilter, favCheckbox, select,);

    setSearchResult(res);
  },
    [
      search,
      quantity,
      year,
      iconFilter,
      colorFilter,
      sizeFilter,
      favCheckbox,
      select,
    ]
  )

  // Quantity Filter
  useEffect(() => {
    setQuantityToLS();
  }, [setQuantityToLS])

  // Year Filter
  useEffect(() => {
    setYearToLS();
  }, [setYearToLS])

  // Icon filter
  useEffect(() => {
    setIconFilterToLS();
  }, [setIconFilterToLS])

  // Color filter
  useEffect(() => {
    setColorFilterToLS();
  }, [setColorFilterToLS])

  // Size filter
  useEffect(() => {
    setSizeFilterToLS();
  }, [setSizeFilterToLS])

  // Favorite Filter
  useEffect(() => {
    setFavCheckboxToLS()
  }, [setFavCheckboxToLS]);

  // Sorting Filter - The Last
  useEffect(() => {
    setSelectToLS();
  }, [setSelectToLS])

  // Set Bookmarks
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    const bookmarksZ = [];

    for (const toy in bookmarks) {
      const found = data.filter(item => {
        return item.num === toy;
      });

      if (found.length > 0) {
        if (bookmarks[toy]) {
          bookmarksZ.push({
            num: toy,
            count: +found[0].count,
          });
        }

      }

    }

    const max = bookmarksZ.length;

    for (let i = 0; i < 20 - max; i++) {

      bookmarksZ.push({
        num: null,
        count: null,
      })
    }

    const bookmarksXKeys: (string | null)[] = [];
    for (const i of bookmarksX) {
      if (i.num !== null) bookmarksXKeys.push(i.num);
    }

    const bookmarksZ1 = bookmarksZ.filter((i) => {
      return !bookmarksXKeys.includes(i.num)
    })



    const bookmarksX1 = bookmarksX.filter((i: any) => {
      return i.num !== null;
    })


    const bookmarksX2 = bookmarksX1.filter((i: any) => {
      const falsies = [];
      for (const b in bookmarks) {
        if (!bookmarks[b]) falsies.push(b);
      }
      return !falsies.includes(i.num);

    })

    const merge = [...bookmarksZ1, ...bookmarksX2];


    setBookmarksX(merge[0].num === null ? merge.reverse() : merge);

  }, [bookmarks])

  // Show Modal if Basket is full
  useEffect(() => {
    if (fullFav) {
      modalRef.current.style = 'transform: translate(-50%, -50%)';
    }
  }, [fullFav])


  function handleModal() {
    setFullFav(false);
  }





  useEffect(() => {
    const clickHandler = () => {
      song.current.play()
      setSongFlag(true)
    }

    song.current.volume = 0.5;

    document.addEventListener('DOMContentLoaded', () => {
      if (sound) {
        document.addEventListener('click', clickHandler)
      } else {
        setSongFlag(true)
      }
    })


    if (sound && songFlag) {
      song.current.play()
    } else {
      song.current.pause()
    }

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [sound, songFlag])



  const modalRef = useRef<any>();
  const leftRef = useRef<any>();

  return (
    <div className="App">
      <ContextX.Provider value={{
        bookmarksX,
        setBookmarksX,
        chosedTree,
        setChosedTree,
        setSavedToys,
        savedToys,
        treeSize,
        setTreeSize,
        imgWrapperRef,
        chosedBg,
        setChosedBg,
        snowfall,
        setSnowfall,
        sound,
        setSound,
        resetSettingTree,
        lights,
        setLights,
        canvas,
        canvasTrees,
        setCanvasTrees,
        canvasTreeRef,
        canvasState,
        setCanvasState,
        loadCanvasState,
        leftRef,
        data,
        lastSavedTree,
      }}>

        <audio src='./assets/audio/night.mp3' ref={song} loop={true} />

        <div className='snow'>
          {snowfall && <Snowfall color={sound ? 'red' : 'lightblue'} />}
        </div>

        {fullFav && <Modal data={fullFav} ref={modalRef}>
          <h2>Извините, все слоты заполнены!</h2>
          <button onClick={handleModal}>OK</button>
        </Modal>}
        {fullFav && <Dark />}
        <Router>
          <Header
            search={search}
            setSearch={setSearch}
            bookmarks={bookmarks}
          />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/toys' element={<Toys
                toys={searchResult}
                select={select}
                setSelect={setSelect}
                quantity={quantity}
                setQuantity={setQuantity}
                year={year}
                setYear={setYear}
                iconFilter={iconFilter}
                setIconFilter={setIconFilter}
                colorFilter={colorFilter}
                setColorFilter={setColorFilter}
                sizeFilter={sizeFilter}
                setSizeFilter={setSizeFilter}
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
                favCheckbox={favCheckbox}
                setFavCheckbox={setFavCheckbox}
                reset={reset}
                setReset={setReset}
                setFullFav={setFullFav}
                setSearch={setSearch}

              />} />
              <Route path='/tree' element={<Tree bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </ContextX.Provider>
    </div>
  );
}

export default App;
