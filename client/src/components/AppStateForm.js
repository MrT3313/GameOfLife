// IMPORTS
import React, {useState} from 'react'

// MAIN
function AppStateForm(props) {
    const { 
        randomize, clear,
        currentSize, setSize,
        isRunning,
        toggleSimulation, 
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
                style={{width:"50px"}}
            />
            <button>Update Grid</button>
        </form>
        <button
            onClick={clear}
        >
            Clear Grid
        </button>
        <button
            onClick={randomize}
        >
            Randomize Grid
        </button>
        <button
            onClick={toggleSimulation}
        >
            {isRunning ? 'Stop' : 'Start'}
        </button>
        </>
    )
}

// EXPORTS
export default AppStateForm