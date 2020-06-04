// IMPORTS
import React, {useState, useEffect} from 'react';

// FUNCTIONS
import { make_2Darray } from './utils/make_2Darray.js'

// __MAIN__
function App() {
  // State
  const [cols, setCols] = useState(10)
  const [rows, setRows] = useState(10)
  const [grid, setGrid] = useState([])

  // UseEffect => Game Setup
  useEffect(() => {
    console.log('<App /> UseEffect Triggered')
    console.log(cols)
    console.log(rows)

    // Make Empty Grid
    let emptyGrid = make_2Darray(cols, rows)
    console.log(emptyGrid)

    // Fill Grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        emptyGrid[i][j] = Math.floor(Math.random() * 2)
      }
    }
    console.table(emptyGrid)
    setGrid(emptyGrid)
    
  }, [cols, rows])

  return (
    <div className="App">
      Hello World - Game Of Life
    </div>
  );
}

// EXPORTS
export default App;
