// IMPORTS
import React,
  { 
    useState, useEffect, 
    useCallback, useRef,
  } from 'react';
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
  const [simSpeed, setSimSpeed] = useState(1000)
  
  const [isRunning, setRunning] = useState(false)
  const runningRef = useRef(isRunning) // runningRef == "Ref CONTAINER"
  runningRef.current = isRunning

  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ]

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

  // 3 - Start Simulation
  const toggleSimulation = () => {
    // 1 - Update Running State
    setRunning(!isRunning)

    // 2 - State not changing fast enough?
    runningRef.current = true

    // 3 - Call Simulation Function 
    runSimulation()
  }

  // 4 - Run Simulation
  // Function is only being made ONCE (not made and passed on every render)
  // BUT still trying to access 'isRunning' variable that could update at anytime
  // -- useRef()
  const runSimulation = useCallback(() => {
    // Check if we are currently running
    // This would be the "Base Case" if we are thining recursivly => our function escape
    if (!runningRef.current) {
      return; 
    }

    // *** SIMULATION LOGIC ***
    runIteration()

    // SetTimeout
    setTimeout(runSimulation, simSpeed)  
  }, [])

  // 5 - Run Iteration
  const runIteration = () => {
    setGrid(g => {
      return produce(g, gridCopy => {
        // console.log(size)
        for (let i = 0; i < size; i++) {
          for (let k = 0; k < size; k++) {
            let neighbors = countNeighbors(g, i, k)
            if (neighbors > 0) {
              // console.log(`runIteration => cell [${i},${k}] has ${neighbors} neighbors`)
            }

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1
            }
          }
        }
      })
    })
  }

  // 6 - Count Neighbors
  const countNeighbors = (grid, colIdx, rowIdx) => {
    let result = 0

    operations.forEach(([x, y]) => {
      const newColIdx = colIdx + x
      const newRowIdx = rowIdx + y
      
      if (newColIdx >= 0 && newColIdx < size && newRowIdx >= 0 && newRowIdx < size) {
        result += grid[newColIdx][newRowIdx]
      }
    })

    // RETURN
    return result
  }

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <AppStateForm 
        clearGrid={clearGrid}
        currentSize={size}
        setSize={setSize}
        isRunning={isRunning}
        toggleSimulation={toggleSimulation}
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
    </div>
  );
}

// EXPORTS
export default App;
