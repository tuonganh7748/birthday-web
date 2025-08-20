let attempts = 0;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function checkPassword() {
  let input = document.getElementById("password").value.trim().toLowerCase();
  if (input === "chồng em") {
    showScreen("question-screen");
  } else {
    attempts++;
    document.getElementById("error-message").innerText = "Sai mật khẩu!";
    if (attempts >= 3) {
      document.getElementById("error-message").innerText = "Gợi ý: Chồng Em 💕";
    }
  }
}

function showGiftChoice() {
  showScreen("gift-choice");
}

function chooseGift(num) {
  const giftMsg = document.getElementById("gift-message");
  giftMsg.innerHTML = "";

  if (num === 1) {
    giftMsg.innerHTML = "<p>🎉 Chúc mừng em, đã chọn được màu vàng may mắn hiii 💛</p>";
  } else if (num === 2) {
    giftMsg.innerHTML = "<p>🙈 Có cái con khỉ, tiền em giữ hết rồi còn gì, tham lam quá!</p>";
  } else if (num === 3) {
    giftMsg.innerHTML = `
      <p>💖 Tốt lắm vợ yêu, cảm ơn em đã chọn anh 💖</p>
      <img src="images/chongem.jpg" class="photo">
      <br><button onclick="showFinal()">👉 EM BẤM TIẾP NHÉ</button>
    `;
  }
}

function showFinal() {
  showScreen("final-screen");
  document.getElementById("final-message").innerText = "🎂 Chúc mừng sinh nhật vợ yêu! Anh yêu em nhiều lắm 💕";
  document.getElementById("final-image").src = "images/2vochong.jpg";
  startFireworks();
}

// Simple fireworks effect
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createFirework() {
    let x = random(0, canvas.width);
    let y = random(0, canvas.height / 2);
    let count = 50;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: x,
        y: y,
        speedX: random(-3, 3),
        speedY: random(-3, 3),
        life: 100
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      ctx.fillStyle = `rgba(255,255,255,${p.life/100})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;
      if (p.life <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
  }

  setInterval(createFirework, 1000);
  animate();
}
