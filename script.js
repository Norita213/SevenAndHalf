// Deck Configuration
const suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
const values = [
    { name: "Ace", value: 1 },
    { name: "Two", value: 2 },
    { name: "Three", value: 3 },
    { name: "Four", value: 4 },
    { name: "Five", value: 5 },
    { name: "Six", value: 6 },
    { name: "Seven", value: 7 },
    { name: "Jack", value: 0.5 },
    { name: "Queen", value: 0.5 },
    { name: "King", value: 0.5 },
];

let deck = [];
let player = { name: "", money: 0, score: 0, hand: [] };
let dealer = { score: 0, hand: [] };
let bet = 0;

// Deck Initialization
function initializeDeck() {
    deck = [];
    suits.forEach(suit => {
        values.forEach(card => {
            deck.push({ ...card, suit });
        });
    });
    shuffleDeck(deck);
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function drawCard() {
    return deck.pop();
}

function calculateScore(hand) {
    return hand.reduce((sum, card) => sum + card.value, 0);
}

function updateScores() {
    player.score = calculateScore(player.hand);
    dealer.score = calculateScore(dealer.hand);
    document.getElementById("player-score").textContent = player.score.toFixed(1);
    document.getElementById("dealer-score").textContent = dealer.score.toFixed(1);
}

function renderCard(card, containerId) {
    const cardImagePath = "./assets/card-images/";
    const container = document.getElementById(containerId);
    const suit = card.suit.toLowerCase();
    const img = document.createElement("img");
    img.src = `${cardImagePath}${card.name}_of_${suit}.png`;
    img.alt = `${card.name} of ${card.suit}`;
    img.classList.add("card");
    container.appendChild(img);
}

// Start Game
document.getElementById("start-game").addEventListener("click", () => {
    player.name = document.getElementById("player-name").value;
    player.money = parseInt(document.getElementById("initial-money").value);
    if (!player.name || player.money <= 0) {
        alert("Please enter a valid name and starting money!");
        return;
    }
    document.getElementById("player-info").classList.add("hidden");
    document.getElementById("game-board").classList.remove("hidden");
    initializeDeck();
});

// Place Bet
document.getElementById("place-bet").addEventListener("click", () => {
    bet = parseInt(document.getElementById("bet-amount").value);
    if (bet > player.money || bet <= 0) {
        alert("You cannot bet more than you have or an invalid amount!");
        return;
    }

    // Disable the Place Bet button until the next round starts
    document.getElementById("place-bet").disabled = true;

    // Reset player and dealer hands
    player.hand = [drawCard()];
    dealer.hand = [drawCard()];
    updateScores();

    // Display the first cards
    renderCard(player.hand[0], "player-cards");
    renderCard(dealer.hand[0], "dealer-cards");

    // Enable game buttons
    document.getElementById("hit").disabled = false;
    document.getElementById("stand").disabled = false;

    console.log(`Bet placed: ${bet}. Remaining money: ${player.money}`);
});

// Draw Card
document.getElementById("hit").addEventListener("click", () => {
    const card = drawCard();
    player.hand.push(card);
    renderCard(card, "player-cards");
    updateScores();
    if (player.score > 7.5) {
        endRound(false);
    }
});

// Stand
document.getElementById("stand").addEventListener("click", () => {
    while (dealer.score < player.score && dealer.score <= 7.5) {
        const card = drawCard();
        dealer.hand.push(card);
        renderCard(card, "dealer-cards");
        updateScores();
    }
    endRound(dealer.score <= 7.5 && dealer.score >= player.score);
});

function endRound(playerWins) {
    // Determine the winner based on the game rules
    if (player.score > 7.5) {
        // The player went over 7.5
        playerWins = false;
    } else if (dealer.score > 7.5) {
        // The dealer went over 7.5, player wins
        playerWins = true;
    } else {
        // If no one exceeds 7.5, the highest score wins
        playerWins = player.score > dealer.score;
    }

    // Update player's money
    const message = playerWins ? "You won!" : "You lost!";
    player.money += playerWins ? bet : -bet;

    // Display the result and disable buttons
    document.getElementById("result-message").textContent = message;
    document.getElementById("game-result").classList.remove("hidden");
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;

    // Disable Place Bet button until new round is started
    document.getElementById("place-bet").disabled = true;

    console.log(`Result: ${message}`);
}

// New Round
document.getElementById("new-round").addEventListener("click", () => {
    initializeDeck();
    player.hand = [];
    dealer.hand = [];
    updateScores();
    document.getElementById("player-cards").innerHTML = "";
    document.getElementById("dealer-cards").innerHTML = "";
    document.getElementById("game-result").classList.add("hidden");

    // Re-enable the Place Bet button for the new round
    document.getElementById("place-bet").disabled = false;

    console.log("New round started.");
});

// End Game
document.getElementById("end-game").addEventListener("click", () => {
    alert(`Thanks for playing, ${player.name}! You have ${player.money} remaining.`);
    // Reset the game
    resetGame();
});

// Reset Game
function resetGame() {
    // Reset initial state
    player = { name: "", money: 0, score: 0, hand: [] };
    dealer = { score: 0, hand: [] };
    bet = 0;

    // Hide game elements
    document.getElementById("game-board").classList.add("hidden");
    document.getElementById("player-info").classList.remove("hidden");

    // Clear boards
    document.getElementById("player-cards").innerHTML = "";
    document.getElementById("dealer-cards").innerHTML = "";
    document.getElementById("result-message").textContent = "";

    // Reset Place Bet button
    document.getElementById("place-bet").disabled = false;

    console.log("Game reset.");
}