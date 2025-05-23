// data center
const defaultMovieData = [
  {
    name: "Avengers: Endgame",
    lead: "Robert Downey Jr.",
    collection: "2.798",
  },
  {
    name: "Avengers: Infinity War",
    lead: "Chris Hemsworth",
    collection: "2.048",
  },
  {
    name: "Spider-Man: No Way Home",
    lead: "Tom Holland",
    collection: "1.921",
  },
  { name: "The Avengers", lead: "Chris Evans", collection: "1.519" },
  {
    name: "Avengers: Age of Ultron",
    lead: "Scarlett Johansson",
    collection: "1.403",
  },
  { name: "Black Panther", lead: "Chadwick Boseman", collection: "1.347" },
  { name: "Iron Man 3", lead: "Robert Downey Jr.", collection: "1.215" },
  { name: "Captain Marvel", lead: "Brie Larson", collection: "1.131" },
  {
    name: "Spider-Man: Far From Home",
    lead: "Tom Holland",
    collection: "1.131",
  },
  {
    name: "Captain America: Civil War",
    lead: "Chris Evans",
    collection: "1.153",
  },
  { name: "Aquaman", lead: "Jason Momoa", collection: "1.152" },
  {
    name: "The Dark Knight Rises",
    lead: "Christian Bale",
    collection: "1.081",
  },
  { name: "The Dark Knight", lead: "Christian Bale", collection: "1.006" },
  {
    name: "Doctor Strange in the Multiverse of Madness",
    lead: "Benedict Cumberbatch",
    collection: "0.955",
  },
  { name: "Thor: Ragnarok", lead: "Chris Hemsworth", collection: "0.854" },
  {
    name: "Guardians of the Galaxy Vol. 3",
    lead: "Chris Pratt",
    collection: "0.845",
  },
  { name: "Wonder Woman", lead: "Gal Gadot", collection: "0.822" },
  { name: "Black Widow", lead: "Scarlett Johansson", collection: "0.759" },
  { name: "The Batman", lead: "Robert Pattinson", collection: "0.772" },
  {
    name: "Shang-Chi and the Legend of the Ten Rings",
    lead: "Simu Liu",
    collection: "0.432",
  },
];

// data management area
const saveToLocalStorage = () => {
  localStorage.setItem("superHeroMovies", JSON.stringify(superHeroMovies));
  localStorage.setItem(
    "newSuperHeroMovies",
    JSON.stringify(newSuperHeroMovies)
  );
  localStorage.setItem(
    "deletedSuperHeroMovies",
    JSON.stringify(deletedSuperHeroMovies)
  );
};

const loadFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

// local data center
const superHeroMovies =
  loadFromLocalStorage("superHeroMovies").length > 0
    ? loadFromLocalStorage("superHeroMovies")
    : [...defaultMovieData];
const newSuperHeroMovies = loadFromLocalStorage("newSuperHeroMovies");
const deletedSuperHeroMovies = loadFromLocalStorage("deletedSuperHeroMovies");

//global variables
let editModeOn = false;
let editMovieIdx = null;

// html ref areas
const cardContainer = document.querySelector(".container");

// cards overview section
const totalCardsRef = document.querySelector(".total-cards");
const addedCardsRef = document.querySelector(".added-cards");
const deletedCardsRef = document.querySelector(".deleted-cards");
const totalCardsBtn = document.querySelector(".total-cards-btn");
const addedCardsBtn = document.querySelector(".added-cards-btn");
const deletedCardsBtn = document.querySelector(".deleted-cards-btn");

// pop-up section
const overlay = document.getElementById("overlay");
const popUp = document.querySelector(".pop-up-container");
const popUpCloseBtn = document.querySelector(".close-btn-container");

// edit form
const editMovieName = document.querySelector(".edit-movie-name");
const editLeadRole = document.querySelector(".edit-lead-role");
const editTotalCollection = document.querySelector(".edit-total-collections");
const editFormErrorBox = document.querySelector(".edit-from-error");

// edit form btn
const editFormSubmitBtn = document.querySelector(".edit-form-submit");
const editFormCancelBtn = document.querySelector(".edit-form-cancel");

