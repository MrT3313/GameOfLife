// IMPORTS
import React, {useState} from 'react'

// STYLES
import '../styles/appStateForm.css'

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
        <div className="CONTAINER_appStateForm">
            <div className="controls">

                {/* TODO: GRID RESIZING BUG 
                    - grid can update and triggers new randomization
                    - size state does not seem to be getting to simulation function 
                        - does this need a useRef like the "running" state since the function is only being made once?
                */}
                {/* <form className="updateGrid"
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
                </form> */}
                <form className="generationZeroStates">
                    <button onClick={e => clear(e)}>
                        Clear Grid
                    </button>
                    <button onClick={e => randomize(e)}>
                        Randomize Grid
                    </button>
                </form>
                <button 
                    className={isRunning ? "simToggle simOFF" : "simToggle simON"}
                    onClick={toggleSimulation}
                >
                    {isRunning ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    )
}

// EXPORTS
export default AppStateForm