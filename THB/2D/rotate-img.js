/** 
    You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
    -------------------------------------------------------------
    We want to rotate the positions and then reverse to rotate clockwise.
    loop for i
    loop for j but equal to i -- will allow us to flip positions [i][j] -> flipped -> [j][i] || [0][1] -> [1][0]
        temp store the initial position
        set initial to flipped position
        set flipped to temp

    Once we finish flipping all positions, we want to reverse our position.
    loop through i
    loop through j to half of the length -- we want to prevent going full length which would just offset our reverse
        temp store the inital position
        set inital position to matrix.length-1-j
            *** this will cover any two middle/inner swaps
        set matrix.length-1-j to temp

        T: O(N^2) S: O(1)
**/

var rotate = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][matrix.length-1-j]
            matrix[i][matrix.length-1-j] = temp
        }
    }
    return matrix
};