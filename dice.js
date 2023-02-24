const diceEl = document.querySelector("#result");
const rollBtn = document.querySelector("#rollBtn");
const circleEl = document.querySelector(".circle");

let isRolling = false;

function toggleHoverClass() {
  circleEl.classList.toggle("hover");
}

function fadeOutDice() {
  let opacity = 1;
  const fadeOutInterval = setInterval(() => {
    diceEl.style.opacity = opacity;
    opacity -= 0.1;
    if (opacity < 0) {
      clearInterval(fadeOutInterval);
      diceEl.style.color = "turquoise";
    }
  }, 50);
}

function fadeInDice() {
  let opacity = 0;
  const fadeInInterval = setInterval(() => {
    diceEl.style.opacity = opacity;
    opacity += 0.1;
    if (opacity > 1) {
      clearInterval(fadeInInterval);
      diceEl.style.color = "black";
    }
  }, 50);
}

rollBtn.addEventListener("click", () => {
  if (isRolling) {
    return;
  }
  isRolling = true;
  rollBtn.disabled = true;
  circleEl.classList.add("rolling");
  toggleHoverClass();
  const rollCount = 10;
  let currentCount = 0;
  const rollInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    fadeOutDice();
    setTimeout(() => {
      diceEl.textContent = randomNumber;
      fadeInDice();
    }, 500);
    currentCount++;
    if (currentCount === rollCount) {
      clearInterval(rollInterval);
      isRolling = false;
      rollBtn.disabled = false;
      circleEl.classList.remove("rolling");
      toggleHoverClass();
    }
  }, 200);
});

circleEl.addEventListener("mouseenter", () => {
  if (!isRolling) {
    circleEl.classList.add("hover");
  }
});

circleEl.addEventListener("mouseleave", () => {
  if (!isRolling) {
    circleEl.classList.remove("hover");
  }
});
