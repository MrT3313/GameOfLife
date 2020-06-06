// IMPORTS
import React, {useState} from 'react'

// MAIN
function AppStateForm(props) {
    const { 
        clearGrid,
        currentSize, setSize,
    } = props

    // State
    const [newSize, setNewSize] = useState(currentSize)

    // Methods
    const submitHelper = e => {
        e.preventDefault()
        setSize(newSize)
    }

    return (
        <>
        <form 
            className="resizeGrid"
            onSubmit={submitHelper}
        >
            <label>Grid Size: </label>
            <input
                type="number" min="0" step="1"
                placeholder={currentSize}
                value={newSize}
                onChange={e => setNewSize(parseInt(e.target.value))}
            />
            <button>Update Grid</button>
        </form>
        <button
            onClick={clearGrid}
        >
            Clear Grid
        </button>
        </>
    )
}

// EXPORTS
export default AppStateForm