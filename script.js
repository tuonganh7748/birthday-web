let attempts = 0;

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();
  const errorMessage = document.getElementById("errorMessage");
  
  if (input === "chồng em" || input === "chong em") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";
  } else {
    attempts++;
    if (attempts >= 3) {
      errorMessage.textContent = "💡 Gợi ý: Mật khẩu là 'Chồng Em'";
    } else {
      errorMessage.textContent = "Sai rồi, thử lại nhé!";
    }
  }
}

function answerYes() {
  document.getElementById("questionScreen").style.display = "none";
  document.getElementById("giftScreen").style.display = "block";
}

function answerNo() {
  document.getElementById("questionScreen").style.display = "none";
  document.getElementById("giftScreen").style.display = "block";
}

function showGifts() {
  document.getElementById("giftScreen").style.display = "none";
  document.getElementById("giftOptions").style.display = "block";
}

function showGift1() {
  document.getElementById("giftOptions").style.display = "none";
  document.getElementById("giftResult").innerHTML = `
    <p>🎉 Chúc mừng em đã chọn được màu vàng may mắn hiii</p>
    <button onclick="backToGifts()">Tiếp theo</button>
  `;
}

function showGift2() {
  document.getElementById("giftOptions").style.display = "none";
  document.getElementById("giftResult").innerHTML = `
    <p>🙊 Có cái con khỉ, tiền em giữ hết rồi còn gì, tham lam!</p>
    <button onclick="backToGifts()">Tiếp theo</button>
  `;
}

function showGift3() {
  document.getElementById("giftOptions").style.display = "none";
  document.getElementById("giftResult").innerHTML = `
    <p>❤️ Tốt lắm vợ yêu, cảm ơn em đã chọn anh</p>
    <img src="images/chongem.jpeg" style="max-width:90%; border-radius:10px; margin-top:10px;">
    <button onclick="showFinalStep()">Em bấm tiếp nhé</button>
  `;
}

function backToGifts() {
  document.getElementById("giftResult").innerHTML = "";
  document.getElementById("giftOptions").style.display = "block";
}

function showFinalStep() {
  document.getElementById("giftResult").innerHTML = `
    <p style="font-size:20px; font-weight:bold; color:#e91e63;">
      💖 Chúc mừng sinh nhật vợ yêu! Chúc em luôn hạnh phúc, xinh đẹp và mãi bên anh 💖
    </p>
    <img src="images/2vochong.jpeg" style="max-width:95%; border-radius:10px; margin-top:10px;">
    <iframe width="0" height="0"
      src="https://www.youtube.com/embed/_QfjzNtK0gk?autoplay=1&loop=1&playlist=_QfjzNtK0gk"
      frameborder="0" allow="autoplay; encrypted-media">
    </iframe>
  `;
}
