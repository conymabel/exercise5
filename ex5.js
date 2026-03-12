// Jiménez Jiménez Cony Mabel ID: 4963 - TDSM4A
// Exercise 5: Matrix Function

/*
This program defines a function called printMatrix that receives a number n.
The function uses two nested loops to generate an n x n matrix. Each position
prints the coordinates of the element in the format [row,column]. Finally,
the function prints each row using console.log.
*/

function printMatrix(n) {

    for (let i = 0; i < n; i++) { // Outer loop for rows
        let row = ""; // Initialize an empty string to build the current row

        for (let j = 0; j < n; j++) { // Inner loop for columns
            row += `[${i},${j}]`; // Append the coordinates of the current element to the row string
        }

        console.log(row); // Print the completed row to the console
    }

}

// Example
printMatrix(2); // Send n = 2 to generate a 2x2 matrix