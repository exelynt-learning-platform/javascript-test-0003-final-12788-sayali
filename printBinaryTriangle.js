/**
 * JavaScript Assessment: Alternating Binary Triangle (Fixed)
 */

function printBinaryTriangle(rows) {
    // Outer loop for each row (i)
    for (let i = 1; i <= rows; i++) {
        // Corrected variable name: rowOutput (no space)
        let rowOutput = "";

        // Inner loop for each column (j)
        for (let j = 1; j <= i; j++) {
            // Logic: If (row + col) is even, print 1. Otherwise, 0.
            if ((i + j) % 2 === 0) {
                rowOutput += "1 ";
            } else {
                rowOutput += "0 ";
            }
        }

        // Print the completed row
        console.log(rowOutput.trim());
    }
}

// Execute the function
printBinaryTriangle(6);