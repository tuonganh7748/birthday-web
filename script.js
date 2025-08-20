let attempt = 0;

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();
  const correctAnswers = ["chồng em", "danh tường anh"];
  let errorBox = document.getElementById("errorMessage");

  if (correctAnswers.includes(input)) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    attempt++;
    errorBox.innerText = "Sai rồi, thử lại nhé!";
    if (attempt >= 3) {
      errorBox.innerText = "Gợi ý: Chồng Em 💕";
    }
  }
}

function showGiftQuestion(answer) {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("giftChoice").style.display = "block";
}

function showGifts() {
  document.getElementById("giftChoice").style.display = "none";
  document.getElementById("giftList").style.display = "block";
}

function chooseGift(option) {
  document.getElementById("giftList").style.display = "none";
  const giftResult = document.getElementById("giftResult");
  const msg = document.getElementById("giftMessage");
  const img = document.getElementById("giftImage");
  const cont = document.getElementById("continueBtn");

  img.style.display = "none";
  cont.style.display = "none";

  if (option === 1) {
    msg.innerText = "Chúc mừng em, đã chọn được màu vàng may mắn hiii ✨";
  } else if (option === 2) {
    msg.innerText = "Có cái con khỉ 🐒, tiền em giữ hết rồi còn gì, tham lam quá!";
  } else if (option === 3) {
    msg.innerText = "Tốt lắm vợ yêu, cảm ơn em đã chọn anh ❤️";
    img.src = "images/anh1.jpg";
    img.style.display = "block";
    cont.style.display = "block";
  }

  giftResult.style.display = "block";
}

function showFinal() {
  document.getElementById("giftResult").style.display = "none";
  document.getElementById("finalBox").style.display = "block";
}