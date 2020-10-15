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

let ticks = 1;

const findAllPaths = (maze) => {
    ticks++;
    const currentPath = [];
    const visited = new Set();
    const solutions = [];

    const check = (x, y) => {
        ticks++;
        // base case
        if (maze[x][y] === 'e') {
            ticks++;
            solutions.push([...currentPath]);
            return;
        };

        // track x and y values visited so each path only moves in new direction
        visited.add(x + ';' + y);
        ticks++;

        const directions = {
            'U': [x - 1, y], // up
      		'D': [x + 1, y], // down
      		'R': [x, y + 1], // right
      		'L': [x, y - 1]  // left
        };

        // for...in statement to iterate over all enumerable properties of the directions object
        for (const direction in directions) {
            ticks++;
            const newX = directions[direction][0];
            const newY = directions[direction][1];

            if (clearPath(maze, newX, newY) && !visited.has(newX + ';' + newY)) {
                ticks++;
                currentPath.push(direction);
                check(newX, newY);
                currentPath.pop();
            }
        }
        // clear visited set
        visited.delete(x + ';' + y);
        ticks++;
    }

    check(0, 0);
    ticks++;
    return solutions.map(s => s.join(''));
};

const clearPath = (maze, x, y) => {
    ticks++;
    return (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] !== '*') ? true : false
};

console.log(findAllPaths(smallMaze) + '\nticks: ' + ticks);