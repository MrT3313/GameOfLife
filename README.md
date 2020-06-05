# Conway's Game of Life

"The Game of Life, also known simply as Life, is a `cellular automaton` devised by the British mathematician John Horton Conway in 1970. It is a `zero-player game`, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is `Turing complete` and can simulate a universal constructor or any other Turing machine."  
        ~[Link](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

--- 

## Game Rules
- "Live" Cell:  

    1. Each cells with < 2 neighbors DIE (underpopulation)
    2. Each cells with 2 or 3 neighbors SURVIVE to next generation
    3. Each cells with > 3 neighbors DIE (overpopulation)

- "Dead" Cell:

    1. A cell with 3 neighbors BECOMES LIVE

## Educational Links
1. John Conway on inventing the Game of Life: [YouTube Video](https://www.youtube.com/watch?v=R9Plq-D1gEk)

--- 

## Implementation

1. Game Rendering => CSS Grid
2. Game State => 2D Array

    ```javascript
        grid[2][3]
             ^  ^
             X  Y 
    ```
3. Cell State

    `0` = Dead  
    `1` = Live

## Steps
1. Build EMPTY Grid 
2. Set Initial State  
    A - Random => Loop through all cells and randomly fill with `0` or `1`  
    B - Pre Defined => Developer created or community built initial configurations    
    C - User Created => starting with all `0's` a user can click to change a cell state before starting the game 
3. Render Initial State (Generation: 0)

--- 

## Glossary
| Term                | Definition | Link                                                            | 
| ---                 | ---        | ---                                                             | 
| Cellular Automation | A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells        | [Link](https://mathworld.wolfram.com/CellularAutomaton.html)    |
|  Turing Complete    |  A system of data-manipulation rules (such as a computer's instruction set, a programming language, or a cellular automaton) is said to be Turing-complete or computationally universal if it can be used to simulate any Turing machine. This means that this system is able to recognize or decide other data-manipulation rule sets.   | [Link](https://en.wikipedia.org/wiki/Turing_completeness)               |

# Versions
<details open>
<summary>0.3.0 - Grid Resizing</summary>

- User can update the size of the intial grid through the `<AppStateForm />` component
- `<AppStateForm />` recieves the following props:
    1. currentSize={ `size` } => current `size` hook state from `<App />`
    2. setSize={ `setSize` } => `size` stateSetter function from `<App />` to be used on `<AppStateForm />` form submission 
</details>
<details>
<summary>0.2.0 - Genration 0</summary>

- Using CSS Grid and the verious `<App />` component hook states to render the appropriate number of columns and rows
- Individually each row and column is made up of rendering individual `<Cell />` components which recieve the following props:  
    1. `key`={ `col`-`row` }
    2. `status`={ `grid[col][row]` }
- `<Cell />` components are individually styled so that a `0` / `dead` status is black and a `1` / `live` status is white.  

- Set Initial State  
    ✅ - Random  
    ❌ - PreDefined  
    ❌ - User Created (onClick interaction)  
</details>

<details>
<summary>0.1.0 - Initial Commit</summary>

- Initial Project Outline / Explanation
- Rendering `Hello World` after cleaning out initial Create React App project structure
</details>
 