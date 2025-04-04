// JavaScript to implement a simple search engine

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const pages = [
            { name: "Home", url: "#home" },
            { name: "About", url: "#about" },
            { name: "Contact", url: "#contact" }
        ];

        const filteredResults = pages.filter(page => page.name.toLowerCase().includes(query));

        searchResults.innerHTML = "";
        filteredResults.forEach(result => {
            const resultItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = result.url;
            link.textContent = result.name;
            resultItem.appendChild(link);
            searchResults.appendChild(resultItem);
        });
    });
});