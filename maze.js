// a recursive function that will help you find a possible path through the maze.

let smallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeSolver = (maze) => {
    let mazeX = maze.length;
    let mazeY = maze[0].length;
    let solution = new Array(mazeX);
    for (i = 0; i < mazeX; i++) {
        solution[i] = new Array(mazeY);
        for (j = 0; j < mazeY; j++) {
            solution[i][j] = '-';
        }
    }
    return solveMaze(maze, 0, 0, solution);
};

const solveMaze = (maze, x, y, sol, path = '') => {
    if (x === maze.length - 1 && y === maze[0].length - 1) {
        sol[x][y] = 1;
        console.log(path);
        console.log(sol);
        return path;
    }

    if (clearPath(maze, x, y)) {
        sol[x][y] = 1;

        if (solveMaze(maze, x + 1, y, sol, path + 'D')) {
            return true;
        } else if (solveMaze(maze, x, y + 1, sol, path + 'R')) {
            return true;
        } else if (solveMaze(maze, x - 1, y, sol, path + 'U')) {
            return true;
        } else if (solveMaze(maze, x, y - 1, sol, path + 'L')) {
            return true;
        } else {
            sol[x][y] = 0;
            return false;
        }
    }

    return false;
};

const clearPath = (maze, x, y) => {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] !== '*') ? true : false
};

console.log(mazeSolver(bigMaze));