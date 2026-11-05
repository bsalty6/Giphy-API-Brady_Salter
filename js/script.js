console.log("script.js loaded");
const API_KEY = "9axRL9jBfBRGxRUPJNbz4htYqKeqfd67";

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

button.addEventListener("click", async () => {
  const query = searchInput.value || "cats";
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=12`;

  try {
    const response = await fetch(endpoint);
    const json = await response.json();

    const images = json.data.map((gif) => gif.images.original.url);
    console.log(images);

    gifContainer.innerHTML = "";
    for (const url of images) {
      gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    }
  } catch (error) {
    console.error("Giphy fetch failed:", error);
  }
});