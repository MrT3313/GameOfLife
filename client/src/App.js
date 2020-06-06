// IMPORTS
import React, {useState, useEffect} from 'react';
import produce from 'immer'

// FUNCTIONS
import { make_2Darray } from './utils/make_2Darray.js'

// COMPONENTS
import AppStateForm from './components/AppStateForm.js'
import Cell from './components/Cell.js'

// __MAIN__
function App() {
  // State
  const [size, setSize] = useState(10)

  const [grid, setGrid] = useState([])
  const [generation, setGeneration] = useState(0)

  // UseEffect => Game Setup
  useEffect(() => {
  console.log('<App /> UseEffect Triggered')

    // Make Empty Grid
    let emptyGrid = make_2Darray(size)

    // Fill Grid
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        emptyGrid[i][j] = Math.floor(Math.random() * 2)
      }
    }
    
    // Update State
    setGrid(emptyGrid)
    
  }, [size])

  // Methods
  // 1 - Clear Grid
  const clearGrid = () => {
    // Make Empty Grid
    let emptyGrid = make_2Darray(size)

    // Fill Grid
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        emptyGrid[i][j] = 0
      }
    }

    // Update State
    setGrid(emptyGrid)
  }

  // 2 - Toggle Cell State
  const toggleCellStatus = (i,k) => {
    // Immutable State Update => immer 
    const newGrid = produce(grid, gridCopy => {
      gridCopy[i][k] = grid[i][k] === 0 ? 1 : 0
    })
    // Update State
    setGrid(newGrid)
  }

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <AppStateForm 
        clearGrid={clearGrid}
        currentSize={size}
        setSize={setSize}
      />
      <div
        className="gridContainer"
        style={{
          display: `grid`,
          gridTemplateColumns:  `repeat(${size}, 20px)`
        }}
      >
        {grid.map((rows, i) => {
            return rows.map((col, k) => {
              return (
                <Cell 
                  key={`${i}-${k}`}
                  grid={grid}
                  i={i}
                  k={k} 
                  toggleCellStatus={toggleCellStatus}
                />
              ) 
            })
          })
        }
      </div>
      <h3>Generation: {generation}</h3>
    </div>
  );
}

// EXPORTS
export default App;
