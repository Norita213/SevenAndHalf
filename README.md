# Seven and a Half

Seven and a Half is a card game where the objective is to beat the dealer without exceeding a score of 7.5. This project is built using **HTML**, **CSS**, and **JavaScript** with an emphasis on interactivity, responsiveness, and a polished user interface.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [How to Play](#how-to-play)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Run Locally](#run-locally)

---

## Features
1. **Interactive Gameplay**:
   - Dynamic card drawing and score calculation.
   - Dealer logic to simulate a real game.

2. **Custom Design**:
   - Stylish card designs with animations.
   - Responsive layout optimized for mobile devices.

3. **User Inputs**:
   - Enter player name and starting money.
   - Place bets and compete against the dealer.

4. **Game Logic**:
   - Supports rules for Seven and a Half.
   - Determines winners and updates player money after each round.

---

## Technologies Used
- **HTML**: Provides the structure for the game.
- **CSS**: Handles the visual styling and responsiveness.
- **JavaScript**: Implements game logic, interactivity, and DOM manipulation.
- **Google Fonts**: Adds the `Lora` font for a polished look.

---

## Setup
1. Clone or download the repository.
2. Ensure the files are structured as follows:

SevenAndAHalf/ 
├── index.html 
├── styles.css 
├── script.js 
├── assets/ 
    ├── card-images/ (Images for the cards)

3. Open the `index.html` file in your preferred browser to start playing.

---

## How to Play
1. **Starting the Game**:
- Enter your name and the starting money amount.
- Click the **Start Game** button.

2. **Placing Bets**:
- Input the bet amount and click **Place Bet**.

3. **Drawing Cards**:
- Use the **Draw Card** button to draw cards.
- Click **Stand** when you want to stop drawing.

4. **Winning the Round**:
- Try to get as close as possible to 7.5 without exceeding it.
- If the dealer exceeds 7.5 or has a lower score, you win!

5. **Ending the Game**:
- Click **End Game** to reset the game.

---

## Folder Structure
SevenAndAHalf/ 
├── index.html # Main HTML file 
├── styles.css # Styling and animations 
├── script.js # Game logic 
├── assets/ 
        ├── card-images/ # Images for cards (e.g., Ace_of_spades.png) 

---

## Notes on Card Images
- Card images should follow the naming convention:  
  `[Card Name]_of_[Suit].png`.  
  For example:
  - `Ace_of_spades.png`
  - `King_of_diamonds.png`
  - `Seven_of_clubs.png`

- Place all card images inside the `assets/card-images/` directory.

---

## Future Enhancements
- **Multiplayer Mode**:
  - Add support for multiple players.
- **Scoreboard**:
  - Display a leaderboard for high scores.
- **Sound Effects**:
  - Add audio for drawing cards and winning/losing rounds.
- **Visual Improvements**:
  - Add card flip animations and improved transitions.

---

## Run Locally
Open `index.html` in your browser.

## Author
This project was developed by **[Nour Boudad and Lila Landa]**.  
Feel free to share feedback or suggestions!

---