// add movie form
const addNewMovieBtn = document.querySelector(".add-new-movie-btn");
const formTitle = document.querySelector(".form-title");

const resetForm = () => {
  editMovieName.value = "";
  editLeadRole.value = "";
  editTotalCollection.value = "";
  editFormErrorBox.textContent = "";
  popUp.style.display = "none";
  overlay.classList.remove("active");
};

const updateCardsOverviewData = () => {
  totalCardsRef.textContent = `(${superHeroMovies.length})`;
  addedCardsRef.textContent = `(${newSuperHeroMovies.length})`;
  deletedCardsRef.textContent = `(${deletedSuperHeroMovies.length})`;
};

// main area for functions

const renderCards = (dataArray) => {
  cardContainer.innerHTML = "";
  cardContainer.innerHTML += dataArray.length
    ? dataArray
        .map(
          (movie, idx) =>
            `
        <div class="card">
          <p class="name">${movie.name}</p>
          <div class="card-body">
            <div class="left-sec">
              <p class="lead">${movie.lead}</p>
              <p class="collection">$ ${movie.collection} B</p>
              <div class="btn-container">
                <button class="edit-btn" onclick="editCard(${idx})">Edit</button>
                <button class="del-btn" onclick="deleteCard(${idx})">Delete</button>
              </div>
            </div>
            <div class="right-sec"><p>${idx + 1}</p></div>
          </div>
        </div>

  `
        )
        .join("")
    : "No data is available";
  updateCardsOverviewData();
};

const displayCards = () => {
  renderCards(superHeroMovies);
};

const displayNewCards = () => {
  renderCards(newSuperHeroMovies);
};
const displayDeletedCards = () => {
  renderCards(deletedSuperHeroMovies);
};
const createCard = () => {
  editModeOn = false;
  editMovieIdx = null;
  overlay.classList.add("active");
  popUp.style.display = "block";
  formTitle.textContent = "Add New Movie";
};
const editCard = (idx) => {
  editModeOn = true;
  editMovieIdx = idx;
  overlay.classList.add("active");
  popUp.style.display = "block";
  formTitle.textContent = "Edit Movie";
  // set previous data of card in form
  editMovieName.value = superHeroMovies[idx].name;
  editLeadRole.value = superHeroMovies[idx].lead;
  editTotalCollection.value = superHeroMovies[idx].collection;
  editFormErrorBox.textContent = "";
};
const deleteCard = (idx) => {
  const movieToDelete = {
    name: superHeroMovies[idx].name,
    lead: superHeroMovies[idx].lead,
    collection: superHeroMovies[idx].collection,
  };
  superHeroMovies.splice(idx, 1);
  deletedSuperHeroMovies.push(movieToDelete);
  saveToLocalStorage();
  displayCards();
  updateCardsOverviewData();
};

// function calling area
displayCards();

// event listener section

// form events listener
popUpCloseBtn.addEventListener("click", resetForm);

overlay.addEventListener("click", (e) => {
  if (!popUp.contains(e.target)) {
    resetForm();
  }
});

editFormSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = editMovieName.value.trim();
  const lead = editLeadRole.value.trim();
  const collection = editTotalCollection.value.trim();

  if (name && lead && collection) {
    if (isNaN(collection)) {
      editFormErrorBox.style.display = "block";
      editFormErrorBox.textContent = `Collection must be a number!!`;
    } else {
      const movie = { name, lead, collection };
      if (editModeOn) {
        superHeroMovies[editMovieIdx] = movie;
      } else {
        superHeroMovies.unshift(movie);
        newSuperHeroMovies.push(movie);
      }
      saveToLocalStorage();

      resetForm();
      displayCards();
      updateCardsOverviewData();
    }
  } else {
    editFormErrorBox.style.display = "block";
    editFormErrorBox.textContent = `All fields are required!`;
  }
});

editFormCancelBtn.addEventListener("click", resetForm);

addNewMovieBtn.addEventListener("click", createCard);

// filter section
totalCardsBtn.addEventListener("click", () => displayCards());
addedCardsBtn.addEventListener("click", () => displayNewCards());
deletedCardsBtn.addEventListener("click", () => displayDeletedCards());
