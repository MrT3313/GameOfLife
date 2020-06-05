// IMPORTS
import React, {useState, useEffect} from 'react';

// FUNCTIONS
import { make_2Darray } from './utils/make_2Darray.js'

// COMPONENTS
import Cell from './components/Cell.js'

// __MAIN__
function App() {
  // State
  const [cols, setCols] = useState(10)
  const [rows, setRows] = useState(10)

  const [grid, setGrid] = useState([])
  const [generation, setGeneration] = useState(0)

  // UseEffect => Game Setup
  useEffect(() => {
    console.log('<App /> UseEffect Triggered')
    // Make Empty Grid
    let emptyGrid = make_2Darray(cols, rows)

    // Fill Grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        emptyGrid[i][j] = Math.floor(Math.random() * 2)
      }
    }
    
    // Update State
    setGrid(emptyGrid)
    
  }, [cols, rows])

  return (
    <div className="App">
      <div>Game Of Life</div>
      <div
        className="gridContainer"
        style={{
          display: `grid`,
          gridTemplateColumns:  `repeat(${cols}, 20px)`
        }}
      >
        {grid.map((rows, i) => {
            return rows.map((col, k) => {
              return <Cell key={`${i}-${k}`} status={grid[i][k]}/> 
            })
          })
        }
      </div>
      <div>Generation: {generation}</div>
    </div>
  );
}

// EXPORTS
export default App;
