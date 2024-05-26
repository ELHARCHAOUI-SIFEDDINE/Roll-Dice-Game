# 🎲 Roll Dice Game

A fun and interactive web-based dice game where players compete to reach a target score first. The game is built using HTML, CSS (Tailwind CSS), and JavaScript, providing an engaging user experience with dynamic styling and seamless functionality.

## 🕹️ Demo

Check out the live demo [here](https://your-live-demo-url.com).

## 🚀 Features

- **Two-Player Mode**: Players take turns to roll a dice and accumulate points.
- **Hold Feature**: Players can choose to hold their current score and pass the turn to the next player.
- **Winning Condition**: The first player to reach or exceed a score of 20 wins.
- **Dynamic Styling**: The game interface changes dynamically, including background colors and a congratulatory message when a player wins.

## 🛠️ Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript

## 📜 How to Play

1. **Roll the Dice**: Click the "Roll Dice" button to roll the dice. The number rolled will be added to the current score.
2. **Hold**: Click the "Hold" button to save the current score to the player's total score and switch turns.
3. **Winning**: The first player to reach a total score of 20 wins. The game will display a congratulatory message and change the background color.

## 📸 Screenshots

![Game Interface](./screenshots/game-interface.png)

## 🛴 Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ELHARCHAOUI-SIFEDDINE/Roll-Dice.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd Roll-Dice
    ```

3. **Open `index.html` in your preferred web browser**.

## 🗂️ Files

- **index.html**: The main HTML file containing the structure of the game.
- **style.css**: Contains custom CSS styles for the game.
- **script.js**: Contains the game logic implemented in JavaScript.

## 🧩 Code Overview

### HTML Structure

The HTML structure consists of the following main sections:
- **Player Scores**: Displays the current and recent scores for each player.
- **Dice Display**: Shows the dice image based on the rolled number.
- **Buttons**: Includes buttons for rolling the dice, holding the score, and starting a new game.

### JavaScript Logic

The JavaScript logic handles:
- **Dice Roll**: Generates a random number between 1 and 6.
- **Score Update**: Updates the current and total scores based on the dice roll.
- **Player Switch**: Switches the active player when the dice rolls a 1 or the hold button is pressed.
- **Winning Condition**: Checks if a player's score reaches or exceeds 20, displays a congratulatory message, and changes the background color.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## 📜 License

This project is licensed under the MIT License.

## 📧 Contact

For any inquiries or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
