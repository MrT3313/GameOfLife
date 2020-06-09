export function randomGrid(grid, size){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid[i][j] = Math.floor(Math.random() * 2)
        }
    }

    // RETURN
    return grid
}