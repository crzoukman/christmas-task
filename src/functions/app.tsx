// Interfaces
import { IToys, filterIcons, ISelect } from "../interfaces/common";

export function filtering(
  list: IToys[],
  search: string,
  quantity: number[],
  year: number[],
  iconFilter: filterIcons,
  colorFilter: filterIcons,
  sizeFilter: filterIcons,
  favCheckbox: boolean,
  select: ISelect,
) {
  const copy = [...list];

  // Search Filter
  const searchData = (function searchFilter(data) {
    const copyX = [...data];
    const res = copyX.filter((toy: IToys) => {
      return (toy.name).toLowerCase().includes(search.toLowerCase());
    });

    return res;
  })(copy);

  // Quantity Filter
  const quantityData = (function quantityFilter(data) {
    const copyX = [...data];
    const res = copyX.filter((toy: IToys) => {
      return +toy.count >= quantity[0] && +toy.count <= quantity[1];
    });

    return res;
  })(searchData);

  // Year Filter
  const yearData = (function yearFilter(data) {
    const copyX = [...data];
    const res = copyX.filter((toy: IToys) => {
      return +toy.year >= year[0] && +toy.year <= year[1];
    });

    return res;
  })(quantityData);

  // Icon Filter
  const iconData = (function iconFilterFn(data) {
    const copyX = [...data];
    const res = [];
    const obj: { [k: string]: string } = {
      'ball': 'шар',
      'bell': 'колокольчик',
      'cone': 'шишка',
      'snowflake': 'снежинка',
      'statuette': 'фигурка',
    };

    for (const p in iconFilter) {
      if (iconFilter[p] === true) {
        const ru = obj[p];

        res.push(copyX.filter((toy) => {
          return (toy.shape).toLowerCase() === ru.toLowerCase();
        }));
      }
    }

    return res.length ? res.flat() : copyX;
  })(yearData);

  // Color Filter
  const colorData = (function colorFilterFn(data) {
    const copyX = [...data];
    const res = [];
    const obj: { [k: string]: string } = {
      'white': 'белый',
      'yellow': 'желтый',
      'red': 'красный',
      'blue': 'синий',
      'green': 'зелёный',
    };

    for (const p in colorFilter) {
      if (colorFilter[p] === true) {
        const ru = obj[p];

        res.push(copyX.filter((toy) => {
          return (toy.color).toLowerCase() === ru.toLowerCase();
        }));
      }
    }

    return res.length ? res.flat() : copyX;
  })(iconData);

  // Size Filter
  const sizeData = (function sizeFilterFn(data) {
    const copyX = [...data];
    const res = [];
    const obj: { [k: string]: string } = {
      'small': 'малый',
      'medium': 'средний',
      'large': 'большой',
    };

    for (const p in sizeFilter) {
      if (sizeFilter[p] === true) {
        const ru = obj[p];

        res.push(copyX.filter((toy) => {
          return (toy.size).toLowerCase() === ru.toLowerCase();
        }));
      }
    }

    return res.length ? res.flat() : copyX;
  })(colorData);

  // Favorite Filter
  const favData = (function favFilter(data) {
    const copyX = [...data];

    if (favCheckbox) {
      const res = copyX.filter((toy: IToys) => {
        return toy.favorite;
      });

      return res;
    }

    return copyX;
  })(sizeData);

  // Sorting Filter - The last
  const sortingData = (function sorting(data) {
    const copyX = [...data];
    const res = (function sortingX(list: IToys[]) {
      if (select.value === 'az') {
        const copy = [...list] as IToys[];

        copy.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

        return copy;
      }

      if (select.value === 'za') {
        const copy = [...list] as IToys[];

        copy.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });

        return copy;
      }

      if (select.value === 'up') {
        const copy = [...list] as IToys[];

        copy.sort((a, b) => {
          return +a.count - +b.count;
        });

        return copy;
      }

      if (select.value === 'down') {
        const copy = [...list] as IToys[];

        copy.sort((a, b) => {
          return +b.count - +a.count;
        });

        return copy;
      }

      if (select.value === 'yup') {
        const copy = [...list] as IToys[];

        copy.sort((a, b) => {
          return +a.year - +b.year;
        });

        return copy;
      }

      if (select.value === 'ydown') {
        const copy = [...list] as IToys[];

        copy.sort((a, b) => {
          return +b.year - +a.year;
        });

        return copy;
      }
    })(copyX);

    return res ? res : [];
  })(favData);

  return sortingData;
}
