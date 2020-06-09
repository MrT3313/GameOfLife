export function clearGrid(grid, size){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid[i][j] = 0
        }
    }

    // RETURN
    return grid
}