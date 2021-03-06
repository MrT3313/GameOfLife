// IMPORTS
import React,
  { 
    useState, useEffect, 
    useCallback, useRef,
  } from 'react';
import produce from 'immer'

// FUNCTIONS
import { empty2Dgrid } from './utils/empty2Dgrid.js'
import { clearGrid } from './utils/clearGrid.js'
import runIteration from './utils/runIteration.js'
import randomize from './utils/randomize.js'

// COMPONENTS
import AppStateForm from './components/AppStateForm.js'
import Cell from './components/Cell.js'

// STYLES
import './styles/index.css'
import './styles/app.css'

// __MAIN__
function App() {
  // STATE
  const [size, setSize] = useState(30)
  const [grid, setGrid] = useState([])
  const [simSpeed] = useState(500)
  
  const [isRunning, setRunning] = useState(false)
  const runningRef = useRef(isRunning) // runningRef == "Ref CONTAINER"
  runningRef.current = isRunning

  // USE EFFECT
  useEffect(() => {
    randomize(size, setGrid)
  }, [size])

  // METHODS
  // - 1 - Clear Grid
  const clear = (e) => {
    e.preventDefault()
    setGrid(clearGrid(empty2Dgrid(size), size))
  }

  // - 2 - Toggle Cell State
  const toggleCellStatus = (i,k) => {
    // Immutable State Update => immer 
    const newGrid = produce(grid, gridCopy => {
      gridCopy[i][k] = grid[i][k] === 0 ? 1 : 0
    })
    // Update State
    setGrid(newGrid)
  }

  // - 4 - Start Simulation
  const toggleSimulation = () => {
    // - A - Update Running State
    setRunning(!isRunning)

    // - B - State not changing fast enough? ==> state update 'race condition' 
    runningRef.current = true

    // - C - Call Simulation Function 
    runSimulation()
  }

  // - 5 - Run Simulation
  // Function is only being made ONCE (not made and passed on every render)
  // BUT still trying to access 'isRunning' variable that could update at anytime
  // -- useRef()
  const runSimulation = useCallback(() => {
    // - A - Check if we are currently running
    // This would be the "Base Case" if we are thining recursivly => our function escape
    if (!runningRef.current) {
      return; 
    }

    // - B - SIMULATION LOGIC ***
    runIteration(size, setGrid)

    // - C - SetTimeout
    setTimeout(runSimulation, simSpeed)  
  }, [size, simSpeed])

  return (
    <div className="App">
      <h1>Conway's Game Of Life</h1>
      <div className="Game">
        <div
          className="gridContainer"
          style={{
            display: `grid`,
            gridTemplateColumns:  `repeat(${size}, 10px)`
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
          })}
        </div>
        <AppStateForm 
          setGrid={setGrid}
          randomize={randomize}
          clear={clear}
          currentSize={size}
          setSize={setSize}
          isRunning={isRunning}
          toggleSimulation={toggleSimulation}
        />
      </div>
    </div>
  );
}

// EXPORTS
export default App;
