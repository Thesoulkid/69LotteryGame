let balance = 1000;
let users = JSON.parse(localStorage.getItem('users')) || [];

function login() {
    let username = document.getElementById("username").value;
    let loginTime = new Date().toLocaleString();

    users.push({ username, loginTime });
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "home.html";
}

function startGame(duration) {
    let timeLeft = duration;
    document.getElementById("timer").innerText = timeLeft;
    
    let timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            generateResult();
        }
    }, 1000);
}

function generateResult() {
    let randomNumber = Math.floor(Math.random() * 10);
    let result = (randomNumber < 5) ? "small" : "big";
    document.getElementById("result").innerText = Number: ${randomNumber} - ${result.toUpperCase()};
}

function generateQR() {
    let amount = document.getElementById("amount").value;
    if (amount < 100 || amount > 50000) {
        alert("Enter amount between ₹100 - ₹50,000");
        return;
    }

    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: upi://pay?pa=6238271749@fam&pn=69Lottery&mc=0000&tid=1234567890&tr=${amount}&tn=Deposit&am=${amount}&cu=INR,
        width: 150,
        height: 150
    });
}
