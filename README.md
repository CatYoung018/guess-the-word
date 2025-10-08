# 😲 Guess The Word Game 

**A pure JavaScript implementation of a word guessing game.**

[![GitHub Pages Status](https://github.com/catyoung018/guess-the-word/actions/workflows/pages/pages-build-deployment/badge.svg)](https://catyoung018.github.io/guess-the-word/)

---

## 🚀 Live Demo & Visual Showcase

**▶️ Play the Game Here:** [https://catyoung018.github.io/guess-the-word/](https://catyoung018.github.io/guess-the-word/)

![A short animated demo of the Guess the Word game in action](assets/game-demo.gif) 
---

## 💡 Project Goal & Technical Focus

This project was developed to solidify my foundational understanding of core front-end principles.

The primary goals were:
* **Mastering the DOM:** Gaining fluid control over HTML elements for dynamic UI updates without relying on a framework.
* **State Management in Vanilla JS:** Implementing a clear, centralized system to track the current word, guessed letters, remaining guesses, and game status.
* **Event Delegation:** Efficiently handling keyboard and on-screen button inputs using a single event listener.
* **Code Structure:** Practicing modern, modular JavaScript structuring for scalability and readability.

## 🎯 Key Features

* **Responsive Layout:** Fully functional and accessible across desktop and mobile screen sizes.
* **Input Validation:** Notifies the user if they attempt to enter a non-letter or a letter they have already guessed.
* **Dynamic UI:** The letter display, remaining attempts, and game messages update instantly with every guess.
* **Win/Loss Condition:** Clear notification and visual change when the player solves the word or runs out of attempts.

## 💻 Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Languages** | HTML5, CSS3, **Vanilla JavaScript** |
| **Deployment** | GitHub Pages |
| **Tools** | Git, V**S Code** |

## 📈 Lessons Learned & Future Plans

Working on this project was a fantastic opportunity to see how game logic translates into code. The biggest takeaways were:

1.  **Immutability:** I initially ran into bugs because I was directly modifying game variables. I learned to use spread syntax (`...`) and object copying to create new states, which made the logic much more predictable.
2.  **Code Review Value:** Conducting a code review highlighted areas where my DOM manipulation could be consolidated, reducing repetitive code.
3.  **Refactoring for Scale:** If I were to build this out further (e.g., add categories, scorekeeping), the next major step would be to organize the game logic into a **Game Class** for better separation of concerns and easier testing.

---
