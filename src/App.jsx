import { useMemo, useCallback, useState } from 'react'


function SortedList({ list, sortFunc }) {
  console.log("SortedList Render")
  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunc)
  }, [list, sortFunc]);
  return (
    <div>
      {sortedList.join(", ")}
    </div>
  )
}

function App() {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(() => numbers.reduce((acc, number) => acc + number, 0)
    , [numbers]);
  const [names] = useState(["John", "Paul", "George", "Ringo"]);
  const sortedNames = useMemo(() => [...names].sort()
    , [names]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const countTotal = count1 + count2 // no need useMemo because its simple calculation

  const sortFunc = useCallback((a, b) => a.localeCompare(b), []); // use useCallback when u pass func as a prop to a component

  return (
    <div className='App'>
      total: {total}
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <button onClick={() => setCount1(count1 + 1)}>Count {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count {count2}</button>
      <div>total: {countTotal}</div>
    </div>
  )
}

export default App
