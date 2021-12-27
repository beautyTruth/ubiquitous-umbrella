// // http://numbersapi.com/

// const factBtn = document.querySelector("button");
// const factInput = document.querySelector("input");
// const factPara = document.querySelector("p");

// factBtn.addEventListener("click", () => {
//   const number = factInput.value;
//   const numberFact = parseInt(number);

//   fetchFact(numberFact);
// });

// async function fetchFact(number) {
//   const factURL = "http://numbersapi.com/";
//   const proxyURL = "https://cors-anywhere.herokuapp.com/";

//   const response = await fetch(`${proxyURL}${factURL}${number}`, {
//     method: "GET",
//     headers: {
//       "x-requested-with": "text/plain",
//     },
//   });

//   const responseData = await response.text();

//   factPara.innerText = responseData;
// }

// to thine own self be true

/*
my code below
*/

const factBtn = document.querySelector("button");
const factInput = document.querySelector("input");
const factPara = document.querySelector("p");

factBtn.addEventListener("click", () => {
  const number = factInput.value;
  const numberFact = parseInt(number);

  fetchFact(numberFact);
});

async function fetchFact(boobies) {
  const factURL = "http://numbersapi.com/";
  const proxyURL = "https://cors-anywhere.herokuapp.com/";

  const response = await fetch(`${proxyURL}${factURL}${boobies}`, {
    method: "get",
    headers: {
      "x-requested-with": "text/plain",
    },
  });

  const responseData = await response.text();
  factPara.innerText = responseData;
}
