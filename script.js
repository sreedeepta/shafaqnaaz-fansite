// Toggle Light/Dark Mode
function toggleMode() {
  document.body.classList.toggle("light-mode");
}

// Chatbot logic
function handleKey(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("userInput");
    const chatlog = document.getElementById("chatlog");
    const userMsg = input.value.trim();
    if (!userMsg) return;

    chatlog.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;
    input.value = "";

    let botReply = "I'm not sure how to respond to that.";

    const lower = userMsg.toLowerCase();
    if (lower.includes("hi") || lower.includes("hello")) {
      botReply = "Hey Shafaqian! ?? Ask me anything about Shafaq Naaz!";
    } else if (lower.includes("shows") || lower.includes("tv")) {
      botReply = "She starred in Mahabharat, Chidiya Ghar, Devi Adi Parashakti, and more!";
    } else if (lower.includes("quote")) {
      botReply = `"Ignorance is the bliss" — Shafaq Naaz ??`;
    } else if (lower.includes("instagram")) {
      botReply = `Check out her Instagram: <a href="https://instagram.com/shafaqnaaz777" target="_blank">@shafaqnaaz777</a>`;
    } else if (lower.includes("news")) {
      botReply = "Scroll up! ?? I already fetched the latest news for you.";
    }

    chatlog.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
    chatlog.scrollTop = chatlog.scrollHeight;
  }
}

// Fetch latest news
async function fetchNews() {
  const apiKey = "066c8a76e997444c9d21e782383d34ff"; // your key
  const query = "Shafaq Naaz";
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&pageSize=3&sortBy=publishedAt`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const container = document.getElementById("newsContainer");
    container.innerHTML = "";

    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const div = document.createElement("div");
        div.className = "news-item";
        div.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.description || "No description."}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(div);
      });
    } else {
      container.innerHTML = "No recent news found.";
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    document.getElementById("newsContainer").innerText = "Failed to load news.";
  }
}

// Run on load
window.onload = fetchNews;
