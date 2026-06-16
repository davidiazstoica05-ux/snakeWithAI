# Snake Game (Responsive)

A classic Snake game clone built purely with standard web technologies (Vanilla JavaScript, HTML5 Canvas, and CSS3). The game features a mathematical graphic engine designed to automatically adapt the grid and game size to any screen resolution.

## Features

- **100% Responsive Canvas:** The board dynamically calculates the window's width and height (`window.innerWidth` / `innerHeight`), always maintaining a logical 20x20 grid.
- **Scoring System:** Tracks the current score and the highest score (High Score) of the session.
- **Illogical collision prevention:** Filtered controls to prevent the snake from turning 180 degrees on itself instantly.
- **Clean HUD Interface:** Minimalist high-contrast dark design inspired by modern interfaces.

## Technologies Used

- **HTML5** (Structure and `<canvas>` tag)
- **CSS3** (Flexbox, environment variables, and responsive design)
- **JavaScript (ES6+)** (Collision logic, game loop with `setInterval`, and DOM manipulation)

## How to Play

1. Clone this repository or download the files.
2. Open the `index.html` file in any modern web browser.
3. Use the **Arrow keys** (Up, Down, Left, Right) to move the snake.
4. Eat the red apples to grow and earn points.
5. Avoid crashing into the screen borders or your own body.
6. If you lose, press **'Enter'** or the **'Spacebar'** to restart the game.

## Artificial Intelligence (Pathfinding & Survival)

This version features an autonomous AI engine capable of playing the game by evaluating the board in real-time. The decision-making architecture is divided into three core rules:

- **Plan A (The Hunter):** The primary pathfinding relies on the **Breadth-First Search (BFS)** algorithm. As illustrated in resources like *Grokking Algorithms*, BFS systematically floods the grid level by level. This mathematical approach guarantees finding the absolute shortest path to the apple.
- **Plan B (Survival Mode):** If the path to the apple is blocked by the snake's own body, the AI triggers a survival mechanism to chase its own tail. Instead of writing redundant pathfinding logic, this is handled through **recursion**. The engine simply calls itself with the tail as the new target, keeping the codebase clean, modular, and protected by a base case to prevent stack overflows.
- **Plan C (Panic Mode):** In extreme scenarios where both the apple and the tail are unreachable, the AI resorts to the **Manhattan Distance** formula. By calculating the distance of all valid neighboring tiles to the food, the snake intentionally selects the move that takes it *furthest* away from the apple. This forces the snake to take the longest possible detour, effectively buying time until a safe path opens up.

## Future Improvements (Roadmap)

This project is constantly evolving. Upcoming features include:

- A versus mode where one generative AI model controls the snake and another generative AI model places the fruits.
