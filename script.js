let btn = document.querySelector(".toggle-btn");
const hexDigits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

btn.addEventListener("click", generateColors);

function randomHex() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }
  return hex;
}

function generateColors() {
  const bars = document.querySelectorAll(".color-bar");

  bars.forEach((bar) => {
    if (bar.dataset.locked === "true") return; 

    let newColor = randomHex();
    bar.style.backgroundColor = newColor;
    bar.dataset.color = newColor; 
  });
}

// ---------------- COPY & LOCK LOGIC ---------------- //

document.querySelectorAll(".color-bar").forEach((bar) => {
  const copyBtn = bar.querySelector(".bx-copy");
  const lockBtn = bar.querySelector(".bx-lock");

  // -------- COPY INDIVIDUAL COLOR ----------
  document.querySelectorAll(".color-bar").forEach((bar) => {
    const copyBtn = bar.querySelector(".bx-copy");

    copyBtn.addEventListener("click", () => {
      const color = bar.dataset.color;
      navigator.clipboard.writeText(color);
      showToast("Copied " + color);
    });
  });

  // 🔒 LOCK / UNLOCK
  lockBtn.addEventListener("click", () => {
    let isLocked = bar.dataset.locked === "true";

    // Toggle state
    bar.dataset.locked = !isLocked;

    // Change icon visually
    if (isLocked) {
      lockBtn.classList.remove("bx-lock-open");
      lockBtn.classList.add("bx-lock");
    } else {
      lockBtn.classList.remove("bx-lock");
      lockBtn.classList.add("bx-lock-open");
    }
  });
});





// ------------- TOAST NOTIFICATION -------------
function showToast(msg) {
    let toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = msg;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}




// ------------- SHARE PALETTE -------------
document.querySelectorAll(".color-bar").forEach(bar => {
    const shareBtn = bar.querySelector(".bx-share");

    shareBtn.addEventListener("click", () => {
        const bars = document.querySelectorAll(".color-bar");
        let colors = [];

        bars.forEach(b => colors.push(b.dataset.color.replace("#", "")));

        let link = "https://your-site.com/?colors=" + colors.join("-");

        let textToCopy = 
`Palette:
${colors.map(c => "#" + c).join("\n")}

Share Link:
${link}`;

        navigator.clipboard.writeText(textToCopy);
        showToast("Palette & Link Copied!");
    });
});


// ------------- LIGHT / DARK THEME TOGGLE -------------

const lightToggle = document.querySelector(".bx-moon");
function toggleLight() {
  const body = document.body;

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    lightToggle.classList.replace("bx-sun", "bx-moon");
  } else {
    body.classList.add("light-mode");
    lightToggle.classList.replace("bx-moon", "bx-sun");
  }
}
