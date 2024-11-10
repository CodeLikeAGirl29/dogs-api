document.getElementById("button-random-dog").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      // Check if the data was successfully fetched
      if (data.status === "success") {
        // Clear any existing content
        document.getElementById("content").innerHTML = "";

        // Create an img element for the new dog image
        const img = document.createElement("img");
        img.src = data.message;
        img.alt = "Random Dog Image";
        img.className = "img-fluid rounded shadow mt-3";

        // Append the image to the content div
        document.getElementById("content").appendChild(img);
      } else {
        console.error("Failed to fetch dog image");
      }
    })
    .catch(error => {
      console.error("Error fetching data from the Dog API:", error);
    });
});
document.getElementById("button-show-breed").addEventListener("click", () => {
  const breedInput = document.getElementById("input-breed").value.trim().toLowerCase();
  const contentDiv = document.getElementById("content");

  // Clear the content div each time the button is clicked
  contentDiv.innerHTML = "";

  if (breedInput === "") {
    // Display an error if the input is empty
    contentDiv.innerHTML = "<p>Please enter a breed name.</p>";
    return;
  }

  fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        // Create an img element for the breed image
        const img = document.createElement("img");
        img.src = data.message;
        img.alt = `${breedInput} dog image`;
        img.className = "img-fluid rounded shadow mt-3";

        // Append the image to the content div
        contentDiv.appendChild(img);
      } else {
        // Display an error message if the breed is not found
        contentDiv.innerHTML = "<p>Breed not found!</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching data from the Dog API:", error);
      contentDiv.innerHTML = "<p>Breed not found!</p>";
    });
});
document.getElementById("button-show-sub-breed").addEventListener("click", () => {
  const breedInput = document.getElementById("input-breed").value.trim().toLowerCase();
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = ""; // Clear previous content

  if (breedInput === "") {
    contentDiv.innerHTML = "<p>Please enter a breed name.</p>";
    return;
  }

  fetch(`https://dog.ceo/api/breed/${breedInput}/list`)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        const subBreeds = data.message;

        if (subBreeds.length === 0) {
          contentDiv.innerHTML = "<p>No sub-breeds found!</p>";
        } else {
          const subBreedList = document.createElement("ol");
          subBreeds.forEach(subBreed => {
            const listItem = document.createElement("li");
            listItem.textContent = subBreed;
            subBreedList.appendChild(listItem);
          });
          contentDiv.appendChild(subBreedList);
        }
      } else {
        contentDiv.innerHTML = "<p>Breed not found!</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching sub-breeds:", error);
      contentDiv.innerHTML = "<p>Breed not found!</p>";
    });
});
document.getElementById("button-show-all").addEventListener("click", () => {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = ""; // Clear previous content

  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        const breeds = data.message;
        const breedList = document.createElement("ol");

        Object.keys(breeds).forEach(breed => {
          const breedItem = document.createElement("li");
          breedItem.textContent = breed;

          // If the breed has sub-breeds, create a nested unordered list
          if (breeds[breed].length > 0) {
            const subBreedList = document.createElement("ul");
            breeds[breed].forEach(subBreed => {
              const subBreedItem = document.createElement("li");
              subBreedItem.textContent = subBreed;
              subBreedList.appendChild(subBreedItem);
            });
            breedItem.appendChild(subBreedList);
          }

          breedList.appendChild(breedItem);
        });

        contentDiv.appendChild(breedList);
      } else {
        contentDiv.innerHTML = "<p>Unable to fetch breeds.</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching all breeds:", error);
      contentDiv.innerHTML = "<p>Unable to fetch breeds.</p>";
    });
});