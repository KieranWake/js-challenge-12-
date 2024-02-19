function numberSquares(n) {
    // Calculate the total number of squares in the grid
    let totalSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    
    // Add the squares formed by the rows and columns
    let gridSquares = Math.pow(n, 2);
    
    // Add the squares formed by the additional squares added from the previous grid size
    let additionalSquares = totalSquares - gridSquares;
    
    // Return the total number of squares
    return gridSquares + additionalSquares;
}

// Example usage:
console.log(numberSquares(2)); // Output: 5
console.log(numberSquares(4)); // Output: 30
console.log(numberSquares(5)); // Output: 55
