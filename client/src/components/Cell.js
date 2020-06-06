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
                width: '20px',
                height: '20px',
            }}
            onClick={() => toggleCellStatus(i,k)}
        />
    )
}

// EXPORTS
export default Cell