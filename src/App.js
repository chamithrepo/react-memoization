import { useCallback, useState } from 'react'
import Child from "./Child";

const App = () => {

  const [countParent, setParentCount] = useState(0)
  const [countChild, setChildCount] = useState(0)

  // const increaseCount = () => {
  //   setChildCount(countChild + 1)
  // }

  const increaseCount = useCallback(() => {
    setChildCount(countChild + 1)
  }, [countChild])

  return (
    <div className="App">
      <div className="main">
        <button type="button" onClick={() => { setParentCount(countParent + 1) }}>Parent button</button>
        <p>{countParent}</p>
        <Child count={countChild} onIncreaseCount={increaseCount} />
      </div>
    </div>
  );
}

export default App;
