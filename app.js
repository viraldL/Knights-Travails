function Node(position, path) {
    if(position[0] < 0 && position[0] > 7 || position[1] < 0 && position[1] > 7) return null;
    return { position, path }
}

function knightMoves([x,y], [a,b]) {
    let queue = [Node([x,y], [[x,y]])];
    let loc = queue.shift();
    while(loc.position[0] !== a || loc.position[1] !== b) {
        let directions = [
            [loc.position[0] + 2, loc.position[1] + 1],
            [loc.position[0] + 2, loc.position[1] - 1],
            [loc.position[0] - 2, loc.position[1] - 1],
            [loc.position[0] - 2, loc.position[1] + 1],
            [loc.position[0] - 1, loc.position[1] + 2],
            [loc.position[0] - 1, loc.position[1] - 2],
            [loc.position[0] + 1, loc.position[1] - 2],
            [loc.position[0] + 1, loc.position[1] + 2]
        ];
        directions.forEach((direction) => {
            if(direction[0] < 0 || direction[0] > 7 || direction[1] < 0 || direction[1] > 7) {
                return;
            } else {
                let node = Node(direction, loc.path.concat([direction]));
                if (node) {
                    queue.push(node);
                  }
            }
        })
        loc = queue.shift()
    }

    console.log(
        `=> You made it in ${loc.path.length - 1} moves!  Here's your path:`
    );

    loc.path.forEach((move) => {
        console.log(move);
    });
}

knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [7, 7]);