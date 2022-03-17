const Picked = ({
  bookmarks,
}: {
  bookmarks: { [k: string]: boolean } | {} | any,
}) => {
  function countPicked() {
    let counter = 0;
    for (const t in bookmarks) {
      if (bookmarks[t]) counter++;
    }

    return counter;
  }

  return (
    <div className="pickedComp">
      <img className="pickedImg" src="./images/bag.svg" alt="bag" />
      <div className="pickedCounter">{countPicked()}</div>
    </div>
  )
};

export default Picked;
