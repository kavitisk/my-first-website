const GRID_SIZE = 21;

const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
}

isOutofBounds = (post) => {
    return post.x < 1 || post.x > GRID_SIZE || post.y < 1 || post.y > GRID_SIZE;
}