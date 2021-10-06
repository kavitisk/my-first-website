let food = {x: 5, y: 14};
const EXPANSION_RATE = 1;

const updateFood = () => {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

const drawFood = (gameBoard) => {
        const foodElement = document.createElement("div");
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);
}

const getRandomFoodPosition = () => {
    let randomFoodPosotion = randomGridPosition();
    while(onSnake(randomFoodPosotion)){
        randomFoodPosotion = randomGridPosition;
    }
    return randomFoodPosotion;
}