
const dice = document.querySelector("#dice");
const images = [
  "./img/inverted-dice-1.png",
  "./img/inverted-dice-2.png",
  "./img/inverted-dice-3.png",
  "./img/inverted-dice-4.png",
  "./img/inverted-dice-5.png",
  "./img/inverted-dice-6.png"
];

Button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const img = document.querySelector("#dice img");
  img.src = randomImage;
});

