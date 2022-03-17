import Select from 'react-select';
import { useContext } from 'react';

// Import rc-slider
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

// Context
import { ContextX } from '../App';

// Interfaces
import { ISelect, filterIcons } from '../interfaces/common';

// Styled components
import { ToyShapeList, ToyShapeItem, ToyColorList, ToyColorItem, ToySizeList, ToySizeItem, FiltersC, RangeQ, RangeY, Label, Reset, ResetAll } from './styled/Filters.style';


// Import images from assets
// const importAll = (require: | any) =>
//   require.keys().reduce((acc: | any, next: | any) => {
//     acc[next.replace("./", "")] = require(next);
//     return acc;
//   }, {});


// const images = importAll(
//   require.context("../assets/toy-shape/", false, /\.(png|jpe?g|svg)$/)
// );

const selectOptions = [
  { value: 'az', label: 'По названию от "А" до "Я"' },
  { value: 'za', label: 'По названию от "Я" до "А"' },
  { value: 'up', label: 'По возрастанию (количество)' },
  { value: 'down', label: 'По убыванию (количество)' },
  { value: 'yup', label: 'По возрастанию (год)' },
  { value: 'ydown', label: 'По убыванию (год)' }
];


const Filters = ({
  select,
  setSelect,
  quantity,
  setQuantity,
  year,
  setYear,
  iconFilter,
  setIconFilter,
  colorFilter,
  setColorFilter,
  sizeFilter,
  setSizeFilter,
  favCheckbox,
  setFavCheckbox,
  setReset,
  reset,
  setSearch,
  setBookmarks,
}: {
  select: ISelect | any,
  setSelect: (arg: ISelect) => void,
  quantity: number[],
  setQuantity: (arg: number[]) => void,
  year: number[],
  setYear: (arg: number[]) => void,
  iconFilter: filterIcons,
  setIconFilter: (arg: filterIcons) => void,
  colorFilter: filterIcons,
  setColorFilter: (arg: filterIcons) => void,
  sizeFilter: filterIcons,
  setSizeFilter: (arg: filterIcons) => void,
  favCheckbox: boolean,
  setFavCheckbox: (arg: boolean) => void,
  setReset: (arg: boolean) => void,
  reset: boolean,
  setSearch: (arg: string) => void,
  setBookmarks: (arg: {} | { [k: string]: string }) => void,
}) => {

  const handleSelect = (selectedOption: ISelect) => {
    setSelect(selectedOption);
  };

  function handleShapeFilter(e: React.SyntheticEvent | any) {


    const propValue = iconFilter[`${e.target.dataset.id}`];


    if (typeof e.target.dataset.id === 'string') {
      propValue
        ? setIconFilter({ ...iconFilter, [e.target.dataset.id]: false })
        : setIconFilter({ ...iconFilter, [e.target.dataset.id]: true });
    }

  }

  function handleColorFilter(e: React.SyntheticEvent | any) {


    const propValue = colorFilter[`${e.target.dataset.id}`];
    if (typeof e.target.dataset.id === 'string') {
      propValue
        ? setColorFilter({ ...colorFilter, [e.target.dataset.id]: false })
        : setColorFilter({ ...colorFilter, [e.target.dataset.id]: true });
    }

  }

  function handleSizeFilter(e: React.SyntheticEvent | any) {


    const propValue = sizeFilter[`${e.target.dataset.id}`];
    if (typeof e.target.dataset.id === 'string') {
      propValue
        ? setSizeFilter({ ...sizeFilter, [e.target.dataset.id]: false })
        : setSizeFilter({ ...sizeFilter, [e.target.dataset.id]: true });
    }

  }

  function handleFavCheckbox(e: React.SyntheticEvent | any) {
    setFavCheckbox(e.target.checked);
  }

  function handleReset() {
    setReset(!reset);
    setQuantity([1, 12]);
    setYear([1940, 2020]);
    setIconFilter({
      ball: false,
      bell: false,
      cone: false,
      snowflake: false,
      statuette: false,
    });
    setColorFilter({
      white: false,
      yellow: false,
      red: false,
      blue: false,
      green: false,
    });
    setSizeFilter({
      small: false,
      medium: false,
      large: false,
    });
    setFavCheckbox(false);
  }

  const { setBookmarksX } = useContext(ContextX);

  function handleResetAll() {
    handleReset();
    setSelect({ value: 'az', label: 'По названию от "А" до "Я"' });
    setSearch('');
    setBookmarks({});
    setBookmarksX([]);
  }

  return (
    <FiltersC>
      <div>
        <h2 className='filterHeader'>Фильтры по значению</h2>
        <div className='iconFilterBody'>
          <div className='icon-filter-wrapper'>
            <h3 className='iconFilter-h3'>Форма:</h3>
            <ToyShapeList>
              <ToyShapeItem clicked={iconFilter.ball} onClick={handleShapeFilter}><img src='./assets/toy-shape/ball.svg' alt='ball' data-id='ball' /></ToyShapeItem>
              <ToyShapeItem clicked={iconFilter.bell} onClick={handleShapeFilter}><img src='./assets/toy-shape/bell.svg' alt='bell' data-id='bell' /></ToyShapeItem>
              <ToyShapeItem clicked={iconFilter.cone} onClick={handleShapeFilter}><img src='./assets/toy-shape/cone.svg' alt='cone' data-id='cone' /></ToyShapeItem>
              <ToyShapeItem clicked={iconFilter.snowflake} onClick={handleShapeFilter}><img src='./assets/toy-shape/snowflake.svg' alt='snowflake' data-id='snowflake' /></ToyShapeItem>
              <ToyShapeItem clicked={iconFilter.statuette} onClick={handleShapeFilter}><img src='./assets/toy-shape/statuette.svg' alt='statuette' data-id='statuette' /></ToyShapeItem>
            </ToyShapeList>
          </div>

          <div className='icon-filter-wrapper'>
            <h3 className='iconFilter-h3'>Цвет:</h3>
            <ToyColorList>
              <div className='color-w'><ToyColorItem clicked={colorFilter.white} borderColor='white' onClick={handleColorFilter} data-id='white' /></div>
              <div className='color-w'><ToyColorItem clicked={colorFilter.yellow} borderColor='yellow' onClick={handleColorFilter} data-id='yellow' /></div>
              <div className='color-w'><ToyColorItem clicked={colorFilter.red} borderColor='rgba(255,0,0, 0.75)' onClick={handleColorFilter} data-id='red' /></div>
              <div className='color-w'><ToyColorItem clicked={colorFilter.blue} borderColor='rgba(70,143,234, 1)' onClick={handleColorFilter} data-id='blue' /></div>
              <div className='color-w'><ToyColorItem clicked={colorFilter.green} borderColor='#48BF53' onClick={handleColorFilter} data-id='green' /></div>
            </ToyColorList>
          </div>

          <div className='icon-filter-wrapper'>
            <h3 className='iconFilter-h3'>Размер:</h3>
            <ToySizeList>
              <ToySizeItem onClick={handleSizeFilter} size='60px' clicked={sizeFilter.large}><img src='./assets/toy-shape/sock.svg' alt='sock' data-id='large' /></ToySizeItem>
              <ToySizeItem onClick={handleSizeFilter} size='50px' clicked={sizeFilter.medium}><img src='./assets/toy-shape/sock.svg' alt='sock' data-id='medium' /></ToySizeItem>
              <ToySizeItem onClick={handleSizeFilter} size='40px' clicked={sizeFilter.small}><img src='./assets/toy-shape/sock.svg' alt='sock' data-id='small' /></ToySizeItem>
            </ToySizeList>
          </div>

          <div className='icon-filter-wrapper'>
            <h3 className='iconFilter-h3 fav-h3'>Только любимые:</h3>
            <Label className="container">
              <input checked={favCheckbox} type="checkbox" onChange={handleFavCheckbox} />
              <span className="checkmark"></span>
            </Label>
          </div>
        </div>
      </div >

      <div className='rangeFilterWrapper'>
        <h2 className='filterHeader'>Фильтры по диапазону</h2>
        <div className='rangeFilterC'>
          <RangeQ>
            <h3 className='rangeQ-header'>Количество экземпляров:</h3>
            <div className='rangeQ-body'>
              <div className='rangeValue'>{quantity[0]}</div>
              <Range allowCross={false}
                defaultValue={[0, 12]}
                onChange={(e) => setQuantity(e)}
                value={quantity}
                min={1}
                max={12}
              />
              <div className='rangeValue'>{quantity[1]}</div>
            </div>
          </RangeQ>

          <RangeY>
            <h3 className='rangeY-header'>Год приобретения:</h3>
            <div className='rangeY-body'>
              <div className='rangeValue'>{year[0]}</div>
              <Range allowCross={false}
                defaultValue={[1940, 2020]}
                onChange={(e) => setYear(e)}
                value={year}
                min={1940}
                max={2020}
                step={10}
              />
              <div className='rangeValue'>{year[1]}</div>
            </div>
          </RangeY>
        </div>
      </div>

      <div className='sortingWrapper'>
        <h2 className='filterHeader'>Сортировка</h2>
        <Select
          options={selectOptions}
          value={select}
          onChange={handleSelect}
        />

        <Reset onClick={handleReset}>Сброс фильтров</Reset>
        <ResetAll onClick={handleResetAll}>Очисить всё</ResetAll>
      </div>
    </FiltersC >
  )
};

export default Filters;
