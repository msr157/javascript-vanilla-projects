const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate"); //button --swap
const swap = document.getElementById("rate");

//Fetch exchanges rates and update the DOM
const calculate = () => {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`http://localhost:3002/exchange-rate/latest/api`)
    .then((res) => res.json)
    .then((data) => {
      // console.log(data.rates);

      const rate = data.rates[currency_two];
      console.log(rate);
    });
  //console.log(currency_one, currency_two);
};

//Evengt listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

calculate();
