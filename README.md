# Conway's Game of Life

"The Game of Life, also known simply as Life, is a `cellular automation` devised by the British mathematician John Horton Conway in 1970. It is a `zero-player game`, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is `Turing complete` and can simulata a universal constructor or any other Turing machine."  
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
2. The Coding Train - Game of life coding challenge: [YouTube Video](https://www.youtube.com/watch?v=FWSR_7kZuYg)


3. Lambda -- Rust Cellular Automata [YouTube Video](https://www.youtube.com/watch?v=U9ONS5XnqM8&feature=youtu.be)
4. Lambda -- Intro to Web Assembly [YouTube Video](https://www.youtube.com/watch?v=ga8fYRLH7ys&feature=youtu.be)
5. Lambda -- Conways Game of Life [YouTube Video](https://www.youtube.com/watch?v=ryK_HpS_cwY&feature=youtu.be)
--- 

## Implementation

1. Grid => 2D Array

    ```javascript
        grid[2][3]
             ^  ^
             X  Y 
    ```
2. Cell State

    `0` = Dead  
    `1` = Live

## Steps
1. Build EMPTY Grid 
2. Set Initial State  
    A - Random => Loop through all cells and randomly fill with `0` or `1`  
    B - Pre Defined => Developer created or community built initial configurations    
    C - User Created => starting with all `0's` a user can click to change a cell state before starting the game 

--- 

## Glossary
| Term                | Definition | Link                                                            | 
| ---                 | ---        | ---                                                             | 
| Cellular Automation | A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells        | [Link](https://mathworld.wolfram.com/CellularAutomaton.html)    |
|  Turing Complete    |  A system of data-manipulation rules (such as a computer's instruction set, a programming language, or a cellular automaton) is said to be Turing-complete or computationally universal if it can be used to simulate any Turing machine. This means that this system is able to recognize or decide other data-manipulation rule sets.   | [Link](https://en.wikipedia.org/wiki/Turing_completeness)               |

## Tips
| Title                 | Desc                                                  | 
| ---                   | ---                                                   |
| console.table(grid)   | will show 2D array in easily readable table format    |
 