window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const text1 = document.querySelector(".dynamic-text");
const arraysentence = ["Welcome to Shopify", "Build your business", "Sell everywhere", "Market your brand"];
let count = 0;

function updateText() {
  text1.textContent = arraysentence[count];
  count++;
  if(count >= arraysentence.length) {
    count = 0; 
  }
}

updateText();

setInterval(updateText, 3000);

const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const cardsPerSlide = 3;  
let currentIndex = 0;

function nextSlide() {
  currentIndex += cardsPerSlide;

  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  const cardWidth = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

setInterval(nextSlide, 3000);


const images = document.querySelectorAll(".card img");

images.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.src = img.dataset.hover;   
  });

  img.addEventListener("mouseout", () => {
    img.src = img.dataset.original; 
  });
});

