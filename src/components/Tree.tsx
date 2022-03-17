import { useEffect } from "react";

// Components
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

// Styled Components
import { TreeC } from "./styled/Tree.style";

const Tree = ({ bookmarks, setBookmarks }: any) => {
  useEffect(() => {
    if (Object.keys(bookmarks).length === 0) {
      const newBookmarks: any = {}

      for (let i = 1; i <= 20; i++) {
        newBookmarks[i] = true;
      }


      setBookmarks(newBookmarks);
    }
  }, [])

  return (
    <TreeC>
      <Left />

      <Middle />
      <Right />
    </TreeC>
  )
};

export default Tree;
