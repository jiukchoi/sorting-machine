import { useRef, useState } from 'react';
import SortingUI from './presenter';
import { heapAscending } from '../../utils/sorting/heap-sort';
import { bubbleDescending } from '../../utils/sorting/bubble-sort'

const Sorting = () => {
  const numArr = useRef();
  const [ascendingArr, setAscendingArr] = useState([]);
  const [descendingArr, setDescendingArr] = useState([]);

  const handleInputChange = e => {
    const inputNum = e.target.value
      .split(',')
      .map(el => Number(el));
    numArr.current = inputNum;
  };

  const handleSorting = arr => {
    const ascendingArr = heapAscending(arr).join();
    setAscendingArr(ascendingArr);
    setDescendingArr("");

    setTimeout(()=> {
      const desendingArr = bubbleDescending(arr).join();
      setDescendingArr(desendingArr);
    }, 3000);
  };

  return <SortingUI
    numArr={numArr}
    ascendingArr={ascendingArr}
    descendingArr={descendingArr}
    handleInputChange={handleInputChange}
    handleSorting={handleSorting}
  />;
};

export default Sorting;
