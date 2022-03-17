import { useContext } from "react"

// Styled Components
import { ChooseTreeItem, ChooseTreeWrapper, BigChooseTreeWrapper } from "./styled/ChooseTree.style";



// Context
import { ContextX } from "../App"

const ChooseTree = () => {
  const { chosedTree, setChosedTree, setSavedToys, setBookmarksX, bookmarksX, data } = useContext(ContextX);

  function handleClick(e: | any, active: boolean) {

    if (!active && e.target.dataset.id) {


      const list = chosedTree.map((item: | any) => {
        if (item.id === +e.target.dataset.id) {
          return { id: item.id, active: !active }
        } else {
          return { id: item.id, active: false };
        }

      });

      setChosedTree(list);

      (() => {
        setSavedToys([]);

        const restore = [];

        for (let b of bookmarksX) {
          if (b.count !== null) {
            for (let d of data) {
              if (d.num === b.num) {
                restore.push({
                  num: d.num,
                  count: +d.count,
                })
              }
            }

          } else {
            restore.push(b);
          }
        }



        setBookmarksX(restore);
      })()
    }

  }

  return (

    <BigChooseTreeWrapper>
      <h2 className="tree-header">Выберите ёлку</h2>

      <ChooseTreeWrapper>
        {
          chosedTree.map((tree: any) => {
            return (
              <ChooseTreeItem key={tree.id} active={tree.active} onClick={(e) => handleClick(e, tree.active)}>
                <img src={`./assets/tree/${tree.id}.png`} alt="tree" data-id={tree.id} />
              </ChooseTreeItem>
            );
          })
        }
      </ChooseTreeWrapper>
    </BigChooseTreeWrapper>
  )
}

export default ChooseTree
