// IMPORTS
import React from 'react'

// MAIN
function Cell(props) {
    const {status} = props

    return (
        <div
            className="cell"
            style={{
                backgroundColor: status === 0 ? "black" : undefined,
                width: '20px',
                height: '20px',
            }}
        />
    )
}

// EXPORTS
export default Cell