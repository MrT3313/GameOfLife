// IMPORTS
import produce from 'immer'

// FUNCTIONS
import { countNeighbors } from './countNeighbors.js'

// __ MAIN FUNCTION __ 
const runIteration = (size, setGrid) => {
    setGrid(g => {
      return produce(g, gridCopy => {
        // console.log(size)

        // - A - Main Loop
        for (let i = 0; i < size; i++) {
          for (let k = 0; k < size; k++) {
            // - B - Count Neighbors
            let neighbors = countNeighbors(g, i, k, size)
            if (neighbors > 0) {
              // console.log(`runIteration => cell [${i},${k}] has ${neighbors} neighbors`)
            }

            // - C - Core Game Cell Update Logic
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

//EXPORT
export default runIteration