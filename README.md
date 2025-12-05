# 🎯 **DartMaster Scoreboard**
### A Modern Scoreboard App for Tactics/Cricket Dart Games  
---

DartMaster Scoreboard is a fully interactive, responsive, and intuitive scoreboard application built specifically for the **Tactics/Cricket dart game variant** and for IPAD/Tablet users only.

This project demonstrates clean front-end engineering practices using **React, TypeScript, Context API, React Router**, structured component logic, and responsive UI/UX design.  
It will also be deployed on **GitHub Pages** so players can try it online.

---

## 🚀 **Features**

---

## 🏠 **Main Menu**

A clean landing interface featuring:

- **Play Game**
- **How to Play**
- **The Dartboard (Guide)**

Structured with smooth navigation powered by **react-router-dom**.

---

## 👥 **Add Players & Game Settings**

On the **Start Game** setup page you can:

- Choose **1–4 players**
- Select the scoring range:
  - **15 → Bull**
  - **12 → Bull**
  - **Custom range (1 → Bull)**

Additional behaviors:

- The **Start Game** button appears only when all fields are valid
- A **Main Page** button lets players return anytime

---

## 🎮 **Scoreboard Gameplay**

Once the game begins:

- Targets from **20 → Bull** display on the left (descending)
- Players appear in columns on the right
- Every scoring cell is clickable

### 📌 **Score Selection Window**

Clicking a score field opens a modal offering:

- `|` = 1 point  
- `||` = 2 points  
- `|||` = 3 points  
- Cancel

The scoreboard updates instantly using:

- Context API shared state  
- Immutable state updates  
- `Record<number, number>` and `Record<number, string>` for dynamic scoring

---

## 🏆 **Automatic Winner Detection**

A player wins when every target in their column reaches **3 (|||)**.

Winner detection logic:

```ts
Object.values(player.numberScores!).every(val => val === 3)
```

When a player wins, a modal offers:

### 1️⃣ **Play Another Round**
- Resets only the scoreboard  
- Keeps:
  - The same players  
  - The same game range  
  - Storing player wins  


---

### 2️⃣ **Play With New Players**
Resets:

- Player names  
- All scoring objects  
- Game configurations  

Starts a **fresh match**.

---

### 3️⃣ **Quit**
- Resets all data  
- Returns to **Main Menu**

---

## ⭐ **Upcoming Feature: Player Point Accumulation**

A future enhancement will include:

- Persistent point tracking
- +1 point for each win
- Light competitive tournament mode

---

## 🧠 **Technical Highlights**

---

## ⚛️ **React**
- Functional components  
- Hooks: `useState`, `useContext`, `useEffect`  
- Context API for global state  
- Clean UI and logic separation  

---

## 🟦 **TypeScript**
Strong typing for:

- `PlayersType`  
- Context structure  
- Component props  
- Scoring objects (`Record<number, number>`)

Prevents undefined values and runtime bugs.

---

## 🧭 **react-router-dom**
Routes:

- `/` — Main Menu  
- `/players` — Player setup  
- `/how-to-play` — Instructions  
- `/the-board` — Dartboard reference 
- `/start-game` — Game board  


---

## 💅 **CSS**
- Custom styling  
- Game-inspired layout  

---

## 📐 **Logic & Architecture**

Includes advanced logic patterns:

- Dynamic rendering with `.map` and `Array.from`
- Safe nested object updates using spread operators
- Winner detection with `every()`
- Key-indexed player scoring

---

## 📂 **Project Structure**

```
src/
 ├── components/        # Reusable UI + logic components
 ├── context/           # Global App Context API
 ├── pages/             # Route-based views
 ├── assets/            # Images, icons, media
 ├── styles/            # CSS modules & global styles
 ├── App.tsx            # Root component with routes
 ├── main.tsx           # App entry point
```

This structure is **scalable**, clean, and follows **industry best practices**.

---

## 📸 **Screenshots**

(Add images here)

### 🏠 Main Menu  
![All text](/assets/images/main-page.png)

### 🎯 The Dart Board
![All text](/assets/images/board-page.png)

### 👥 Add Players  
![All text](/assets/images/add-players.png)

### 🎯 Scoreboard  
![All text](/assets/images/scoreboard-with-setpoint.png)

### 🏆 Winner Popup  
![All text](/assets/images/winner.png)


---

## 🏁 **Running the Project**

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🌐 **Live Demo**

_Add GitHub Pages link here once deployed._

---

## 🤝 **Contributing**

PRs and suggestions welcome!  
You may contribute improvements to:

- Framer Motion animations  
- UI design  
- Performance  
- Game logic refinements  

---

## 📄 **License**

This project is open source under the **MIT License**.
