// FUNCTIONS
import { empty2Dgrid } from './empty2Dgrid.js'
import { randomGrid } from './randomGrid.js'

// __ MAIN FUNCTION __
const randomize = (size, setGrid) => {
    setGrid(randomGrid(empty2Dgrid(size), size))
  }

//EXPORT
export default randomize