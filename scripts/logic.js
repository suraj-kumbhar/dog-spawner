const iniURL = "https://dog.ceo/api/breed/";
const lastURL = "/images/random";
const button = document.querySelector(".change-dog");
button.addEventListener("click", () => {
  fetchDogImg(document.querySelector(".breed-selector").value);
});

function fetchDogImg(url) {
  const URL = iniURL + url + lastURL;
  console.log(URL);
  const promise = fetch(URL);
  promise
    .then(response => {
      const processingResponse = response.json();
      return processingResponse;
    })
    .then(processedResponse => {
      document.querySelector(".dog-img").innerHTML = `
    <img class="dog" src="${processedResponse.message}" alt = "A cute ${url} dog."/>`;
    });
}