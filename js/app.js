const menuOpen = document.querySelector(".mobile-menu__open");
const menuClose = document.querySelector(".mobile-menu__close");
const mobileNav = document.querySelector(".mobile-nav");
const navWrapper = document.querySelector(".nav-wrapper");

menuOpen.addEventListener("click", () => {
  // navWrapper.classList.add("active");
  mobileNav.classList.add("active");
  // document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
});

menuClose.addEventListener("click", () => {
  // navWrapper.classList.remove("active");
  mobileNav.classList.remove("active");
  document.body.style.position = "relative";

  // document.body.style.overflow = "auto";
});

//SEARCH BOOKS

const resultsDiv = document.getElementById("results");

function performSearch() {
  const query = document.getElementById("search-input").value;
  if (query.length > 2) {
    fetch(`https://freetestapi.com/api/v1/books?search=${query}`)
      .then((response) => response.json())
      .then((data) => displayResults(data));
    resultsDiv.style.display = "block";
  } else {
    resultsDiv.innerHTML = "<p>Please enter minimum of 3 characters.</p>";
  }
}

const searchButton = document.getElementById("search-button");
searchButton.onclick = () => performSearch();

function displayResults(data) {
  resultsDiv.innerHTML = "<h4>Search Results</h4>";
  const resultsItems = document.createElement("div");
  resultsItems.className = "results-items";
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "item-details";
  const resultsWrapper = document.createElement("div");
  resultsWrapper.className = "results-wrapper";
  resultsDiv.appendChild(resultsWrapper);
  resultsWrapper.appendChild(resultsItems);
  resultsWrapper.appendChild(detailsDiv);

  data.forEach((item) => {
    const resultItem = document.createElement("div");
    resultItem.className = "result-item";
    resultItem.textContent = item.title;
    resultItem.onclick = () => showDetails(item, detailsDiv);
    resultsItems.appendChild(resultItem);
  });
}

function showDetails(item, detailsDiv) {
  detailsDiv.innerHTML = "";
  const detailDiv = document.createElement("div");
  detailDiv.className = "item-detail";
  detailDiv.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><strong>Author:</strong> ${item.author}</p>
        <p><strong>Published:</strong> ${item.publication_year}</p>`;
  detailsDiv.appendChild(detailDiv);

  const jsonString = JSON.stringify(item, null, 2);
  const preElement = document.createElement("pre");
  preElement.className = "json-data";
  preElement.textContent = jsonString;
  detailsDiv.appendChild(preElement);
}
