export function empty2Darray(cols, rows) {
    let array = new Array(cols);

    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows)
    }

    // RETURN
    return array
}