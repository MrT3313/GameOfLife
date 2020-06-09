// IMPORTS
import React,
  { 
    useState, useEffect, 
    useCallback, useRef,
  } from 'react';
import produce from 'immer'

// FUNCTIONS
import { empty2Darray } from './utils/empty2Darray.js'
import { randomGrid } from './utils/randomGrid.js'
import { countNeighbors } from './utils/countNeighbors.js'

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

  // UseEffect => Game Setup
  useEffect(() => {
  console.log('<App /> UseEffect Triggered')

  randomize()
  
  }, [size])

  // Methods
  // 1 - Clear Grid
  const clearGrid = () => {
    // Make Empty Grid
    let emptyGrid = empty2Darray(size)

    // Fill Grid
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        emptyGrid[i][j] = 0
      }
    }

    // Update State
    setGrid(emptyGrid)
  }

  // 2 - Randomize Grid
  const randomize = () => {
    // Make Empty Grid
    let emptyGrid = empty2Darray(size)

    // Randomize Grid
    setGrid(randomGrid(emptyGrid, size))
  }

  // 3 - Toggle Cell State
  const toggleCellStatus = (i,k) => {
    // Immutable State Update => immer 
    const newGrid = produce(grid, gridCopy => {
      gridCopy[i][k] = grid[i][k] === 0 ? 1 : 0
    })
    // Update State
    setGrid(newGrid)
  }

  // 4 - Start Simulation
  const toggleSimulation = () => {
    // 1 - Update Running State
    setRunning(!isRunning)

    // 2 - State not changing fast enough?
    runningRef.current = true

    // 3 - Call Simulation Function 
    runSimulation()
  }

  // 5 - Run Simulation
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

  // 6 - Iteration
  const runIteration = () => {
    setGrid(g => {
      return produce(g, gridCopy => {
        // console.log(size)
        for (let i = 0; i < size; i++) {
          for (let k = 0; k < size; k++) {
            let neighbors = countNeighbors(g, i, k, size)
            if (neighbors > 0) {
              console.log(`runIteration => cell [${i},${k}] has ${neighbors} neighbors`)
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

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <AppStateForm 
      randomize={randomize}
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
