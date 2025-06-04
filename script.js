
const chatlog = document.getElementById("chatlog");
const userInput = document.getElementById("userInput");

// Chatbot logic
function handleKey(event) {
  if (event.key === "Enter") {
    const input = userInput.value.trim();
    if (input !== "") {
      appendMessage("You", input);
      respond(input.toLowerCase());
      userInput.value = "";
    }
  }
}

function appendMessage(sender, message) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatlog.appendChild(div);
  chatlog.scrollTop = chatlog.scrollHeight;
}

function respond(message) {
  let reply = "";

  if (["hi", "hello", "hey"].includes(message)) {
    reply = "Hi there! I'm your Shafaq Naaz fan assistant. Ask me anything about her shows, quotes, or latest news!";
  } else if (message.includes("show")) {
    reply = "Shafaq Naaz starred in Mahabharat (2013), Chidiya Ghar (2016), Devi Adi Parashakti (2019), and more.";
  } else if (message.includes("quote")) {
    reply = `"Ignorance is the bliss." and "There’s something deeply sad about souls..." are her popular quotes.`;
  } else if (message.includes("news")) {
    reply = "Check the News section above for the latest updates on Shafaq Naaz.";
  } else {
    reply = "I'm still learning! Try asking about shows, quotes, or news.";
  }

  setTimeout(() => appendMessage("Bot", reply), 600);
}

// Toggle dark/light mode
function toggleMode() {
  document.body.classList.toggle("light-mode");
}

// Simulated news (replace with real API if needed)
const newsData = [
  { title: "Shafaq Naaz stuns in new Instagram reel", url: "#" },
  { title: "Actress Shafaq Naaz signs new TV drama", url: "#" },
  { title: "Fans celebrate Shafaq's iconic role in Mahabharat", url: "#" }
];

const newsContainer = document.getElementById("newsContainer");
if (newsContainer) {
  newsContainer.innerHTML = newsData.map(n => `<p><a href="${n.url}" target="_blank">${n.title}</a></p>`).join("");
}
