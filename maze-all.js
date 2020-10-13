// use the maze in maze.js and modify your solution so it finds all the possible exit paths through the maze. 

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

const findAllPaths = (maze) => {
    const currentPath = [];
    const visited = new Set();
    const solutions = [];

    const check = (x, y) => {
        // base case
        if (maze[x][y] === 'e') {
            solutions.push([...currentPath]);
            return;
        };

        // track x and y values visited before to avoid repeating the same path
        visited.add(x + ';' + y);

        const directions = {
            'U': [x - 1, y], // up
      		'D': [x + 1, y], // down
      		'R': [x, y + 1], // right
      		'L': [x, y - 1]  // left
        };

        // for...in statement to iterate over all enumerable properties of the directions object
        for (const direction in directions) {
            const newX = directions[direction][0];
            const newY = directions[direction][1];

            if (clearPath(maze, newX, newY) && !visited.has(newX + ';' + newY)) {
                currentPath.push(direction);
                check(newX, newY);
                currentPath.pop();
            }
        }
        visited.delete(x + ';' + y);
    }

    check(0, 0);
    return solutions.map(s => s.join(''));
};

const clearPath = (maze, x, y) => {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] !== '*') ? true : false
};

console.log(findAllPaths(bigMaze));