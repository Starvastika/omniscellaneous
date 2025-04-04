// JavaScript to implement a simple search engine

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");
    const links = document.querySelectorAll(".links-list a");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        const filteredResults = Array.from(links).filter(link => {
            const searchText = link.getAttribute("data-search").toLowerCase();
            return searchText.includes(query);
        });

        searchResults.innerHTML = "";
        filteredResults.forEach(link => {
            const resultItem = document.createElement("li");
            const resultLink = document.createElement("a");
            resultLink.href = link.href;
            resultLink.textContent = link.textContent;
            resultItem.appendChild(resultLink);
            searchResults.appendChild(resultItem);
        });
    });
});