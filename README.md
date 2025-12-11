# 😲 Guess The Word Game

**A pure JavaScript implementation of a word guessing game.**

![JavaScript](https://img.shields.io/badge/JavaScript-59.9%25-yellow)
![CSS](https://img.shields.io/badge/CSS-30.6%25-blue)
![HTML](https://img.shields.io/badge/HTML-9.5%25-orange)
[![GitHub Pages Status](https://github.com/catyoung018/guess-the-word/actions/workflows/pages/pages-build-deployment/badge.svg)](https://catyoung018.github.io/guess-the-word/)

---

## 🚀 Live Demo & Visual Showcase

**▶️ Play the Game Here:** https://catyoung018.github.io/guess-the-word/

### 🎮 Game Preview

<div align="center">
  <img width="800" alt="Guess the Word Gameplay Demo" src="https://github.com/user-attachments/assets/b671975a-f547-40ed-a429-ebe9988f3f87" />
  <p><em>Watch the game respond to your guesses in real-time</em></p>
</div>

### 🎬 See It In Action

<div align="center">
  <img width="800" alt="Guess the Word Gameplay Demo" src="https://github.com/user-attachments/assets/1d4218ed-2025-468d-9efa-0f34519bed7c" />
  <p><em>Watch the game respond to your guesses in real-time</em></p>
</div>

---

## 🎲 How to Play

1. A random word is selected from the word list
2. You have **8 attempts** to guess the word
3. Enter one letter at a time using your keyboard or the on-screen buttons
4. ✅ Correct letters appear in their positions
5. ❌ Incorrect guesses reduce your remaining attempts
6. Win by guessing all letters before running out of attempts!

---

## 💡 Project Goal & Technical Focus

This project was developed to solidify my foundational understanding of core front-end principles.

The primary goals were:

- **Mastering the DOM:** Gaining fluid control over HTML elements for dynamic UI updates without relying on a framework.
- **State Management in Vanilla JS:** Implementing a clear, centralized system to track the current word, guessed letters, remaining guesses, and game status.
- **Event Delegation:** Efficiently handling keyboard and on-screen button inputs using a single event listener.
- **Code Structure:** Practicing modern, modular JavaScript structuring for scalability and readability.

---

## 🎯 Key Features

- **Responsive Layout:** Fully functional and accessible across desktop and mobile screen sizes.
- **Input Validation:** Notifies the user if they attempt to enter a non-letter or a letter they have already guessed.
- **Dynamic UI:** The letter display, remaining attempts, and game messages update instantly with every guess.
- **Win/Loss Condition:** Clear notification and visual change when the player solves the word or runs out of attempts.

---

## 💻 Tech Stack

| Category | Technologies Used |
| --- | --- |
| **Languages** | HTML5, CSS3, **Vanilla JavaScript** |
| **Deployment** | GitHub Pages |
| **Tools** | Git, **VS Code** |

---

## 🧠 JavaScript Concepts Demonstrated

This project showcases proficiency in:

- **DOM Manipulation** - Dynamic updates to HTML elements without a framework
- **Event Handling** - Keyboard events and button click listeners
- **State Management** - Tracking game state in vanilla JavaScript
- **Array Methods** - `.includes()`, `.split()`, `.join()`, `.map()`, `.filter()`
- **String Manipulation** - Working with letters and words
- **Conditionals & Logic** - Game flow and win/loss conditions
- **ES6+ Syntax** - Arrow functions, template literals, const/let
- **Input Validation** - Checking for valid letters and preventing duplicates

---

## 💻 Run Locally

Want to try the code yourself?

1. **Clone the repository**
   ```bash
   git clone https://github.com/CatYoung018/guess-the-word.git
   cd guess-the-word
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using VS Code Live Server extension
   Right-click index.html → Open with Live Server
   ```

3. **Start playing!**

---

## 📁 Project Structure

```
guess-the-word/
├── index.html          # Main game page
├── css/
│   └── styles.css     # Game styling
├── js/
│   └── script.js      # Game logic
└── img/               # Game assets
```

---

## 📈 Lessons Learned & Future Plans

Working on this project was a fantastic opportunity to see how game logic translates into code. The biggest takeaways were:

1. **Immutability:** I initially ran into bugs because I was directly modifying game variables. I learned to use spread syntax (`...`) and object copying to create new states, which made the logic much more predictable.
2. **Code Review Value:** Conducting a code review highlighted areas where my DOM manipulation could be consolidated, reducing repetitive code.
3. **Refactoring for Scale:** If I were to build this out further (e.g., add categories, scorekeeping), the next major step would be to organize the game logic into a **Game Class** for better separation of concerns and easier testing.

### 🔮 Future Enhancements

Ideas for v2.0:
- [ ] Add difficulty levels (easy/medium/hard words)
- [ ] Include hint system
- [ ] Add score tracking and high scores
- [ ] Implement word categories (animals, food, tech, etc.)
- [ ] Add sound effects for correct/incorrect guesses
- [ ] Create multiplayer mode
- [ ] Add timer for speed challenges
- [ ] Include daily word challenge

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the Guess the Word game:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- **Skillcrush** - This project was built as part of their comprehensive front-end development curriculum with guidance on JavaScript best practices and game logic
- Built with vanilla JavaScript to demonstrate core programming fundamentals

---

## 📧 Contact

**Cat Young**  
- GitHub: [@CatYoung018](https://github.com/CatYoung018)
- LinkedIn: [Catrillia Young](https://www.linkedin.com/in/catrillia-young18/)
- Portfolio: [catyoung018.github.io/Cat-Young-Dev](https://catyoung018.github.io/Cat-Young-Dev/)

---

## 📝 License

This project is open source and available for educational purposes.

---

<div align="center">

**🎮 Happy Guessing! 🎮**

⭐ Star this repo if you enjoyed the game!

</div>
