const apiKey = "5186be68f0734e0f998475f4d9a8e99c";

// Fetch News Function
function fetchNews() {
    const category = document.getElementById("category").value;
    const country = document.getElementById("country").value;
    const query = document.getElementById("searchInput").value;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    if (query) {
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayNews(data.articles);
        })
        .catch(error => {
            alert("Failed to fetch news! Try again later.");
        });
}

// Display News Function
function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";

    articles.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.className = "news-card";

        newsCard.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News Image">
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        newsContainer.appendChild(newsCard);
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Load Default News
fetchNews();
