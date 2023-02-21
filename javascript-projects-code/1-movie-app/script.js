const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");


let ticketPrice = +movieSelect.value; //+ sign converts the string type valu obtained into number

//Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

//console.log(ticketPrice); for test purpose
//Update total and count

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected"); //element with .seat class whcih has .selected class too, will be selecte.

  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat); //selecting selected seats and getting index of seats with relative to seats available total.
  });

  console.log(seatsIndex); //checking index of seats selected
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex)); // console.log(selectedSeats);

  //saving data to local storage;

  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount);
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

//Get Data from localstorage and populate UI
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  // console.log(selectedSeats);
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
};

populateUI();
//movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value); //selectedIndex here selects the movie

  updateSelectedCount();
});

//seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied") //contains check if the element has the class or not.
  ) {
    console.log(e.target); // testing if click events working on selected seats
    e.target.classList.toggle("selected"); //toggle method add and remove class on the selected div element
    updateSelectedCount();
  }
});

//initial count and total set
updateSelectedCount();
