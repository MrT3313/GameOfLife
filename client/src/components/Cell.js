// IMPORTS
import React from 'react'

// MAIN
function Cell(props) {
    const {
        grid,
        i, k,
        toggleCellStatus
    } = props

    return (
        <div
            className="cell"
            style={{
                backgroundColor: grid[i][k] === 0 ? "black" : undefined,
                width: '10px',
                height: '10px',
                // border: '.5px solid black'
            }}
            onClick={() => toggleCellStatus(i,k)}
        />
    )
}

// EXPORTS
export default Cell